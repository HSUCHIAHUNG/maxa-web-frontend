import React from "react";

interface CheckboxProps {
  SubMenu: string;
  className?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ SubMenu, className }) => {
  // 動態生成 tag 的內聯樣式
  const getTagStyle = (tag: string) => {
    const styles: React.CSSProperties = {};
    if (tag === "國旅卡適用") {
      styles.color = "#EC4A58";
      styles.backgroundColor = "#FFEAE8";
      styles.padding = "0 8px";
      styles.borderRadius = "2px";
    }

    if (tag === "即買即用") {
      styles.color = "#FF7D00";
      styles.backgroundColor = "#FFF7E8";
      styles.padding = "0 8px";
      styles.borderRadius = "2px";
    }

    if (tag === "免費取消") {
      styles.color = "#722ED1";
      styles.backgroundColor = "#F5E8FF";
      styles.padding = "0 8px";
      styles.borderRadius = "2px";
    }

    return styles;
  };

  return (
    <div
      className={`flex gap-[8px] border-b border-solid border-[#E5E6EB] py-[9px] `}
    >
      <input type="checkbox" name={SubMenu} />
      <label className={`${className}`} style={getTagStyle(SubMenu)}>
        {SubMenu}
      </label>
    </div>
  );
};

export default Checkbox;
