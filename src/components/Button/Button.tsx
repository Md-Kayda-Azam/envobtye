import React from "react";

interface DynamicButtonProps {
  text: string;
  bgColor?: string;
  textColor?: string;
  width?: string | number;
  height?: string | number;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<DynamicButtonProps> = ({
  text,
  bgColor = "#FF6200",
  textColor = "#FFFFFF",
  // width = 238,
  // height = 50,
  onClick,
  className = "",
}) => {
  // const normalizedWidth = typeof width === "number" ? `${width}px` : width;
  // const normalizedHeight = typeof height === "number" ? `${height}px` : height;

  return (
    <button
      onClick={onClick}
      className={`transition-colors font-inter tracking-normal text-center ${bgColor} ${textColor}  ${className} flex justify-center items-center cursor-pointer`}
      // style={{
      //   width: normalizedWidth,
      //   height: normalizedHeight,
      // }}
    >
      {text}
    </button>
  );
};

export default Button;
