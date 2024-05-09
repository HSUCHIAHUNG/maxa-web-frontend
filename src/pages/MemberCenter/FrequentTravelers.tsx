import React from "react";
// 匯入圖片
import editIcon from "../../assets/images/memberCenter/edit.svg";
import deleteIcon from "../../assets/images/memberCenter/delete.svg";

const FrequentTravelers: React.FC = () => {
  // 會員常用旅客資料
  const data = [
    { name: "張三", phone: "01929****34231" },
    { name: "李四", phone: "01929****34232" },
    { name: "王五", phone: "01929****34233" },
    { name: "趙六", phone: "01929****34234" },
  ];

  return (
    <>
      <div className={` xl:w-[800px] flex flex-col gap-[12px] md:gap-[20px]`}>
        <ul
          className={`bg-[#fff] w-full border-y border-solid border-[#E5E6EB] py-[20px] px-[16px] flex flex-col gap-[12px] md:gap-[20px] md:border md:rounded-[16px] md:p-[40px] `}
        >
          {/* 常用旅客標題 */}
          <li className={` flex justify-between items-center `}>
            <div className={`flex items-center gap-[4px]`}>
              <p className={`text-[16px] md:text-[20px]`}>常用旅客</p>
              <div
                className={`border-r border-solid border-[#E5E6EB] h-[16px]`}
              ></div>
              <p className={`text-12px text-[#86909C] md:text-[14px]`}>
                最多只能新增20位旅客
              </p>
            </div>
            <button
              className={`py-[3px] px-[16px] bg-[#3A57E8] text-[#fff] rounded-[2px]`}
            >
              新增
            </button>
          </li>
          <li
            className={`border border-solid border-[#E5E6EB] rounded-[4px] md:rounded-[8px] overflow-hidden`}
          >
            {/* 會員常用旅客資料 */}
            <div>
              {data.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between gap-[16px] py-[13px] px-[20px] border-b border-solid border-[#E5E6EB]`}
                >
                  <div className={`flex gap-[16px]`}>
                    <div
                      className={`flex items-center justify-center rounded-[50%] w-[40px] h-[40px] text-[#fff] bg-[#5A78ED]`}
                    >
                      <p className={``}>{item.name.slice(0, 1)}</p>
                    </div>
                    <div className={`flex flex-col gap-[2px]`}>
                      <p className={``}>{item.name}</p>
                      <p className={`text-[#86909C]`}>{item.phone}</p>
                    </div>
                  </div>
                  <div className={`flex`}>
                    <img src={editIcon} alt="編輯" />
                    <div
                      className={`mx-[8px] border-r border-solid border-[#E5E6EB] h-[12px]`}
                    ></div>
                    <img src={deleteIcon} alt="刪除" />
                  </div>
                </div>
              ))}
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default FrequentTravelers;
