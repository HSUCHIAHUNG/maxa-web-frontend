import { useState, useEffect } from "react";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 監聽滾動事件
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // 如果滾動位置大於100，顯示按鈕，否則隱藏
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // 平滑滾動到頂部
    });
  };

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={` fixed right-[20px] bottom-[20px] rounded-[8px] p-[10px] bg-[#F2F3F5] border border-solid border-[#E5E6EB] md:bottom-[80px] md:right-[80px] `}
        >
          <span
            className="icon-[solar--arrow-up-outline] w-[20px] h-[20px] text-[#4E5969] "
          ></span>
          <p className={`text-[12px] hidden md:block`}>TOP</p>
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;
