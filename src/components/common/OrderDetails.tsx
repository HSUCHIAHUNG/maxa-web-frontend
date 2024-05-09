import React from "react";

interface OrderDetailsProps {
  title?: boolean
  className?: string
}

const OrderDetails: React.FC<OrderDetailsProps> = ({ title = true, className }) => {
  return (
    <div
      className={`${className} overflow-hidden border border-solid border-[#E5E6EB] rounded-[8px] w-[100%] xl:h-[492px] xl:w-[320px]`}
    >
      {title && (
        <div className={`flex justify-between py-[11px] px-[16px]`}>
          <p>預約日期</p>
          <p>2024-04-21</p>
        </div>
      )}
      <img
        src={
          "https://ohh.okinawa/wpdir/wp-content/uploads/2018/07/59827ddcc6f8f06485fad8836fb30162.jpg"
        }
        alt={"productDetail"}
        className=" w-[100%] object-cover h-[200px]"
      />
      <div className="w-[100%] p-[16px] flex flex-col justify-between ">
        <div className={`pb-[20px]`}>
          格上租車券+阿里山門票+奮起湖經典三大美食三大美食三大美食三大奮起湖經典三大美食三大美食三大美食三大
        </div>
        <div className={`flex justify-between`}>
          <p>成人票*2</p>
          <p>NT$ 399*2</p>
        </div>
        <div className={`flex justify-between`}>
          <p>兒童票*2</p>
          <p>NT$ 200*2</p>
        </div>
        <div
          className={`border-b border-solid border-[#E5E6EB] w-full my-[8px] `}
        ></div>
        <div className={`flex justify-between text-[20px]`}>
          <p>總金額</p>
          <p>NT$1,100</p>
        </div>
        <button
          className={`mt-[12px] px-[16px] py-[5px] w-full text-[#fff] bg-[#3A57E8] `}
        >
          確認付款
        </button>
      </div>
    </div>
  );
};

export default OrderDetails;
