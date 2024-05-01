import React from "react";
import Image from "next/image";

interface CardsProps {
  className?: string;
  title?: string;
  description?: string;
  imageURL?: any;
}
export const Cards: React.FC<CardsProps> = ({
  className,
  title,
  description,
  imageURL,
}) => {
  return (
    <div
      className={`w-[22.813rem] h-[33.938rem] flex flex-col text-white p-3 hover:scale-110 duration-300 ease-out ${className}`}
    >
      {imageURL ? (
        
          <Image
            src={imageURL}
            alt="cards image"
            width={`365`}
            height={198}
            className="object-fit"
            
          />
        
      ) : (
        <div className=""></div>
      )}

      <div className="flex h-[15.563rem] flex-col bg-[#2A2A2A] rounded-md justify-center gap-y-3 p-3">
        <p className=" font-medium text-[28px] text-goldYellow">{title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};
