import React from "react";

interface ColorButtonProps {
    tagList: string[];
}

const ColorButton: React.FC<ColorButtonProps> = ({ tagList }) => {

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

  return (
    <div className={`flex gap-[8px] flex-wrap py-[8px] `}>
      {tagList.map((tagItem) => (
        <div key={tagItem} style={getTagStyle(tagItem)} className={` px-[8px]`}>
          {tagItem}
        </div>
      ))}
    </div>
  );
};

export default ColorButton;
