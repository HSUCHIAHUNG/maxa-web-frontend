import React, { useState } from "react";
// Import component
import Checkbox from "../../components/common/Checkbox";
import Mask from "../common/Mask";

interface ProductFilterProps {
  onSubmitForm: (event: React.FormEvent<HTMLFormElement>) => void;
  MainMenuClose: () => void;
  MainMenuOpen: boolean;
}

const ProductFilter: React.FC<ProductFilterProps> = ({
  onSubmitForm,
  MainMenuOpen,
  MainMenuClose,
}) => {
  // 控制form(子表單)開關狀態
  const [subMenu, setSubMenu] = useState({
    業者: true,
    車種設施: true,
    縣市區域: true,
  });

  // 篩選表單(主選單)
  const orderFilterList = ["業者", "縣市區域", "車種設施"];

  // 業者(子選單)
  const industryList = [
    "屏東客運",
    "南投客運",
    "國光客運",
    "桃園客運",
    "金門台灣好行",
  ];

  // 車種設施(子選單)
  const ticketTag = [
    "可攜寵物",
    "語音報站",
    "可攜折疊式/拆解式自行車",
    "部分無障礙班車",
    "導覽服務",
    "預約車位",
  ];

  // 縣市區域
  const carType = ["台北", "新北", "桃園", "彰化", "南投", "金門"];

  // 控制選單開關
  function formOpenFn(orderFilterItem: string) {
    setSubMenu((prevState) => ({
      ...prevState,
      [orderFilterItem as keyof typeof subMenu]:
        !prevState[orderFilterItem as keyof typeof subMenu],
    }));
  }

  // 動態生成 tag 的內聯樣式
  const getTagStyle = (tag: string) => {
    const styles: React.CSSProperties = {
      padding: "0 8px",
      borderRadius: "2px",
    };
    switch (tag) {
      case "可攜折疊式/拆解式自行車":
        styles.color = "#EC4A58";
        styles.backgroundColor = "#FFEAE8";
        break;
      case "可攜寵物":
        styles.color = "#F77234";
        styles.backgroundColor = "#FFF3E8";
        break;
      case "部分無障礙班車":
        styles.color = "#F5319D";
        styles.backgroundColor = "#FFE8F1";
        break;
      case "預約車位":
        styles.color = "#0FC6C2";
        styles.backgroundColor = "#E8FFFB";
        break;
      case "導覽服務":
        styles.color = "#3491FA";
        styles.backgroundColor = "#E8F7FF";
        break;
      case "語音報站":
        styles.color = "#FF7D00";
        styles.backgroundColor = "#FFF7E8";
        break;
      default:
        // 預設情況下樣式保持不變
        break;
    }

    return styles;
  };

  // 動態顯示對應(子選單)
  const renderCheckboxList = (items: string[], className?: string) => (
    <div className={`bg-[#F7F8FA] pl-[34px] pr-[12px] flex flex-col`}>
      {items.map((item: string) => (
        <div
          key={item}
          className={`flex gap-[8px] border-b border-solid border-[#E5E6EB] py-[9px] `}
        >
          <input type="checkbox" name={item} />
          <label className={`${className}`} style={getTagStyle(item)}>
            {item}
          </label>
        </div>
      ))}
    </div>
  );

  return (
    <>
      {MainMenuOpen && (
        <Mask
          className={` ${
            !MainMenuOpen ? "hidden xl:hidden" : "md:block xl:hidden"
          } `}
        ></Mask>
      )}

      <div
        className={`fixed top-0 left-0 w-full h-full overflow-auto z-50 bg-[#fff] md:w-[320px] md:right-0 md:left-[initial] xl:w-[260px] xl:h-[746px] xl:contents ${
          !MainMenuOpen ? "hidden xl:contents" : "block  xl:contents"
        } `}
      >
        {/* 篩選列表 */}
        <form onSubmit={onSubmitForm} className={` xl:p-0 xl:w-[260px] `}>
          {/* 手機版標題 */}
          <div className={`h-[50px] flex items-center shadow-md xl:hidden`}>
            <span
              onClick={MainMenuClose}
              className={`icon-[bitcoin-icons--arrow-left-filled] w-[24px] h-[24px] !ml-[12px]`}
            ></span>
            <p className={`m-[0_auto]`}>篩選商品</p>
          </div>

          {/* 主選單 */}
          {orderFilterList.map((orderFilterItem) => (
            <div
              key={orderFilterItem}
              className={` m-[12px] border-[2px] border-solid border-[#E5E6EB] rounded-[8px] mb-[12px] overflow-hidden duration-300 ${
                subMenu[orderFilterItem as keyof typeof subMenu]
                  ? " h-auto duration-300 "
                  : "h-[42px] duration-300"
              } `}
            >
              <div
                onClick={() => formOpenFn(orderFilterItem)}
                className={` bg-[#fff] flex gap-[6px] items-center px-[12px] py-[9px] `}
              >
                <span className="icon-[emojione-monotone--red-triangle-pointed-down] w-[10px] h-[10px]"></span>
                <p>{orderFilterItem}</p>
              </div>
              {/* 子選單 */}
              <div className={`bg-[#F7F8FA] flex flex-col overflow-auto `}>
                {/* 業者 */}
                {orderFilterItem === "業者" && renderCheckboxList(industryList)}

                {/* 車種設施 */}
                {orderFilterItem === "車種設施" &&
                  renderCheckboxList(ticketTag)}

                {/* 縣市區域 */}
                {orderFilterItem === "縣市區域" && renderCheckboxList(carType)}
              </div>
            </div>
          ))}
        </form>
      </div>
    </>
  );
};

export default ProductFilter;
