// react原生方法
import React, { useState } from "react";
import { Link } from "react-router-dom";
// 匯入組件
import Banner from "../../components/Carousel";
import Product from "../../components/common/product";
import BackToTopButton from "../../components/common/BackToTopButton";
import ProductFilter from "../../components/Order/ProductFilter";
// ui kit
import {
  Carousel,
  Dropdown,
  Menu,
  Button,
  Pagination,
} from "@arco-design/web-react";
import { IconDown } from "@arco-design/web-react/icon";

const Order: React.FC = () => {
  // 控制form(主表單)開關狀態
  const [MainMenu, setMainMenu] = useState(false);

  // 處理當用戶選取或取消選取複選框時的函數
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event);
  };

  // banner
  const imageSrc = [
    "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp",
    "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp",
    "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp",
    "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/24e0dd27418d2291b65db1b21aa62254.png~tplv-uwbnlip3yd-webp.webp",
  ];

  // 產品列表
  const productList = [
    {
      id: 1,
      url: "https://ohh.okinawa/wpdir/wp-content/uploads/2018/07/59827ddcc6f8f06485fad8836fb30162.jpg",
      title: "格上租車券+阿里山門票+奮起湖經典三大美食",
      money: "399",
      tag: ["國旅卡適用", "組合套票"],
      productType: "超值套票",
      vehicleType: "無障礙班車",
      createDate: "2023-01-01",
    },
    {
      id: 2,
      url: "https://ohh.okinawa/wpdir/wp-content/uploads/2018/07/59827ddcc6f8f06485fad8836fb30162.jpg",
      title: "格上租車券+阿里山門票+奮起湖經典三大美食",
      money: "399",
      tag: ["國旅卡適用", "組合套票"],
      productType: "超值套票",
      vehicleType: "可攜折疊式/拆解式自行車",
      createDate: "2023-01-01",
    },
    {
      id: 3,
      url: "https://ohh.okinawa/wpdir/wp-content/uploads/2018/07/59827ddcc6f8f06485fad8836fb30162.jpg",
      title: "格上租車券+阿里山門票+奮起湖經典三大美食",
      money: "399",
      tag: ["國旅卡適用", "組合套票"],
      productType: "超值套票",
      vehicleType: "可攜折疊式/拆解式自行車",
      createDate: "2023-01-01",
    },
    {
      id: 4,
      url: "https://ohh.okinawa/wpdir/wp-content/uploads/2018/07/59827ddcc6f8f06485fad8836fb30162.jpg",
      title: "格上租車券+阿里山門票+奮起湖經典三大美食",
      money: "399",
      tag: ["國旅卡適用", "組合套票"],
      productType: "交通票券",
      vehicleType: "無障礙班車",
      createDate: "2023-01-01",
    },
    {
      id: 5,
      url: "https://ohh.okinawa/wpdir/wp-content/uploads/2018/07/59827ddcc6f8f06485fad8836fb30162.jpg",
      title: "格上租車券+阿里山門票+奮起湖經典三大美食",
      money: "399",
      tag: ["國旅卡適用", "組合套票"],
      productType: "交通票券",
      vehicleType: "可攜寵物",
      createDate: "2023-01-01",
    },
    {
      id: 6,
      url: "https://ohh.okinawa/wpdir/wp-content/uploads/2018/07/59827ddcc6f8f06485fad8836fb30162.jpg",
      title: "格上租車券+阿里山門票+奮起湖經典三大美食",
      money: "399",
      tag: ["國旅卡適用", "組合套票"],
      productType: "交通票券",
      vehicleType: "可攜寵物",
      createDate: "2023-01-01",
    },
    {
      id: 7,
      url: "https://ohh.okinawa/wpdir/wp-content/uploads/2018/07/59827ddcc6f8f06485fad8836fb30162.jpg",
      title: "格上租車券+阿里山門票+奮起湖經典三大美食",
      money: "399",
      tag: ["國旅卡適用", "組合套票"],
      productType: "景觀門票",
      vehicleType: "可攜折疊式/拆解式自行車",
      createDate: "2023-01-01",
    },
    {
      id: 8,
      url: "https://ohh.okinawa/wpdir/wp-content/uploads/2018/07/59827ddcc6f8f06485fad8836fb30162.jpg",
      title: "格上租車券+阿里山門票+奮起湖經典三大美食",
      money: "399",
      tag: ["國旅卡適用", "組合套票"],
      productType: "商品兌換券",
      vehicleType: "可攜寵物",
      createDate: "2023-01-01",
    },
    {
      id: 9,
      url: "https://ohh.okinawa/wpdir/wp-content/uploads/2018/07/59827ddcc6f8f06485fad8836fb30162.jpg",
      title: "格上租車券+阿里山門票+奮起湖經典三大美食",
      money: "399",
      tag: ["國旅卡適用", "組合套票"],
      productType: "景觀門票",
      vehicleType: "無障礙班車",
      createDate: "2023-01-01",
    },
  ];

  // 取得產品
  const getProduct = (pageNumber:number, pageSize:number) => {
    console.log(pageNumber);
    console.log(pageSize);
  };

  return (
    <div className=" relative ">
      <Carousel
        className={`overflow-x-hidden max-w-[1920px] h-[320px] md:h-[500px] `}
        autoPlay={true}
      >
        {imageSrc.map((src) => (
          <Banner key={src} src={src} />
        ))}
      </Carousel>
      {/* 列表外層 */}
      <div
        className={`xl:flex xl:flex-row-reverse xl:justify-center xl:gap-[24px] xl:pt-[60px] xl:pb-[80px] `}
      >
        <div
          className={` w-[100%] h-[100%] px-[12px] pt-[16px] pb-[23px] md:pb-[40px] md:px-[24px]  md:w-[768px] xl:w-[940px] xl:p-[0] `}
        >
          {/* 上方選單 */}
          <div
            className={`flex justify-end items-center md:justify-between mb-[12px]`}
          >
            <div className="hidden md:block">搜尋『關鍵字』共2,000個結果</div>
            <div className="">
              <button
                onClick={() => setMainMenu(true)}
                className={`bg-[#F2F3F5] text-center px-[16px] py-[5px] rounded-[2px] mr-[8px] xl:hidden `}
              >
                篩選商品
              </button>
              <Dropdown
                droplist={
                  <Menu>
                    <Menu.Item key="1">新 - 舊</Menu.Item>
                    <Menu.Item key="2">舊 - 新</Menu.Item>
                  </Menu>
                }
              >
                <Button>排序</Button>
              </Dropdown>
              <Dropdown
                droplist={
                  <Menu>
                    <Menu.Item key="1">最推薦</Menu.Item>
                    <Menu.Item key="2">最低價</Menu.Item>
                    <Menu.Item key="3">最新上架</Menu.Item>
                  </Menu>
                }
              >
                <Button>
                  <span>最推薦</span>
                  <IconDown />
                </Button>
              </Dropdown>
            </div>
          </div>
          {/* 商品列表分頁內容 */}
          <div
            className={`flex flex-col gap-[12px] md:flex-row md:flex-wrap xl:justify-between `}
          >
            {productList.map((productItem) => (
              <Link key={productItem.id} to="/order/test">
                <Product
                  className={`xl:!w-[284px]`}
                  url={productItem.url}
                  title={productItem.title}
                  money={productItem.money}
                  tag={productItem.tag}
                />
              </Link>
            ))}
          </div>
        </div>
        {/* 篩選列表 */}
        <ProductFilter
          MainMenuOpen={MainMenu}
          onSubmitForm={handleSubmit}
          MainMenuClose={() => setMainMenu(false)}
        />
      </div>
      <BackToTopButton />
      {/* 電腦版分頁 */}
      <Pagination
        onChange={getProduct}
        className={`justify-center hidden md:flex `}
        total={20}
      />
      {/* 手機版分頁 */}
      <Pagination
        onChange={getProduct}
        pageSize={9}
        simple
        total={500}
        size="small"
        className={`md:hidden justify-center`}
      />
    </div>
  );
};

export default Order;
