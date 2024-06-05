import React from "react";
// router
import { useParams } from "react-router-dom";
// ui kit
import { Carousel } from "@arco-design/web-react";
// 匯入圖片
import * as PingtungImages from "./ParnerImg/PingtungImages";
import * as TaoyuanImages from "./ParnerImg/TaoyuanImages";
import * as KinmenImages from "./ParnerImg/KinmenImages";
import * as GuoguangImages from "./ParnerImg/GuoguangImages";
import Taoyuan_logo from "@/assets/images/parner/Taoyuan_logo.png";
import kinmen_logo from "@/assets/images/parner/kinmen_logo.png";
import Pingtung_logo from "@/assets/images/parner/Pingtung_logo.png";
import Guoguang_logo from "@/assets/images/parner/Guoguang_logo.png";

// 匯入組件
// import Banner from "../../components/Carousel";
import PhotoTitle from "../../components/Home/PhotoTitle";
import Product from "../../components/common/product";
// json
import parterList from "../../assets/API/parner.json";

const Patner: React.FC = () => {
  // 取得動態參數
  const params = useParams<{ id?: string }>();

  // 定義 parterList 的類型
  type ParterListType = typeof parterList;

  // logo map參照
  const logoGroups = {
    AC010001: Pingtung_logo,
    AC010002: Guoguang_logo,
    AC010003: Taoyuan_logo,
    AC010004: kinmen_logo,
    AC010005: Guoguang_logo,
  };

  // logo背景顏色
  const backgroundColors = {
    AC010001: "#ADE5F5",
    AC010002: "#EDC6C9",
    AC010003: "#F3D0D3",
    AC010004: "#FFD37B",
    AC010005: "#EDC6C9",
  };

  // 根據不同的城市動態設置圖片
  let imageSrc: { [key: string]: string } = {};

  // logo圖片依照id參照回傳對應圖片 
  const logoSrc = params.id
    ? logoGroups[params.id as keyof typeof logoGroups]
    : "";

  // logo背景顏色依照id參照回傳對應圖片
  const backgroundColor = params.id
    ? backgroundColors[params.id as keyof typeof backgroundColors]
    : "#FFFFFF";

  // 路線圖片列表
  switch (params.id) {
    case "AC010001":
      imageSrc = PingtungImages;
      break;
    case "AC010002":
      imageSrc = GuoguangImages;
      break;
    case "AC010003":
      imageSrc = TaoyuanImages;
      break;
    case "AC010004":
      imageSrc = KinmenImages;
      break;

    case "AC010005":
      imageSrc = GuoguangImages;
      break;
    default:
      imageSrc = {};
  }

  // 確認 parterList 的key是 params.id
  const parterData = params.id
    ? (parterList)[params.id as keyof ParterListType]
    : null;

  if (!parterData) {
    return <div>合作夥伴 ID 無效或找不到資料</div>;
  }

  return (
    <section>
      <div className={`w-full max-w-[1920px] `}>
        <Carousel className={``} autoPlay={true}>
          {Object.keys(imageSrc).map((key) => (
            <div key={key} className={`  overflow-hidden `}>
              <img src={imageSrc[key]} alt="Slide" className=" w-full h-full " />
            </div>
          ))}
        </Carousel>
      </div>

      <div className="w-[301px] max-w-[1200px] flex flex-col mx-[12px] pb-[20px] pt-[12px] md:mx-[24px] md:w-[720px] md:pt-[40px] md:pb-[40px] md:gap-[40px] xl:w-[1152px] xl:pb-[80px] xl:m-[0_auto] ">
        {/* parner */}
        <div>
          <PhotoTitle
            text="品牌介紹"
            subtitle="Brand introduction"
            className={`py-[16px] hidden md:block`}
          />
          {/* 上-圖文內容 */}
          <div
            className={`flex flex-col justify-center items-center gap-[12px] md:gap-[24px] xl:gap-[40px] md:text-left xl:flex-row`}
          >
            <div
              className={`relative flex justify-center items-center w-full h-[232px] rounded-[8px] xl:rounded-[20px_80px] md:h-[360px] `}
              style={{ backgroundColor: backgroundColor }}
            >
              <img
                src={logoSrc}
                alt="parner"
                className={`w-[180px] h-[179px] md:w-[250px] md:h-[250px] xl:w-[300px] xl:h-[300px] `}
              />
            </div>

            <div className={`text-center text-[12px] md:text-left`}>
              <p className={`pb-[12px] text-[20px] md:text-[32px]`}>
                {parterData.industry}
              </p>
              <p
                className={`pb-[12px] text-[13px] md:text-[16px] text-[#4E5969]`}
              >
                {parterData.describetion}
              </p>
            </div>
          </div>
        </div>

        {/* 熱門商品 */}
        <div>
          <PhotoTitle
            text="熱門路線"
            subtitle="Popular product"
            readAll
            className={`py-[16px]`}
          />
          <div className="flex gap-[20px] flex-col md:gap-[12px] md:flex-row md:flex-wrap">
            {parterData.route.map((productItem) => (
              <Product
                key={productItem.id}
                url={productItem.url}
                title={productItem.title}
                tag={productItem.tag}
                id={productItem.id}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Patner;
