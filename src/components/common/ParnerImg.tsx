import React from "react";
import { NavLink } from "react-router-dom";

interface parnerProps {
  colorUrl: string;
  blackUrl: string;
}

const Patner: React.FC<parnerProps> = (props) => {
  const { colorUrl, blackUrl } = props;

  return (
    <>
      {/* 電腦版 */}
      <NavLink
        to='parner'
        className="w-[200px] h-[200px] bg-cover bg-center duration-300 hidden md:w-[144px] md:h-[144px] xl:w-[224px] xl:h-[224px] md:block "
        style={{ backgroundImage: `url(${blackUrl})` }}
      >
        <div
          className="w-full h-full bg-cover bg-center duration-300  opacity-0 hover:opacity-100"
          style={{ backgroundImage: `url(${colorUrl})` }}
        ></div>
      </NavLink>
      {/* 手機版 */}
      <NavLink
        to='parner'
        className="w-[200px] h-[200px] bg-center md:hidden "
        style={{ backgroundImage: `url(${colorUrl})` }}
      ></NavLink>
    </>
  );
};

export default Patner;
