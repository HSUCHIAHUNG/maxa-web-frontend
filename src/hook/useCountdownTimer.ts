import { useState, useEffect } from "react";

interface CountdownTimerProps {
  // 倒數計時器的持續時間（以秒為單位）
  duration: number; 
  // 倒數結束時執行的回呼函數
  onFinish: () => void;
}

const useCountdownTimer = ({ duration, onFinish }: CountdownTimerProps) => {
  const [countdown, setCountdown] = useState(-1);

  /** @func 計時器 */
  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [countdown]);

  /** @func 倒數計時結束清除計時器 */
  useEffect(() => {
    if (countdown === 0) {
      onFinish();
    }
  }, [countdown, onFinish]);

  // 重設計時器
  const resetTimer = () => {
    setCountdown(duration);
  };

  return { countdown, resetTimer, setCountdown  };
};

export default useCountdownTimer;
