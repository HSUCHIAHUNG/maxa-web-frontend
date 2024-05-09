import React from "react";
// 匯入組件
import Banner from "../../components/Carousel";
// ui kit
import { Carousel } from "@arco-design/web-react";
// 匯入圖片
import parnerImg from "../../assets/images/homePage/Partner_color_1.svg";
import PhotoTitle from "../../components/Home/PhotoTitle";
import News from "../..//components/common/News";
import Product from "../..//components/common/product";

const Patner: React.FC = () => {
  const imageSrc = [
    "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp",
    "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp",
    "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp",
    "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/24e0dd27418d2291b65db1b21aa62254.png~tplv-uwbnlip3yd-webp.webp",
  ];

  const newsList = [
    {
      id: 1,
      url: "https://tabiiro.travel/img/articles/21032501/main.jpg",
      title: "櫻花季優惠來嘍!!",
      date: "活動至 2024/12/26 23;59 止",
    },
    {
      id: 2,
      url: "https://image.kkday.com/v2/image/get/w_960%2Cc_fit%2Cq_55%2Ct_webp/s1.kkday.com/product_144240/20230519001422_pi5Eo/jpg",
      title: "暑假暢玩沖繩",
      date: "活動至 2024/12/26 23;59 止",
    },
    {
      id: 3,
      url: "https://pic.amwaynet.com.tw/PR/ishare/article/2023061903d50269c264453eac3e8ce071016b06.jpg",
      title: "暑假暢玩沖繩",
      date: "活動至 2024/12/26 23;59 止",
    },
  ];

  const productList = [
    {
      id: 1,
      url: "https://ohh.okinawa/wpdir/wp-content/uploads/2018/07/59827ddcc6f8f06485fad8836fb30162.jpg",
      title: "格上租車券+阿里山門票+奮起湖經典三大美食",
      money: "399",
      tag: ["國旅卡適用", "組合套票"],
    },
    {
      id: 2,
      url: "https://ohh.okinawa/wpdir/wp-content/uploads/2018/07/59827ddcc6f8f06485fad8836fb30162.jpg",
      title: "格上租車券+阿里山門票+奮起湖經典三大美食",
      money: "399",
      tag: ["國旅卡適用", "組合套票"],
    },
    {
      id: 3,
      url: "https://ohh.okinawa/wpdir/wp-content/uploads/2018/07/59827ddcc6f8f06485fad8836fb30162.jpg",
      title: "格上租車券+阿里山門票+奮起湖經典三大美食",
      money: "399",
      tag: ["國旅卡適用", "組合套票"],
    },
  ];

  return (
    <section>
      <Carousel
        className={`overflow-x-hidden max-w-[1920px] h-[320px] md:h-[500px] `}
        autoPlay={true}
      >
        {imageSrc.map((src) => (
          <Banner key={src} src={src} />
        ))}
      </Carousel>

      <div className=" w-[100%] max-w-[1200px] m-[0_auto] flex flex-col px-[12px] pb-[20px] md:pt-[40px] md:pb-[40px] xl:pb-[80px] md:px-[24px] md:gap-[40px] ">
        {/* parner */}
        <div className="md:w-[720px] xl:w-[1152px]">
          <PhotoTitle
            text="合作夥伴"
            subtitle="Partner"
            className={`py-[16px]`}
          />
          <div
            className={` flex flex-col justify-center items-center gap-[12px] md:gap-[24px] xl:gap-[40px] md:flex-row`}
          >
            <img
              src={parnerImg}
              alt="parner"
              className={`w-[301px] h-[232px] md:w-[232px] xl:w-[360px]`}
            />
            <div className={`text-center text-[12px] md:text-left`}>
              <p className={`pb-[12px] text-[14px] md:text-[20px]`}>台灣好行</p>
              <p className={`pb-[12px] md:text-[14px]`}>
                台灣好行是專為旅遊規劃設計的公車服務，從臺灣各大景點所在地附近的各大臺鐵、高鐵站接送旅客前往臺灣主要觀光景點。
                不想長途駕車、參加旅行團出遊的旅客，搭乘「台灣好行（景點接駁）旅遊服務」是最適合自行規劃行程、輕鬆出遊的好方式，也正響應了節能減碳的旅遊新風潮。
              </p>
            </div>
          </div>
        </div>
        {/* 最新消息 */}
        <div className="md:w-[720px] xl:w-[1152px]">
          <PhotoTitle
            text="最新消息"
            subtitle="Latest News"
            className={`py-[16px]`}
          />
          <div className=" flex gap-[20px] flex-col md:flex-row ">
            {newsList.map((newsList) => (
              <News
                key={newsList.id}
                url={newsList.url}
                title={newsList.title}
                date={newsList.date}
              />
            ))}
          </div>
        </div>
        {/* 熱門商品 */}
        <div className="md:w-[720px] xl:w-[1152px]">
          <PhotoTitle
            text="熱門商品"
            subtitle="Popular product"
            className={`py-[16px]`}
          />
          <div className=" flex gap-[20px] flex-col md:flex-row ">
            {productList.map((productItem) => (
              <Product
                key={productItem.id}
                url={productItem.url}
                title={productItem.title}
                money={productItem.money}
                tag={productItem.tag}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Patner;
