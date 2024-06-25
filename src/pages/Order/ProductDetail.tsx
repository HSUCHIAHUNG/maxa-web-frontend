import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
// router
import { useParams } from "react-router-dom";
// redux
import { useSelector } from "react-redux";
import { orderActions } from "../../stores/order";
import { RootState, useAppDispatch } from "../../stores/index";
// 匯入組件
import Banner from "../../components/Carousel";
import ColorButton from "../../components/common/ColorButton";
import SelectStation from "../../components/Order/selectStation";
import SelectTime from "../../components/Order/SelectTime";
import SelectSeats from "../../components/Order/SelectSeats";
import Contract from "./Contract";
import PassengerData from "./PassengerData";
// ui kit
import { Breadcrumb } from "@arco-design/web-react";
import { Carousel } from "@arco-design/web-react";
import BorderBox from "../../components/common/BorderBox";
import { Steps } from "@arco-design/web-react";
import { Tabs, Typography } from "@arco-design/web-react";
// 匯入型別
import { ProductAPIType, ProductListType } from "../../pages/Order/type";
// json
import productAPI from "../../assets/API/productDetail.json";

// ui kit
const BreadcrumbItem = Breadcrumb.Item;
const TabPane = Tabs.TabPane;
const Step = Steps.Step;

type IndustryType =
  | "桃園客運"
  | "屏東客運"
  | "金門縣公共車船管理處"
  | "國光客運";

