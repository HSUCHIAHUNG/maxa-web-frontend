import React from "react";
import arrow from "../../assets/images/homePage/arrow.svg";

interface NewsProps {
  url: string,
  title: string,
  date: string,
}

const Carousel: React.FC<NewsProps> = (props) => {


  return (
    <div className="relative h-[98px] md:w-[232px] md:h-[160px] xl:w-[370px] xl:h-[160px] ">
      <img
        src={props.url}
        alt={props.title}
        className=" rounded-[8px] object-cover h-[100%] w-[100%]"
      />
      <div className=" w-[100%] absolute bottom-0 flex justify-between items-center px-[16px] pb-[9px] text-[#fff]">
        <div className=" text-[16px] ">
          <p>{props.title}</p>
          <p>{props.date}</p>
        </div>
        <img src={arrow} alt="arrow" />
      </div>
    </div>
  );
};

export default Carousel;
