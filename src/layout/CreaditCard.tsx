import { Link, useParams } from "react-router-dom";
import creaditImg_1200 from "../assets/images/order/payment_1200.png";
import creaditImg_325 from "../assets/images/order/payment_325.png";

const CreditCard = () => {
  // 動態路由參數
  const param = useParams();

  return (
    <Link
      to={`/paidOrderContent/${param.id}`}
      className={`flex justify-center items-center w-full max-w-[1920px] m-[0_auto] overflow-auto bg-gradient-to-b from-[#00796b] to-[#b2dfdb] `}
    >
      <img
        src={creaditImg_1200}
        alt="信用卡付款畫面"
        className={`hidden md:block`}
      />
      <img src={creaditImg_325} alt="信用卡付款畫面" className={`md:hidden`} />
    </Link>
  );
};

export default CreditCard;
