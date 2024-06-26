import React from "react";
import arrow from "@/assets/images/homePage/arrow.svg";


interface CityProps {
    url: string,
    title: string,
}

const City: React.FC<CityProps> = (props) => {
  const { url, title } = props;

  return (
    <div className=" relative w-[214px] xl:w-[214px] xl:h-[300px]  ">
      <img
        src={url}
        alt={title}
        className="w-[100%] h-[100%] rounded-[8px] "
      />
      <div className=" w-[100%] absolute bottom-0 flex justify-between px-[16px] pb-[9px] bg-custom-gradient rounded-[0px_0px_8px_8px] ">
        <p className="text-[#fff] text-[20px]">{title}</p>
        <img src={arrow} alt="前往推薦城市" />
      </div>
    </div>
  );
};

export default City; 
