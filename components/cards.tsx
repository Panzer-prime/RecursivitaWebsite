import React from "react";

interface CardsProps {
  className?: string;
  title?: string;
  description?: string;
}
export const Cards: React.FC<CardsProps> = ({
  className,
  title,
  description,
}) => {
  return (
    <div
      className={`w-[22.813rem] h-[27.938rem] flex flex-col text-white p-2 hover:scale-110 duration-300 ease-out ${className}`}
    >
      <div className="h-[12.375rem] bg-white rounded-md p-3">erer</div>
      <div className="flex h-[15.563rem] flex-col bg-[#2A2A2A] rounded-md justify-center gap-y-3 p-3">
        <p className=" font-medium text-[28px] text-goldYellow">{title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};
