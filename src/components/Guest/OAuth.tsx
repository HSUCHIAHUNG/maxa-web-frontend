import React from "react";

interface oAuthProps {
  className?: string;
  model: string;
}

const OAuth: React.FC<oAuthProps> = (props) => {
  const { model } = props;

  /** @const 非忘記密碼或登入表單 */
  const isDisplay = model !== "signUpDefault" && model !== "login";

  return (
    <>
      <div>
        <div
          className={`flex gap-[8px] justify-center pt-[16px] ${
            model === "signUpDefault" ? "pb-[11px]" : "pb-[45px]"
          } ${isDisplay ? "hidden" : "block"}`}
        >
          <div
            className={` w-[40px] h-[40px] bg-[#F2F3F5] p-[10px] flex justify-center items-center rounded-[100px] `}
          >
            <span className="icon-[bi--line] w-[24px] h-[24px] text-[#4E5969]"></span>
          </div>
          <div
            className={` w-[40px] h-[40px] bg-[#F2F3F5] p-[10px] flex justify-center items-center rounded-[100px] `}
          >
            <span className="icon-[bi--google] w-[24px] h-[24px] text-[#4E5969]"></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default OAuth;
