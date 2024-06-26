import { Message } from "@arco-design/web-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

interface ProductProps {
  url: string;
  title: string;
  // money?: string;
  tag: string[];
  className?: string;
  mask?: boolean;
  id?: string
  collect?: boolean
}

const Product: React.FC<ProductProps> = (props) => {
  const { url, title, tag, className, mask, id, collect } = props;

  const [isCollect, setIsCollect] = useState(true);

  // 動態生成 tag 的內聯樣式
  const getTagStyle = (tag: string): React.CSSProperties => {
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
      <Link to={collect ? '#' : `/order/${id}`} className={`w-[100%] h-[50%] relative block ${collect ? 'cursor-default' : ''} `}>
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
          } ${(mask || collect) ? "block" : "hidden"} `}
        ></button>
        {/* 收藏商品頁面(商品下架用樣式) - 結束 */}
      </Link>
      <Link
        to={`/order/${id}`}
        className="w-[100%] h-[50%] p-[16px] flex flex-col justify-between "
      >
        <div>
          <p className=" text-[20px] ">{title}</p>
          <div className=" flex flex-wrap gap-[8px] pt-[8px]  ">
            {tag.map((tag) => (
              <div className={``} style={getTagStyle(tag)} key={tag}>
                {tag}
              </div>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
