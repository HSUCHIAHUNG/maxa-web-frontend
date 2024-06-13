import React from "react";
// 匯入圖片
import deleteAccountImg from '../assets/images/delete-account.png'


const DeleteAccount:React.FC = () => {
    return (
        <div className={` h-[90vh] flex flex-col justify-center items-center gap-[32px] px-[12px] `}>
            <img src={deleteAccountImg} alt="delete account" />
            <p className={`text-center text-[11px] md:text-[14px]`}>已收到您的帳號刪除申請，我們很捨不得您離開MAXA！<br/>如欲使用MAXA的服務，歡迎再次建立新帳戶。</p>
        </div>
    )
}

export default DeleteAccount 