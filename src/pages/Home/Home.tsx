import { Carousel } from "@arco-design/web-react";
// 匯入圖片
// import buildIng from "../../assets/images/header/buildIng.png";
import select_1 from "../../assets/images/homePage/select_1.png";
import select_2 from "../../assets/images/homePage/select_2.png";
import select_3 from "../../assets/images/homePage/select_3.png";
import select_4 from "../../assets/images/homePage/select_4.png";
import tb_himg from "../../assets/images/homePage/TB_h.png";
import tb_img from "../../assets/images/homePage/TB.png";
import pt_himg from "../../assets/images/homePage/PT_h.png";
import pt_img from "../../assets/images/homePage/PT.png";
import kk_himg from "../../assets/images/homePage/KK_h.png";
import kk_img from "../../assets/images/homePage/KK.png";
import kb_himg from "../../assets/images/homePage/KB_h.png";
import kb_img from "../../assets/images/homePage/KB.png";
import cj_himg from "../../assets/images/homePage/CJ_h.png";
import cj_img from "../../assets/images/homePage/CJ.png";
import PT_CITY from "../../assets/images/homePage/PT_CITY.png";
import TY_CITY from "../../assets/images/homePage/TY_CITY.png";
import LT_CITY from "../../assets/images/homePage/LT_CITY.png";
import CH_CITY from "../../assets/images/homePage/CH_CITY.png";
import KK_CITY from "../../assets/images/homePage/KK_CITY.png";
import banner_1 from "../../assets/images/homePage/banner_1.png";
import banner_2 from "../../assets/images/homePage/banner_2.png";
// 匯入組件
import Banner from "../../components/Carousel";
// import News from "../../components/common/News";
import Product from "../../components/common/Product";
import PhotoTitle from "../../components/Home/PhotoTitle";
import CityCard from "../../components/common/City";
import Chose from "../../components/common/chose";
import ParnerImg from "../../components/common/ParnerImg";

function Home() {
  // banner
  const imageSrc = [banner_1, banner_2];

  // 熱門商品
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

  // 推薦城市
  const cityList = [
    {
      id: 1,
      url: PT_CITY,
      title: "屏東",
    },
    {
      id: 2,
      url: TY_CITY,
      title: "桃園",
    },
    {
      id: 3,
      url: LT_CITY,
      title: "南投",
    },
    {
      id: 4,
      url: CH_CITY,
      title: "彰化",
    },
    {
      id: 5,
      url: KK_CITY,
      title: "金門",
    },
  ];

  // 為什麼選擇MAXA
  const choseList = [
    {
      id: 1,
      url: select_1,
      title: "多元化的目的地和行程選擇",
    },
    {
      id: 2,
      url: select_2,
      title: "隨時查詢訂單狀態更新",
    },
    {
      id: 3,
      url: select_3,
      title: "輕鬆收藏訂單與管理",
    },
    {
      id: 4,
      url: select_4,
      title: "交通票訂票劃位簡單快速",
    },
  ];

  // 合作夥伴
  const parnerList = [
    {
      id: "AC010001",
      colorUrl: pt_img,
      blackUrl: pt_himg,
      industry: "屏東客運",
    },
    {
      id: "AC010003",
      colorUrl: tb_img,
      blackUrl: tb_himg,
      industry: "桃園客運",
    },
    {
      id: "AC010004",
      colorUrl: kb_img,
      blackUrl: kb_himg,
      industry: "金門縣公共車船管理處",
    },
    {
      id: "AC010002",
      colorUrl: kk_img,
      blackUrl: kk_himg,
      industry: "國光客運",
    },
    {
      id: "AC010005",
      colorUrl: cj_img,
      blackUrl: cj_himg,
      industry: "國光客運",
    },
  ];

  return (
    <div>
      <Carousel
        className={`w-full max-w-[1920px] `}
        autoPlay={true}
      >
        {imageSrc.map((src) => (
          <Banner key={src} src={src} />
        ))}
      </Carousel>
      <div className=" w-[100%] m-[0_auto] pt-[20px] pb-[40px] md:pt-[56px] md:pb-[60px] xl:pt-[96px] xl:pb-[100px] ">
        <div className=" w-[100%] max-w-[1200px] m-[0_auto] px-[12px] flex flex-col gap-[45px] md:gap-[80px] md:w-[720px] xl:w-[90%] md:px-0 ">
          {/* 熱門商品 */}
          <div className={` xl:w-auto`}>
            <PhotoTitle text="熱門路線" subtitle="Popular product" readAll />
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
          <div className={` xl:w-auto`}>
            <PhotoTitle text="推薦城市" subtitle="Recommended Cities" />
            <div className="flex flex-col items-center gap-[20px] md:flex-row">
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
          <div className={` xl:w-auto`}>
            <PhotoTitle text="為什麼選擇MAXA?" subtitle="Why choose MAXA?" />
            <div className="flex flex-col items-center md:flex-row gap-[8px] md:gap-0">
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
          <div className={` xl:w-auto `}>
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
