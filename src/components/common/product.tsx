import React from "react";

interface ProductProps {
  url: string;
  title: string;
  money: string;
  tag: string[];
  className?: string
  // key: number
}

const Carousel: React.FC<ProductProps> = (props) => {
  const { url, title, money, tag, className } = props;

  // 動態生成 tag 的內聯樣式
  const getTagStyle = (tag: string) => {
    const styles: React.CSSProperties = {};
    if (tag === "國旅卡適用") {
      styles.color = "#EC4A58";
      styles.backgroundColor = "#FFEAE8";
      styles.padding = "0 8px";
      styles.borderRadius = "2px";
    }

    if (tag === "組合套票") {
      styles.color = "#FF7D00";
      styles.backgroundColor = "#FFF7E8";
      styles.padding = "0 8px";
      styles.borderRadius = "2px";
    }

    return styles;
  };

  return (
    <div className={`border border-solid border-[#E5E6EB] rounded-[8px] w-[100%] h-[400px] md:w-[232px] xl:w-[370px] ${className}`}>
      <img
        src={url}
        alt={title}
        className=" w-[100%] h-[50%] rounded-[8px_8px_0_0] object-cover"
      />
      <div className="w-[100%] h-[50%] p-[16px] flex flex-col justify-between ">
        <div>
          <p className=" ">{title}</p>
          <div className=" flex gap-[8px] pt-[8px] ">
            {tag.map((tag) => (
              <div style={getTagStyle(tag)} key={tag}>
                {tag}
              </div>
            ))}
          </div>
        </div>
        <div className="text-right">
          <div className=" relative ">
            <div className=" absolute w-[60px] border-b border-solid border-[#86909C] right-[-2px] top-[10px]"></div>
            <p className="text-[#86909C]">NT$ 600</p>
          </div>
          <p className=" text-[20px]">NT${money}</p>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
