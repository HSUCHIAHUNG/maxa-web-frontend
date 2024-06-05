import React from "react";

interface CarouseProps {
  url: string;
  text: string[];
}

const Banner: React.FC<CarouseProps> = ({ url, text }) => {
  return (
    <div className=" relative max-w-[1920px] w-full h-[120px] md:h-[240px]">
      <img src={url} alt="banner" className="w-full h-full object-cover" />
      <div className={`absolute top-0  flex justify-center items-center w-full h-full `}>
        {text.map((item) => (
          <span key={item} className={`text-[#fff] bg-[#07080A99] text-[18px] rounded-[100px] w-[50px] leading-[50px] text-center md:w-text-[24px] md:w-[60px] md:leading-[60px] `}>{item}</span>
        ))}
      </div>
    </div>
  );
};

export default Banner;
