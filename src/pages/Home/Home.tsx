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
      id: 'AC010001',
      colorUrl: tpeColor,
      blackUrl: tpeBlack,
      industry: '屏東客運'
      
    },
    {
      id: 'AC010002',
      colorUrl: stateColor,
      blackUrl: stateBlack,
      industry: '國光客運'
    },
    {
      id: 'AC010003',
      colorUrl: ubusColor,
      blackUrl: ubusBlack,
      industry: '桃園客運'
    },
    {
      id: 'AC010004',
      colorUrl: tpeColor,
      blackUrl: tpeBlack,
      industry: '金門縣公共車船管理處'

    },
    {
      id: 'AC010005',
      colorUrl: stateColor,
      blackUrl: stateBlack,
      industry: '國光客運'
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
          {/* 最新消息 */}
          {/* <div>
            <PhotoTitle text="最新消息" subtitle="Latest News" />
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
          <div className={`md:w-[735px] xl:w-auto`}>
            <PhotoTitle text="熱門商品" subtitle="Popular product" readAll />
            <div className=" flex gap-[20px] flex-col md:flex-row ">
              {productList.map((productItem) => (
                <Product
                  className={`xl:w-[284px]}`}
                  key={productItem.id}
                  url={productItem.url}
                  title={productItem.title}
                  money={productItem.money}
                  tag={productItem.tag}
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
                <ParnerImg key={id} id={id} colorUrl={colorUrl} blackUrl={blackUrl} industry={industry} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