const ProductDetail: React.FC = () => {
  // redux(方法調用)
  const dispatch = useAppDispatch();

  // 路由參數
  const param = useParams<{ id: string }>();
  const { id } = param;

  //  productAPI  ProductAPIType
  const productData: ProductAPIType = productAPI;

  // 錨點顯示狀態
  const [isSticky, setIsSticky] = useState(false);

  // 付款方式element
  const paymentRef = useRef<HTMLDivElement>(null);

  // 參考"選擇日期與票數"區塊
  const bookingSectionRef = useRef<HTMLDivElement>(null);

  // ticket( 單程票、來回票 )狀態
  const ticketState = useSelector((state: RootState) => state.order.ticket);

  // 訂車階段(起訖站、日期、時間狀態))
  const bookingStage = useSelector(
    (state: RootState) => state.order.bookingStage
  );

  // 控制訂車階段顯示
  const isOpen = () =>
    bookingStage === "contract" || bookingStage === "passengerData"
      ? "hidden"
      : "block";

  // 初始化訂購流程狀態
  useEffect(() => {
    dispatch(orderActions.resetBookingData());
  }, [dispatch]);

  // (單程票、來回票)切換狀態
  const switchTab = () => {
    dispatch(orderActions.switchTab());
    dispatch(orderActions.resetBookingData());
  };

  // 合作夥伴mapping
  const parnerMap = {
    屏東客運: "AC010001",
    桃園客運: "AC010003",
    金門縣公共車船管理處: "AC010004",
    國光客運: "AC010002",
  };

  // 合作夥伴頁面連結參數
  const navigateParner = (param: keyof typeof parnerMap) => parnerMap[param];

  // 錨點
  useEffect(() => {
    const handleScroll = () => {
      if (paymentRef.current) {
        const rect = paymentRef.current.getBoundingClientRect();
        setIsSticky(rect.top < -320);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // 初始调用，以防止页面刷新时状态不正确
    handleScroll();

    // 在组件卸载时移除事件监听器
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (id === undefined || !productData[id]) {
    return <div>合作夥伴 ID 無效或找不到資料</div>;
  }

  // 滾動到"選擇日期與票數"區塊
  const scrollToBookingSection = () => {
    if (bookingSectionRef.current) {
      bookingSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // 對應產品id資料
  const productList: ProductListType = productData[id];

  return (
    <>
      {/* 滾動-產品價格內容 */}
      <div
        className={
          isSticky
            ? "sticky flex justify-end gap-[8px] items-center top-0 bg-[#fff] w-full z-[100] shadow-md h-[52px] px-[12px] md:px-[20px] duration-300 transition-all"
            : " h-0 overflow-hidden"
        }
      >
        <button
          className={`p-[5px_45px] rounded-[2px] text-center text-[14px] text-[#4E5969] bg-[#F2F3F5]`}
        >
          收藏商品
        </button>
        <button
          onClick={scrollToBookingSection}
          className={`p-[5px_45px] rounded-[2px] text-center text-[14px] text-[#FFFFFF] bg-[#3A57E8]`}
        >
          立即購買
        </button>
      </div>

      {/* 4. 購買契約 */}
      {bookingStage === "contract" && <Contract />}
      {/* 5.填寫乘客資料 */}
      {bookingStage === "passengerData" && <PassengerData />}
      <div
        className={`mx-[12px] mb-[20px] md:mb-[40px] xl:mb-[80px] md:m-[0_auto] md:w-[720px] xl:w-[1152px] ${isOpen()} `}
      >
        {/* 手機板title */}
        <div className={`flex gap-[12px] items-center py-[14px] md:hidden`}>
          <Link
            to={"/order"}
            className={`icon-[iconamoon--arrow-left-2-thin] w-[24px] h-[24px] `}
          ></Link>
          <div>
            <p className={`m-[0_auto] text-[16px]`}>{productList.name}</p>
            <Link
              to={`/parner/${navigateParner(
                productList.industry as IndustryType
              )}`}
              className={`text-[14px] text-[#3A57E8]`}
            >
              {productList.industry}
            </Link>
          </div>
        </div>

        {/* 電腦版麵包屑 */}
        <div className={`py-[14px] hidden md:block`}>
          <Breadcrumb
            separator={<span>・</span>}
            className={`hidden md:block pb-[4px]`}
          >
            <BreadcrumbItem>
              <Link to={"/"}>首頁</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link to={"/order"}>所有商品</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>{productList.name}</BreadcrumbItem>
          </Breadcrumb>
          <div>
            <p className={`text-[20px]`}>
              {productList.name}
              <span className={`text-[14px] text-[#86909C] px-[14px]`}>|</span>
              <Link
                to={`/parner/${navigateParner(
                  productList.industry as IndustryType
                )}`}
                className={`text-[14px] text-[#3A57E8]`}
              >
                {productList.industry}
              </Link>
            </p>
          </div>
        </div>

        {/* banner */}
        <Carousel
          className={`overflow-x-hidden max-w-[1920px] h-[200px] rounded-[16px] md:h-[320px] xl:h-[500px] `}
          autoPlay={true}
        >
          {productList.banner.map((src) => (
            <Banner key={src.id} src={src.url} />
          ))}
        </Carousel>

        {/* 標籤 */}
        <ColorButton tagList={productList.tags} />

        <div
          className={`flex flex-col-reverse xl:justify-between xl:flex-row xl:gap-[20px]`}
        >
          {/* 訂購流程(主要內容) */}
          <div className={`xl:w-[70%]`}>
            {/* 使用方式、付款方式 */}
            <div
              ref={paymentRef}
              className={`md:flex gap-[8px] mb-[20px] md:mb-[40px] xl:mb-0 `}
            >
              {/* 使用方式 */}
              <BorderBox
                className={`rounded-[8px] p-[12px] xl:p-[16px] mt-[8px] md:w-full xl:mt-0 `}
              >
                <span
                  className={`icon-[solar--ticket-bold-duotone] w-[24px] h-[24px] md:w-[32px] md:h-[32px] text-[#86909C]`}
                ></span>
                <p className={`text-[16px] pt-[15px]`}>使用方式</p>
                <p className={`text-[12px] pt-[4px]`}>
                  現場請出示電子憑證，於上、下車時感應車機(下車未感應會被鎖卡)
                </p>
              </BorderBox>

              {/* 付款方式 */}
              <BorderBox
                className={`rounded-[8px] p-[12px] xl:p-[16px] mt-[8px] md:w-full xl:mt-0 `}
              >
                <span
                  className={`icon-[solar--ticket-bold-duotone] w-[24px] h-[24px] md:w-[32px] md:h-[32px] text-[#86909C]`}
                ></span>
                <p className={`text-[16px] pt-[15px]`}>付款方式</p>
                <p className={`text-[12px] pt-[4px]`}>信用卡</p>
              </BorderBox>
            </div>

            {/* 乘車路線圖-1200以下 */}
            <div className={` xl:hidden`}>
              <div
                className={`flex items-center gap-[8px] pb-[20px] xl:hidden`}
              >
                <span
                  className={`icon-[solar--ticket-bold-duotone] w-[24px] h-[24px] md:w-[32px] md:h-[32px] text-[#86909C]`}
                ></span>
                <p className={`text-[16px] `}>乘車路線圖</p>
              </div>
              {/* 路線圖 */}
              <Tabs defaultActiveTab={ticketState} type="card-gutter">
                {/* 去程 */}
                <TabPane
                  key="oneWayTicket"
                  title="去程"
                  className={`p-[12px] md:p-[40px]`}
                >
                  <Typography.Paragraph>
                    <Steps
                      type="dot"
                      direction="vertical"
                      current={productList.stations.length}
                      style={{ maxWidth: 780 }}
                    >
                      {productList.stations.map((station) => (
                        <Step
                          key={station.id}
                          title={station.name}
                          // description={item.Comment || ""}
                        />
                      ))}
                    </Steps>
                  </Typography.Paragraph>
                </TabPane>

                <TabPane
                  key="roundTripTicket"
                  title="回程"
                  className={`p-[12px] md:p-[40px]`}
                >
                  <Typography.Paragraph>
                    <Steps
                      type="dot"
                      direction="vertical"
                      current={productList.stations.length}
                      style={{ maxWidth: 780 }}
                    >
                      {[...productList.stations].reverse().map((station) => (
                        <Step
                          key={station.id}
                          title={station.name}
                          // description={item.Comment || ""}
                        />
                      ))}
                    </Steps>
                  </Typography.Paragraph>
                </TabPane>
              </Tabs>
            </div>

            {/* 訂票流程-內容 */}
            <div ref={bookingSectionRef}>
              <div
                className={` flex gap-[8px] py-[20px] md:pt-[40px] xl:pt-[60px]`}
              >
                {/* 標題 */}
                <span
                  className={`icon-[solar--ticket-bold-duotone] w-[24px] h-[24px] md:w-[32px] md:h-[32px] text-[#86909C]`}
                ></span>
                <p className={`text-[16px] md:text-[20px]`}>選擇日期與票數</p>
              </div>

              {/* 訂票流程-階段切換顯示區 */}
              <Tabs
                defaultActiveTab={ticketState}
                type="card-gutter"
                onChange={switchTab}
              >
                <TabPane
                  key="oneWayTicket"
                  title="單程票"
                  className={`p-[12px] md:p-[40px]`}
                >
                  {ticketState === "oneWayTicket" && (
                    <Typography.Paragraph>
                      {/* 1. 選擇站點、日期 */}
                      <SelectStation productList={productList}></SelectStation>
                      {/* 2. 選擇去回程時間 */}
                      <SelectTime></SelectTime>
                      {/* 3. 選擇座位 */}
                      <SelectSeats></SelectSeats>
                    </Typography.Paragraph>
                  )}
                </TabPane>
                <TabPane
                  key="roundTripTicket"
                  title="來回票"
                  className={`p-[12px] md:p-[40px]`}
                >
                  {ticketState === "roundTripTicket" && (
                    <Typography.Paragraph>
                      {/* 1. 選擇站點、日期 */}
                      <SelectStation productList={productList}></SelectStation>
                      {/* 2. 選擇去回程時間 */}
                      <SelectTime></SelectTime>
                      {/* 3. 選擇座位 */}
                      <SelectSeats></SelectSeats>
                    </Typography.Paragraph>
                  )}
                </TabPane>
              </Tabs>

              {/* 路線詳情說明內容 */}
              <div>
                {productList.content.map((content) => (
                  <div key={content.id}>
                    {/* 主標題 */}
                    <div
                      className={`flex items-center gap-[8px] pt-[20px] md:pt-[40px] xl:pt-[60]  `}
                    >
                      <span
                        className={`icon-[solar--ticket-bold-duotone] w-[24px] h-[24px] md:w-[32px] md:h-[32px] text-[#86909C]`}
                      ></span>
                      <p className={`text-[16px] md:text-[20px]`}>
                        {content.mainTitle.title}
                      </p>
                    </div>

                    {/* 主標題-內容 */}
                    {content.mainTitle.content && (
                      <p
                        className={`leading-snug text-[13px] md:text-[16px] pt-[20px]`}
                      >
                        {content.mainTitle.content}
                      </p>
                    )}

                    {/* 子標題 */}
                    {content?.subTitle?.map((subTitle) => (
                      <div key={subTitle.id}>
                        {/* 子標題-title */}
                        <div
                          className={`flex gap-[8px] text-[13px] md:text-[16px] md:pt-[20px] ${
                            subTitle.title.length < 1 ? "hidden" : ""
                          }`}
                        >
                          <p>￮</p>
                          {subTitle?.link.length < 1 ? (
                            <p>{subTitle.title}</p>
                          ) : (
                            <a
                              href={subTitle.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`text-[#3A57E8]`}
                            >
                              {subTitle.title}
                            </a>
                          )}
                        </div>

                        {/* 子標題-content */}
                        {subTitle?.content?.map((content) => (
                          <div
                            key={content.id}
                            className={`pl-[20px] pt-[8px] ${
                              content.text.length < 1 && "hidden"
                            }`}
                          >
                            <p className="text-[13px] md:text-[16px] ">
                              {content.text}
                            </p>
                          </div>
                        ))}
                      </div>
                    ))}

                    {/* 圖片 */}
                    {content?.route?.map((route) => (
                      <div key={route.id} className={`pt-[20px]`}>
                        {/* 圖片 */}
                        {route.images && (
                          <img
                            className=" w-[301px] h-[200px] rounded-2xl md:h-[420px] md:w-full "
                            src={route.images}
                            alt="巴士"
                          />
                        )}

                        {/* 彈性高度圖片 */}
                        {route.customImages && (
                          <img
                            className=" w-[301px] rounded-2xl md:w-full "
                            src={route.customImages}
                            alt="巴士"
                          />
                        )}

                        {/* 圖片標題 */}
                        <p
                          className={` pt-[5px] pb-[10px] text-[13px] md:text-[16px] `}
                        >
                          {route.title}
                        </p>

                        {/* 圖片內容 */}
                        <div className={`flex flex-col gap-[20px]`}>
                          {route.content.map((content) => (
                            <p
                              key={content.id}
                              className={` text-[13px] md:text-[16px] `}
                            >
                              {content.text}
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 乘車路線圖-寬度1200以上 */}
          <div className={` hidden xl:block xl:w-[30%]`}>
            <div className={`flex items-center gap-[8px] pb-[20px] xl:hidden`}>
              <span
                className={`icon-[solar--ticket-bold-duotone] w-[24px] h-[24px] md:w-[32px] md:h-[32px] text-[#86909C]`}
              ></span>
              <p className={`text-[16px] `}>乘車路線圖</p>
            </div>
            {/* 路線圖 */}
            <Tabs
              defaultActiveTab={ticketState}
              type="card-gutter"
              className={`w-[331px]`}
            >
              {/* 去程 */}
              <TabPane
                key="oneWayTicket"
                title="去程"
                className={`p-[12px] md:p-[40px]`}
              >
                <Typography.Paragraph>
                  <Steps
                    type="dot"
                    direction="vertical"
                    current={productList.stations.length}
                    style={{ maxWidth: 780 }}
                  >
                    {productList.stations.map((station) => (
                      <Step
                        key={station.id}
                        title={station.name}
                        // description={item.Comment || ""}
                      />
                    ))}
                  </Steps>
                </Typography.Paragraph>
              </TabPane>
              {/* 回程 */}
              <TabPane
                key="roundTripTicket"
                title="回程"
                className={`p-[12px] md:p-[40px]`}
              >
                <Typography.Paragraph>
                  <Steps
                    type="dot"
                    direction="vertical"
                    current={productList.stations.length}
                    style={{ maxWidth: 780 }}
                  >
                    {[...productList.stations].reverse().map((station) => (
                      <Step
                        key={station.id}
                        title={station.name}
                        // description={item.Comment || ""}
                      />
                    ))}
                  </Steps>
                </Typography.Paragraph>
              </TabPane>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
