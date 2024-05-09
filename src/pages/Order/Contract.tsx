import { Steps } from "@arco-design/web-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Contract() {
  // 契約閱讀狀態
  const [contractReaded, setContractReaded] = useState(false);

  // 動態跳轉路由
  const navigate = useNavigate();

  // ui kit
  const Step = Steps.Step;

  // 視窗滾動事件監聽
  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;
        console.log(scrollTop + clientHeight);
        console.log(scrollHeight);
      if (scrollTop + clientHeight >= scrollHeight - 1) {
        handleScrollToBottom();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToBottom = () => {
    console.log("Scroll to bottom");
    setContractReaded(true);
  };

  return (
    <>
      <div className={`xl:flex xl:justify-center`}>
        <Steps
          type="dot"
          current={2}
          className={`hidden pt-[32px] pb-[20px] xl:w-[900px] md:flex `}
        >
          <Step title="1. 選擇日期與票數" />
          <Step title="2. 閱讀契約" />
          <Step title="3. 填寫資料" />
          <Step title="4. 付款" />
        </Steps>
      </div>
      <div
        className={`mx-[24px] overflow-y-auto xl:max-w-[1200px]  xl:m-[0_auto] `}
      >
        <div
          className={` flex flex-col gap-[20px] p-[16px] pb-[16px] bg-[#F7F8FA] rounded-[16px] mt-[16px] md:px-[60px] md:py-[40px]`}
        >
          <p className={`text-[16px]`}>基本說明</p>
          <div className={`gap-[8px] flex`}>
            <p>￮</p>
            <p className={`text-[13px]`}>
              此為電子憑證(QR Code)，不另外寄送紙本票券。
            </p>
          </div>
          <div className={`gap-[8px] flex`}>
            <p>￮</p>
            <p className={`text-[13px]`}>
              付款完成後，請至您的信箱收取【付款成功通知信】，憑信件內附之QR
              Code進行核銷；或至網站的【會員中心】→【我的訂單】→【已付款】分頁 →
              點選【查看】內附之 QR Code 進行核銷。
            </p>
          </div>
          <div className={`flex flex-col gap-[8px]`}>
            <div className={`gap-[8px] flex `}>
              <p>￮</p>
              <p className={`text-[14px]`}>核銷方式：</p>
            </div>
            <div className={`gap-[8px] flex pl-[20px]`}>
              <p>￮</p>
              <p className={`text-[13px]`}>
                台灣好行獅山線一日券：上車時前請先向司機出示產品電子憑證(QR
                code)來核銷；若已核銷過，請出示當日核銷畫面供司機確認以享一日票券權益。
              </p>
            </div>
            <div className={`gap-[8px] flex pl-[20px]`}>
              <p>￮</p>
              <p className={`text-[13px]`}>
                綠世界生態農場：入館前請先至園區剪票口出示產品電子憑證(QR
                code)供工作人員來核銷。
              </p>
            </div>
            <div className={`gap-[8px] flex pl-[20px]`}>
              <p>￮</p>
              <p className={`text-[13px]`}>
                北埔商圈消費券：至消費券合作店家示產品電子憑證(QR
                code)供工作人員來核銷。
              </p>
            </div>
          </div>
        </div>
        <div
          className={` flex flex-col gap-[20px] p-[16px] bg-[#F7F8FA] rounded-[16px] mt-[16px] md:px-[60px] md:py-[40px]`}
        >
          <p className={`text-[16px]`}>基本說明</p>
          <div className={`gap-[8px] flex`}>
            <p>￮</p>
            <p className={`text-[13px]`}>
              此為電子憑證(QR Code)，不另外寄送紙本票券。
            </p>
          </div>
          <div className={`gap-[8px] flex`}>
            <p>￮</p>
            <p className={`text-[13px]`}>
              付款完成後，請至您的信箱收取【付款成功通知信】，憑信件內附之QR
              Code進行核銷；或至網站的【會員中心】→【我的訂單】→【已付款】分頁 →
              點選【查看】內附之 QR Code 進行核銷。
            </p>
          </div>
          <div className={`flex flex-col gap-[8px]`}>
            <div className={`gap-[8px] flex `}>
              <p>￮</p>
              <p className={`text-[14px]`}>核銷方式：</p>
            </div>
            <div className={`gap-[8px] flex pl-[20px]`}>
              <p>￮</p>
              <p className={`text-[13px]`}>
                台灣好行獅山線一日券：上車時前請先向司機出示產品電子憑證(QR
                code)來核銷；若已核銷過，請出示當日核銷畫面供司機確認以享一日票券權益。
              </p>
            </div>
            <div className={`gap-[8px] flex pl-[20px]`}>
              <p>￮</p>
              <p className={`text-[13px]`}>
                綠世界生態農場：入館前請先至園區剪票口出示產品電子憑證(QR
                code)供工作人員來核銷。
              </p>
            </div>
            <div className={`gap-[8px] flex pl-[20px]`}>
              <p>￮</p>
              <p className={`text-[13px]`}>
                北埔商圈消費券：至消費券合作店家示產品電子憑證(QR
                code)供工作人員來核銷。
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={`flex justify-center`}>
        <button
          onClick={() => navigate("/passengerData")}
          className={`px-[20px] py-[7px] rounded-[2px] text-[#fff] my-[16px] ${
            contractReaded ? "bg-[#3A57E8]" : "bg-[#9FB6F6]"
          }`}
          disabled={!contractReaded}
        >
          我已閱讀並同意結帳須知與交易定型化契約
        </button>
      </div>
    </>
  );
}

export default Contract;
