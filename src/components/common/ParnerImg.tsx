import React from "react";
// router
import { NavLink, useNavigate } from "react-router-dom";
// redux
import { orderActions } from "../../stores/order";
import { useAppDispatch } from "../../stores/index";

interface parnerProps {
  colorUrl: string;
  blackUrl: string;
  industry: string;
  id: string
}

const Patner: React.FC<parnerProps> = ({ colorUrl, blackUrl, industry, id }) => {
  // redux
  const dispatch = useAppDispatch();

  // 動態路由
  const navigate = useNavigate();

  const setParner = () => {
    dispatch(orderActions.setParner(industry));
    navigate(`parner/${id}`);
  };

  return (
    <>
      {/* 電腦版 */}
      <button
        onClick={() => setParner()}
        className="w-[200px] h-[200px] bg-cover bg-center duration-300 hidden md:w-[144px] md:h-[144px] xl:w-[224px] xl:h-[224px] md:block "
        style={{ backgroundImage: `url(${blackUrl})` }}
      >
        <div
          className="w-full h-full bg-cover bg-center duration-300  opacity-0 hover:opacity-100"
          style={{ backgroundImage: `url(${colorUrl})` }}
        ></div>
      </button>
      {/* 手機版 */}
      <NavLink
        to={`parner/${id}`}
        className="w-[200px] h-[200px] bg-center md:hidden "
        style={{ backgroundImage: `url(${colorUrl})` }}
      ></NavLink>
    </>
  );
};

export default Patner;
