import React from "react";
import { Link } from "react-router-dom";

interface CarouseProps {
  text: string;
  subtitle: string;
  readAll?: boolean;
  className?: string;
}

const Carousel: React.FC<CarouseProps> = (props) => {
  const { text, subtitle, className, readAll=false } = props;
  return (
    <>
      <div
        className={`w-[100%]  pb-[18px] ${readAll && "hidden"} ${className}`}
      >
        <div
          className={`flex gap-[12px] justify-center items-center md:justify-normal `}
        >
          <p className=" text-center text-[20px] ">{text}</p>
          <div className="h-[16px] border-r border-solid border-[#E5E6EB] hidden md:block"></div>
          <p className=" text-[14px] text-[#86909C] hidden md:block ">
            {subtitle}
          </p>
        </div>
      </div>
      {/* Read all */}
      <div
        className={` pb-[18px] flex justify-between ${!readAll && "hidden"} ${className}`}
      >
        <div
          className={`flex gap-[12px] justify-center items-center md:justify-normal `}
        >
          <p className=" text-center text-[20px] ">{text}</p>
          <div className="h-[16px] border-r border-solid border-[#E5E6EB] hidden md:block"></div>
          <p className=" text-[14px] text-[#86909C] hidden md:block ">
            {subtitle}
          </p>
        </div>
        <Link to={'/order'} className={`bg-[#F2F3F5] leading-[24px] text-[12px] px-[12px] md:text-[14px] md:leading-[32px] `}>
          Read all
        </Link>
      </div>
    </>
  );
};

export default Carousel;
