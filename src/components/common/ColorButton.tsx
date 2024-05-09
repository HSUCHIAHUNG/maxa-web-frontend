import React from "react";

interface ColorButtonProps {
    tagList: { tagName: string }[];
}

const ColorButton: React.FC<ColorButtonProps> = ({ tagList }) => {
  // 動態調整tag樣式
  const tagStyles: { [key: string]: string } = {
    "國旅卡適用": "bg-[#FFEAE8] text-[#EC4A58]",
    "可預約車位": "bg-[#FFF7E8] text-[#FF7D00]",
    "交通票券": "bg-[#E8F7FF] text-[#3491FA]",

  };

  return (
    <div className={`flex gap-[8px] py-[8px] `}>
      {tagList.map((tagItem, index) => (
        <div key={index} className={`${tagStyles[tagItem.tagName]} px-[8px]`}>
          {tagItem.tagName}
        </div>
      ))}
    </div>
  );
};

export default ColorButton;
