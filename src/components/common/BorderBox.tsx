import React, { ReactNode } from "react";

interface BorderBoxProps {
  className?: string;
  children?: ReactNode; 
}

const BorderBox: React.FC<BorderBoxProps> = ({ className, children }) => {
  return (
    <div
      className={`${className} w-[auto] bg-[#fff] border-[2px] border-solid border-[#E5E6EB] `}
    >
      {children}
    </div>
  );
};

export default BorderBox;
