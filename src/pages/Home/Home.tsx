import { Carousel } from "@arco-design/web-react";
// 匯入圖片
import choseImg from "@/assets/images/homePage/chose.svg";
import tpeColor from "@/assets/images/homePage/Partner_color_1.svg";
import tpeBlack from "@/assets/images/homePage/Partner_black_1.svg";
import stateColor from "@/assets/images/homePage/Partner_color_2.svg";
import stateBlack from "@/assets/images/homePage/Partner_black_2.svg";
import ubusColor from "@/assets/images/homePage/Partner_color_3.svg";
import ubusBlack from "@/assets/images/homePage/Partner_black_3.svg";
import buildIng from "../../assets/images/header/buildIng.png";
// 匯入組件
import Banner from "../../components/Carousel";
// import News from "../../components/common/News";
import Product from "../../components/common/product";
import PhotoTitle from "../../components/Home/PhotoTitle";
import CityCard from "../../components/common/City";
import Chose from "../../components/common/chose";
import ParnerImg from "../../components/common/ParnerImg";

function Home() {
  const imageSrc = [
    "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp",
    buildIng,
    "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp",
    "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/24e0dd27418d2291b65db1b21aa62254.png~tplv-uwbnlip3yd-webp.webp",
  ];

  const productList = [
    {
      id: "A1B2C3D4E5",
      industry: "桃園客運",
      name: "503 大溪快線",
      imageUrl:
        "https://www.funtime.com.tw/blog/wp-content/uploads/2020/08/guide-to-taoyuan-daxi2.jpg",
      description: "桃園客運中壢總站 ⇋ 石門水庫(坪林收費站)",
      tags: [
        "可攜折疊式/拆解式自行車",
        "可攜寵物",
        "語音報站",
        "部分無障礙班車",
      ],
    },
    {
      id: "F6G7H8I9J0",
      industry: "桃園客運",
      name: "502 小烏來線(假日行駛)",
      imageUrl:
        "https://image.kkday.com/v2/image/get/w_960%2Cc_fit%2Cq_55%2Ct_webp/s1.kkday.com/product_115072/20210105065204_BGRXs/jpg",
      description: "基隆－石牌－臺北護理健康大學",
      tags: ["可攜寵物", "語音報站", "導覽服務"],
    },
    {
      id: "K1L2M3N4O5",
      industry: "桃園客運",
      name: "503 石門水庫線(假日行駛)",
      imageUrl:
        "https://travel.tycg.gov.tw/content/images/2022/static/banner-2-2-5.jpg",
      description: "基隆－新竹",
      tags: [
        "可攜折疊式/拆解式自行車",
        "可攜寵物",
        "語音報站",
        "部分無障礙班車",
        "導覽服務",
      ],
    },
  ];

  const cityList = [
    {
      id: 1,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMgtAtBw1QFsn0UW6xYaxh2ToXOYYasZ91c0FmcLX-mQ&s",
      title: "苗栗",
    },
    {
      id: 2,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMgtAtBw1QFsn0UW6xYaxh2ToXOYYasZ91c0FmcLX-mQ&s",
      title: "苗栗",
    },
    {
      id: 3,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMgtAtBw1QFsn0UW6xYaxh2ToXOYYasZ91c0FmcLX-mQ&s",
      title: "苗栗",
    },
    {
      id: 4,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMgtAtBw1QFsn0UW6xYaxh2ToXOYYasZ91c0FmcLX-mQ&s",
      title: "苗栗",
    },
    {
      id: 5,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMgtAtBw1QFsn0UW6xYaxh2ToXOYYasZ91c0FmcLX-mQ&s",
      title: "苗栗",
    },
  ];

  const choseList = [
    {
      id: 1,
      url: choseImg,
      title: "多元化的目的地和行程選擇",
    },
    {
      id: 2,
      url: choseImg,
      title: "多元化的目的地和行程選擇",
    },
    {
      id: 3,
      url: choseImg,
      title: "多元化的目的地和行程選擇",
    },
    {
      id: 4,
      url: choseImg,
      title: "多元化的目的地和行程選擇",
    },
  ];

  // 合作夥伴
  const parnerList = [
    {
      id: "AC010001",
      colorUrl: tpeColor,
      blackUrl: tpeBlack,
      industry: "屏東客運",
    },
    {
      id: "AC010002",
      colorUrl: stateColor,
      blackUrl: stateBlack,
      industry: "國光客運",
    },
    {
      id: "AC010003",
      colorUrl: ubusColor,
      blackUrl: ubusBlack,
      industry: "桃園客運",
    },
    {
      id: "AC010004",
      colorUrl: tpeColor,
      blackUrl: tpeBlack,
      industry: "金門縣公共車船管理處",
    },
    {
      id: "AC010005",
      colorUrl: stateColor,
      blackUrl: stateBlack,
      industry: "國光客運",
    },
  ];

  return (
    <div>
      <Carousel
        className={`overflow-x-hidden max-w-[1920px] h-[320px] md:h-[500px] `}
        autoPlay={true}
      >
        {imageSrc.map((src) => (
          <Banner key={src} src={src} />
        ))}
      </Carousel>
      <div className=" w-[100%] m-[0_auto] pt-[20px] pb-[40px] md:pt-[56px] md:pb-[60px] xl:pt-[96px] xl:pb-[100px] ">
        <div className=" w-[100%] max-w-[1200px] m-[0_auto] flex flex-col gap-[80px] px-[12px] md:px-[24px] ">
          {/* 熱門商品 */}
          <div className={`md:w-[735px] xl:w-auto`}>
            <PhotoTitle text="熱門商品" subtitle="Popular product" readAll />
            <div className=" flex gap-[20px] flex-col md:flex-row ">
              {productList.map((productItem) => (
                <Product
                  className={`xl:w-[284px]}`}
                  key={productItem.id}
                  url={productItem.imageUrl}
                  title={productItem.name}
                  tag={productItem.tags}
                  id={productItem.id}
                />
              ))}
            </div>
          </div>

          {/* 推薦城市 */}
          <div className={`md:w-[720px] xl:w-auto`}>
            <PhotoTitle text="推薦城市" subtitle="Recommended Cities" />
            <div className="flex gap-[20px] flex-col md:flex-row">
              {cityList.map((cityItem) => (
                <CityCard
                  url={cityItem.url}
                  title={cityItem.title}
                  key={cityItem.id}
                />
              ))}
            </div>
          </div>

          {/* 為什麼選擇MAXA? */}
          <div className={`md:w-[720px] xl:w-auto`}>
            <PhotoTitle text="為什麼選擇MAXA?" subtitle="Why choose MAXA?" />
            <div className="flex flex-col items-center md:flex-row">
              {choseList.map((choseItem) => (
                <Chose
                  url={choseItem.url}
                  title={choseItem.title}
                  key={choseItem.id}
                />
              ))}
            </div>
          </div>

          {/* 合作夥伴 */}
          <div className={`md:w-[720px] xl:w-auto`}>
            <PhotoTitle text="合作夥伴?" subtitle="Partner" />
            <div className=" flex flex-col items-center md:flex-row gap-[8px] ">
              {parnerList.map(({ id, blackUrl, colorUrl, industry }) => (
                <ParnerImg
                  key={id}
                  id={id}
                  colorUrl={colorUrl}
                  blackUrl={blackUrl}
                  industry={industry}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
