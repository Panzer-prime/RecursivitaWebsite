import React from "react";
import Image from "next/image";
//assets
import matrioskaPhoto from "@/public/matroshka.png";

export const HeroSection = () => {
  return (
    <div className="flex flex-col-reverse gap-x-[12.125rem]  items-center relative sm:flex-row">
        <div className="w-max-[37.5rem] h-max-[9.375rem] lg:w-[37.5rem] gap-y-7 mt-6">
            <p className="text-goldYellow text-[51.52px] font-bold ">Recursivitate: Avantaje și Dezavantaje</p>
            <p className="text-white opacity-80 text-[22px]">Cum și de ce să utilizezi recursivitatea în programe?</p>
            <a className="w-max-[8.75rem] h-10 bg-purple-600 p-2 rounded-md text-[1.242rem] font-bold text-white mt-3 inline-block " href="#introduction">Start here</a>
        </div>
      <div>
        <Image src={matrioskaPhoto} alt="poza cu matrioska" width={376} height={420} className=" w-min-[100px]"/>
      </div>
    </div>
  );
};
