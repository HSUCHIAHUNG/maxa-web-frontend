import React from "react";

interface ChoseProps {
  url: string,
  title: string,
}

const Carousel: React.FC<ChoseProps> = (props) => {
  const { url, title } = props;

  return (
    <div className=" flex flex-col gap-[20px] w-[200px] h-[282px] md:w-[180px] md:h-[244px] xl:w-[288px] xl:h-[332px] ">
      <img
        src={url}
        alt={title}
        className=" duration-300 hover:translate-y-[-10px] hover:duration-300 w-[240px] h-[240px] md:w-[180px] md:h-[180px] xl:w-[288px] xl:h-[288px] "
      />
      <p className="text-[16px] text-center ">{title}</p>
    </div>
  );
};

export default Carousel;
