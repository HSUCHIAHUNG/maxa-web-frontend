import React, { MouseEventHandler } from "react";

interface IconButtonProps {
  isOpen: boolean
  icon: string
  className: string
  toggleOpenFn: MouseEventHandler<HTMLDivElement>;
}

const IconButton: React.FC<IconButtonProps> = ({toggleOpenFn, isOpen, icon, className}) => {
  return (
    <>
      <div onClick={toggleOpenFn} className={`${className} `}>
        <span
          className={`${icon} w-[24px] h-[24px] text-[#4E5969] cursor-pointer ${
            isOpen && "text-[#3A57E8]"
          }`}
        ></span>
        <div
          className={`absolute w-[24px] h-[5px] bg-[#3A57E8] bottom-[0px]  ${
            isOpen ? "block" : "hidden"
          }`}
        ></div>
      </div>
    </>
  );
};

export default IconButton;
