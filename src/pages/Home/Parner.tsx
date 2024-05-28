import React from "react";
// 匯入組件
import Banner from "../../components/Carousel";
// ui kit
import { Carousel } from "@arco-design/web-react";
// 匯入圖片
import * as parnerImage from "./parnerImg";
import parnerImg from "../../assets/images/homePage/Partner_color_1.svg";
import PhotoTitle from "../../components/Home/PhotoTitle";
import Product from "../..//components/common/product";
// json
import parterList from '../../assets/parner.json' 

const Patner: React.FC = () => {
  // 定義 parnerImg 的類型
  type ParnerImgType = {
    [key: string]: string;
  };

  const imageSrc: ParnerImgType = parnerImage;

  console.log(parterList.AC010001.route);


  return (
    <section>
      <Carousel
        className={`overflow-x-hidden max-w-[1920px] h-[320px] md:h-[500px] `}
        autoPlay={true}
      >
        {Object.keys(imageSrc).map((key) => (
          <Banner key={key} src={imageSrc[key]} />
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
        {/* <div className="md:w-[720px] xl:w-[1152px]">
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
        </div> */}
        {/* 熱門商品 */}
        <div className="md:w-[720px] xl:w-[1152px]">
          <PhotoTitle
            text="熱門商品"
            subtitle="Popular product"
            className={`py-[16px]`}
          />
          <div className=" flex gap-[20px] flex-col md:flex-row ">
            {parterList.AC010001.route.map((productItem) => (
              <Product
                key={productItem.id}
                url={productItem.url}
                title={productItem.title}
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
