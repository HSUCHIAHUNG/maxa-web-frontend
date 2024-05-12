import { Message } from "@arco-design/web-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

interface ProductProps {
  url: string;
  title: string;
  money: string;
  tag: string[];
  className?: string;
  mask?: boolean;
  // key: number
}

const Carousel: React.FC<ProductProps> = (props) => {
  const { url, title, money, tag, className, mask } = props;

  const [isCollect, setIsCollect] = useState(true);

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

  // 取消收藏
  function collectChenge() {
    setIsCollect((state) => !state);
    if (isCollect) {
      Message.success("已取消收藏");
    } else {
      Message.success("已收藏");
    }
  }

  return (
    <div
      className={`border border-solid border-[#E5E6EB] rounded-[8px] w-[100%] h-[400px] md:w-[232px] xl:w-[370px] ${className}`}
    >
      <div className={`w-[100%] h-[50%] relative `}>
        <img
          src={url}
          alt={title}
          className=" w-full h-full rounded-[8px_8px_0_0] object-cover "
        />
        {/* 收藏商品頁面(商品下架用樣式) - 開始 */}
        <div
          className={`absolute inset-0 bg-[#1d2129] opacity-60 rounded-[8px_8px_0_0] ${
            mask ? "block" : "hidden"
          }`}
        ></div>
        <div
          className={` absolute inset-0 w-full flex justify-center items-center  ${
            mask ? "block" : "hidden"
          }`}
        >
          <p className={`text-[#fff]  `}>商品已下架</p>
        </div>
        <button
          onClick={collectChenge}
          className={`absolute top-[12px] right-[12px] icon-[mingcute--star-fill] w-[24px] h-[24px] ${
            isCollect ? "text-[#F7BA1E]" : "text-[#F2F3F5]"
          } ${mask ? "block" : "hidden"} `}
        ></button>
        {/* 收藏商品頁面(商品下架用樣式) - 結束 */}
      </div>
      <Link
        to={`/order/test`}
        className="w-[100%] h-[50%] p-[16px] flex flex-col justify-between "
      >
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
      </Link>
    </div>
  );
};

export default Carousel;
