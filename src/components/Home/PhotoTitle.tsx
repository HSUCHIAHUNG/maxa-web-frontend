import React  from 'react'

interface CarouseProps {
  text: string
  subtitle: string
  className?: string
}

const Carousel:React.FC<CarouseProps> = (props) => {
    const { text, subtitle, className } = props;
    return (
      <div className={`w-[100%] flex gap-[12px] justify-center items-center pb-[18px] md:justify-normal ${className}`}>
        <p className=' text-center text-[20px] '>{text}</p>
        <div className='h-[16px] border-r border-solid border-[#E5E6EB] hidden md:block'></div>
        <p className=' text-[14px] text-[#86909C] hidden md:block '>{subtitle}</p>
      </div>
    );
  }

export default Carousel;