// 原生方法
import React from "react";
// ui kit
// import { Select } from "@arco-design/web-react";
import Product from "../components/common/product";
import BackToTopButton from "../components/common/BackToTopButton";
// json
import allProduct from "../assets/API/allProduct.json";

// ui kit
// const Option = Select.Option;
// const options = [
//   "超值套票",
//   "交通票券",
//   "景點門票",
//   "商品兌換券",
//   "現金抵用券",
// ];

const Collection: React.FC = () => {
  // 產品列表
  const productList: {
    id: string;
    industry: string;
    name: string;
    imageUrl: string;
    description: string;
    tags: string[];
    mask?: boolean;
  }[] = [...allProduct];

  productList[0].mask = true;
  productList[3].mask = true;
  productList[5].mask = true;
  productList[6].mask = true;
  //   {
  //     id: 1,
  //     url: "https://ohh.okinawa/wpdir/wp-content/uploads/2018/07/59827ddcc6f8f06485fad8836fb30162.jpg",
  //     title: "格上租車券+阿里山門票+奮起湖經典三大美食",
  //     money: "399",
  //     tag: ["國旅卡適用", "組合套票"],
  //     productType: "超值套票",
  //     vehicleType: "無障礙班車",
  //     createDate: "2023-01-01",
  //     mask:true
  //   },
  //   {
  //     id: 2,
  //     url: "https://ohh.okinawa/wpdir/wp-content/uploads/2018/07/59827ddcc6f8f06485fad8836fb30162.jpg",
  //     title: "格上租車券+阿里山門票+奮起湖經典三大美食",
  //     money: "399",
  //     tag: ["國旅卡適用", "組合套票"],
  //     productType: "超值套票",
  //     vehicleType: "可攜折疊式/拆解式自行車",
  //     createDate: "2023-01-01",
  //   },
  //   {
  //     id: 3,
  //     url: "https://ohh.okinawa/wpdir/wp-content/uploads/2018/07/59827ddcc6f8f06485fad8836fb30162.jpg",
  //     title: "格上租車券+阿里山門票+奮起湖經典三大美食",
  //     money: "399",
  //     tag: ["國旅卡適用", "組合套票"],
  //     productType: "超值套票",
  //     vehicleType: "可攜折疊式/拆解式自行車",
  //     createDate: "2023-01-01",
  //     mask:true
  //   },
  //   {
  //     id: 4,
  //     url: "https://ohh.okinawa/wpdir/wp-content/uploads/2018/07/59827ddcc6f8f06485fad8836fb30162.jpg",
  //     title: "格上租車券+阿里山門票+奮起湖經典三大美食",
  //     money: "399",
  //     tag: ["國旅卡適用", "組合套票"],
  //     productType: "交通票券",
  //     vehicleType: "無障礙班車",
  //     createDate: "2023-01-01",
  //   },
  //   {
  //     id: 5,
  //     url: "https://ohh.okinawa/wpdir/wp-content/uploads/2018/07/59827ddcc6f8f06485fad8836fb30162.jpg",
  //     title: "格上租車券+阿里山門票+奮起湖經典三大美食",
  //     money: "399",
  //     tag: ["國旅卡適用", "組合套票"],
  //     productType: "交通票券",
  //     vehicleType: "可攜寵物",
  //     createDate: "2023-01-01",
  //     mask:true
  //   },
  //   {
  //     id: 6,
  //     url: "https://ohh.okinawa/wpdir/wp-content/uploads/2018/07/59827ddcc6f8f06485fad8836fb30162.jpg",
  //     title: "格上租車券+阿里山門票+奮起湖經典三大美食",
  //     money: "399",
  //     tag: ["國旅卡適用", "組合套票"],
  //     productType: "交通票券",
  //     vehicleType: "可攜寵物",
  //     createDate: "2023-01-01",
  //     mask:true
  //   },
  //   {
  //     id: 7,
  //     url: "https://ohh.okinawa/wpdir/wp-content/uploads/2018/07/59827ddcc6f8f06485fad8836fb30162.jpg",
  //     title: "格上租車券+阿里山門票+奮起湖經典三大美食",
  //     money: "399",
  //     tag: ["國旅卡適用", "組合套票"],
  //     productType: "景觀門票",
  //     vehicleType: "可攜折疊式/拆解式自行車",
  //     createDate: "2023-01-01",
  //   },
  //   {
  //     id: 8,
  //     url: "https://ohh.okinawa/wpdir/wp-content/uploads/2018/07/59827ddcc6f8f06485fad8836fb30162.jpg",
  //     title: "格上租車券+阿里山門票+奮起湖經典三大美食",
  //     money: "399",
  //     tag: ["國旅卡適用", "組合套票"],
  //     productType: "商品兌換券",
  //     vehicleType: "可攜寵物",
  //     createDate: "2023-01-01",
  //   },
  //   {
  //     id: 9,
  //     url: "https://ohh.okinawa/wpdir/wp-content/uploads/2018/07/59827ddcc6f8f06485fad8836fb30162.jpg",
  //     title: "格上租車券+阿里山門票+奮起湖經典三大美食",
  //     money: "399",
  //     tag: ["國旅卡適用", "組合套票"],
  //     productType: "景觀門票",
  //     vehicleType: "無障礙班車",
  //     createDate: "2023-01-01",
  //   },
  // ];

  return (
    <div className={`max-w-[1920px] `}>
      {/* banner */}
      <div className={` h-[80px] bg-[#E5E6EB] md:h-[160px] `}></div>
      {/* 主內容 */}
      <div
        className={` flex flex-col max-w-[1200px] m-[0_auto] px-[12px] py-[20px] md:px-0 md:w-[720px] md:py-[40px] xl:w-auto xl:px-[24px] xl:pb-[80px] xl:pt-[40px] `}
      >
        {/* 篩選 */}
        {/* <Select
          placeholder="所有商品"
          addBefore="商品分類"
          allowClear
          className={`py-[16px] md:w-[240px] md:self-end`}
        >
          {options.map((option) => (
            <Option key={option} value={option}>
              {option}
            </Option>
          ))}

        </Select> */}
        {/* 收藏產品 */}
        <div
          className={`flex flex-col gap-[12px] md:flex-row md:flex-wrap xl:justify-between `}
        >
          {productList.map((productItem) => (
            <Product
              key={productItem.id}
              id={productItem.id}
              url={productItem.imageUrl}
              title={productItem.name}
              tag={productItem.tags}
              mask={productItem.mask}
            />
          ))}
        </div>
      </div>
      <BackToTopButton />
    </div>
  );
};

export default Collection;
