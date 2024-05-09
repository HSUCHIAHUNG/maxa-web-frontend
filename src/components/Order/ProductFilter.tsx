import React, { useState } from "react";
// Import component
import Checkbox from "../../components/common/Checkbox";
import Mask from "../common/Mask";
import { Slider } from "@arco-design/web-react";

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
  const [SubMenu, setSubMenu] = useState({
    商品分類: true,
    票券標籤: true,
    車種設施: true,
    價格範圍: true,
  });

  // 篩選表單(主選單)
  const orderFilterList = ["商品分類", "票券標籤", "車種設施", "價格範圍"];

  // 商品分類(子選單)
  const categories = [
    "超值套票",
    "交通票券",
    "景點門票",
    "商品兌換券",
    "現金抵用券",
  ];

  // 票券標籤(子選單)
  const ticketTag = ["國旅卡適用", "免費取消", "即買即用"];

  const carType = ["可攜折疊式/拆解式自行車", "可攜寵物", "無障礙班車"];

  // 控制選單開關
  function formOpenFn(orderFilterItem: string) {
    setSubMenu((prevState) => ({
      ...prevState,
      [orderFilterItem as keyof typeof SubMenu]:
        !prevState[orderFilterItem as keyof typeof SubMenu],
    }));
  }

  // 動態顯示對應(子選單)
  const renderCheckboxList = (items: string[], className?: string) => (
    <div className={`bg-[#F7F8FA] pl-[34px] pr-[12px] flex flex-col`}>
      {items.map((item: string) => (
        <Checkbox key={item} SubMenu={item} className={className}/>
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
        <form onSubmit={onSubmitForm} className={`p-[12px] xl:p-0 `}>
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
              className={`border-[2px] border-solid border-[#E5E6EB] rounded-[8px] mb-[12px] h-[52px] overflow-hidden duration-300 ${
                SubMenu[orderFilterItem as keyof typeof SubMenu] &&
                "h-[auto] duration-300 "
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
                {/* 商品分類 */}
                {orderFilterItem === "商品分類" &&
                  renderCheckboxList(categories)}
                {/* 票券標籤 */}
                {orderFilterItem === "票券標籤" &&
                  renderCheckboxList(ticketTag)}
                {/* 車種設施 */}
                {orderFilterItem === "車種設施" && renderCheckboxList(carType)}
                {/* 價格範圍 */}
                {orderFilterItem === "價格範圍" && (
                  <Slider
                    className={` `}
                    defaultValue={[10, 80]}
                    showInput={{
                      hideControl: false,
                      style: {
                        width: 80,
                      },
                    }}
                    range
                    style={{ width: 360 }}
                  />
                )}
              </div>
            </div>
          ))}
        </form>
      </div>
    </>
  );
};

export default ProductFilter;
