import React from "react";

interface CustomSkeletonProps {
  width: number | string;
  height: number | string;
  circle?: boolean;
  className?: string;
}

const CustomSkeleton: React.FC<CustomSkeletonProps> = ({
  width,
  height,
  circle = false,
  className = "",
}) => {
  return (
    <div
      className={`bg-gray-700 animate-pulse ${
        circle ? "rounded-full" : "rounded-lg"
      } ${className}`}
      style={{ width, height }}
    ></div>
  );
};

export default CustomSkeleton;
