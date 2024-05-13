import React from "react";

const DeleteAccount:React.FC = () => {
    return (
        <div className={` h-[90vh] flex flex-col justify-center items-center gap-[32px] px-[12px] `}>
            <div className={`w-[160px] h-[160px] bg-[#E5E6EB]  md:w-[300px] md:h-[300px]`}></div>
            <p>已收到您的帳號刪除申請，我們很捨不得您離開MAXA！如欲使用MAXA的服務，歡迎再次建立新帳戶。</p>
        </div>
    )
}

export default DeleteAccount 