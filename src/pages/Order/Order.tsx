import React, { useEffect, useState } from "react";
// redux
import { orderActions } from "../../stores/order";
import { useAppDispatch } from "../../stores/index";
import Banner from "../../components/Carousel";
import Product from "../../components/common/product";
import BackToTopButton from "../../components/common/BackToTopButton";
import Mask from "../../components/common/Mask";
import { Carousel, Pagination, Select } from "@arco-design/web-react";
import { ProductList, Filters, SubMenuKeys } from "./type";
import { RootState } from "../../stores/index";
import { useSelector } from "react-redux";
// json
import allProduct from "../../assets/API/allProduct.json";

const Option = Select.Option;
const recommendOptions = ["最推薦", "最新上架"];

const imageSrc = [
  "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp",
  "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp",
  "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp",
  "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/24e0dd27418d2291b65db1b21aa62254.png~tplv-uwbnlip3yd-webp.webp",
];

// 產品列表-初始資料
const Order: React.FC = () => {
  // redux(方法調用)
  const dispatch = useAppDispatch();

  const [mainMenu, setMainMenu] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(9);
  const [filters, setFilters] = useState<Filters>({
    industry: [],
    facility: [],
    region: [],
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleFilterChange = (type: keyof Filters, values: string[]) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [type]: values,
    }));
    setCurrentPage(1); // Reset to the first page whenever filters change
  };

  const applyFilters = (products: ProductList) => {
    return products.filter((product) => {
      const matchesIndustry = filters.industry.length
        ? filters.industry.includes(product.industry)
        : true;
      const matchesFacility = filters.facility.length
        ? filters.facility.every((facility) => product.tags.includes(facility))
        : true;
      return matchesIndustry && matchesFacility;
    });
  };

  //
  useEffect(() => {
    dispatch(orderActions.resetBookingData());
  }, [dispatch]);

  // header搜尋產品條件
  const searchProduct = useSelector(
    (state: RootState) => state.order.searchProduct
  );

  // 產品列表狀態
  const [filterProductList, setFilterProductList] = useState(allProduct);

  // 產品列表篩選
  useEffect(() => {
    const filtered = allProduct.filter((item) =>
      item.name.includes(searchProduct)
    );
    console.log(filtered);
    setFilterProductList(filtered);
  }, [searchProduct]);

  const filteredProducts = applyFilters(filterProductList);

  const currentProductList = filteredProducts.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  // ProductFilter logic moved here
  const [subMenu, setSubMenu] = useState<Record<SubMenuKeys, boolean>>({
    業者: true,
    車種設施: true,
  });

  const orderFilterList: SubMenuKeys[] = ["業者", "車種設施"];
  const industryList = [
    "屏東客運",
    "南投客運",
    "國光客運",
    "桃園客運",
    "金門縣公共車船管理處",
  ];
  const ticketTag = [
    "可攜寵物",
    "語音報站",
    "可攜折疊式/拆解式自行車",
    "部分無障礙班車",
    "導覽服務",
    "預約車位",
  ];

  function formOpenFn(orderFilterItem: SubMenuKeys) {
    setSubMenu((prevState) => ({
      ...prevState,
      [orderFilterItem]: !prevState[orderFilterItem],
    }));
  }

  const handleCheckboxChange = (type: keyof Filters, value: string) => {
    setFilters((prevFilters) => {
      const updatedFilters = prevFilters[type].includes(value)
        ? prevFilters[type].filter((item) => item !== value)
        : [...prevFilters[type], value];
      handleFilterChange(type, updatedFilters);
      return { ...prevFilters, [type]: updatedFilters };
    });
  };

  const renderCheckboxList = (items: string[], type: keyof Filters) => (
    <div className="bg-[#F7F8FA] pl-[34px] pr-[12px] flex flex-col">
      {items.map((item) => (
        <div
          key={item}
          className="flex gap-[8px] border-b border-solid border-[#E5E6EB] py-[9px]"
        >
          <input
            type="checkbox"
            name={item}
            onChange={() => handleCheckboxChange(type, item)}
            checked={filters[type].includes(item)}
          />
          <label>{item}</label>
        </div>
      ))}
    </div>
  );

  return (
    <div className="relative">
      <Carousel
        className="overflow-x-hidden max-w-[1920px] h-[320px] md:h-[500px]"
        autoPlay={true}
      >
        {imageSrc.map((src) => (
          <Banner key={src} src={src} />
        ))}
      </Carousel>

      <div className="max-w-[1200px] px-[12px] md:px-[24px] xl:m-[0_auto] xl:flex xl:flex-row-reverse xl:gap-[24px] xl:pt-[60px] xl:pb-[80px]">
        <div className="w-[100%] h-[100%] pt-[16px] pb-[23px] md:w-[720px] md:pb-[40px] md:m-[0_auto] xl:w-[940px] xl:p-[0]">
          <div className="flex justify-end items-center md:justify-between mb-[12px]">
            <div className="hidden md:block">
              搜尋『關鍵字』共{filteredProducts.length}個結果
            </div>
            <div>
              <button
                onClick={() => setMainMenu(true)}
                className="bg-[#F2F3F5] text-center px-[16px] py-[5px] rounded-[2px] mr-[8px] xl:hidden"
              >
                篩選商品
              </button>
              <Select
                addBefore="排序"
                placeholder="請選擇"
                defaultValue="最推薦"
                className="w-[205px] md:w-[240px]"
              >
                {recommendOptions.map((option) => (
                  <Option key={option} value={option}>
                    {option}
                  </Option>
                ))}
              </Select>
            </div>
          </div>

          <div className="flex flex-col gap-[12px] md:flex-row md:flex-wrap">
            {currentProductList.map((productItem) => (
              <Product
                key={productItem.id}
                id={productItem.id}
                className="xl:!w-[284px]"
                url={productItem.imageUrl}
                title={productItem.name}
                tag={productItem.tags}
              />
            ))}
          </div>
        </div>

        {/* ProductFilter section */}
        {mainMenu && (
          <Mask
            className={` ${
              !mainMenu ? "hidden xl:hidden" : "md:block xl:hidden"
            } `}
          ></Mask>
        )}
        <div
          className={`fixed top-0 left-0 w-full h-full overflow-auto z-50 bg-[#fff] md:w-[320px] md:right-0 md:left-[initial] xl:w-[260px] xl:h-[746px] xl:contents ${
            !mainMenu ? "hidden xl:contents" : "block xl:contents"
          } `}
        >
          <form onSubmit={handleSubmit} className="xl:p-0 xl:w-[260px]">
            <div className="h-[50px] flex items-center shadow-md xl:hidden">
              <span
                onClick={() => setMainMenu(false)}
                className="icon-[bitcoin-icons--arrow-left-filled] w-[24px] h-[24px] !ml-[12px]"
              ></span>
              <p className="m-[0_auto]">篩選商品</p>
            </div>

            {orderFilterList.map((orderFilterItem) => (
              <div
                key={orderFilterItem}
                className={`m-[12px] border-[2px] border-solid border-[#E5E6EB] rounded-[8px] mb-[12px] overflow-hidden duration-300 ${
                  subMenu[orderFilterItem]
                    ? "h-auto duration-300"
                    : "h-[42px] duration-300"
                }`}
              >
                <div
                  onClick={() => formOpenFn(orderFilterItem)}
                  className="bg-[#fff] flex gap-[6px] items-center px-[12px] py-[9px]"
                >
                  <span className="icon-[emojione-monotone--red-triangle-pointed-down] w-[10px] h-[10px]"></span>
                  <p>{orderFilterItem}</p>
                </div>

                <div className="bg-[#F7F8FA] flex flex-col overflow-auto">
                  {orderFilterItem === "業者" &&
                    renderCheckboxList(industryList, "industry")}
                  {orderFilterItem === "車種設施" &&
                    renderCheckboxList(ticketTag, "facility")}
                </div>
              </div>
            ))}
          </form>
        </div>
        {/* End ProductFilter section */}
      </div>
      <BackToTopButton />
      <Pagination
        onChange={setCurrentPage}
        pageSize={pageSize}
        total={filteredProducts.length}
        current={currentPage} // Ensure the pagination component reflects the current page
        className="justify-center mb-[40px] hidden md:flex"
      />
      <Pagination
        onChange={setCurrentPage}
        total={filteredProducts.length}
        pageSize={pageSize}
        current={currentPage} // Ensure the pagination component reflects the current page
        simple
        size="small"
        className="md:hidden justify-center"
      />
    </div>
  );
};

export default Order;
