import React from "react";
import Grupare34 from "@/components/assets/grupare34";
import Grupare37 from "@/components/assets/grupare37";
import { EditorStyleBs } from "../editor/EditorStyleBS";

export const Introduction = () => {
  return (
    <div className="flex flex-col gap-y-9">
      <Part1 />
      <Part2 />
      <EditorStyleBs />
    </div>
  );
};

const Part1 = () => {
  return (
    <div className="flex flex-col gap-x-[12.125rem]  items-center relative text-left text-white gap-4  w-[72.5rem] p-3">
      <div className="mb-12 none" id="introduction"></div>
      <h2 className="text-header">Introducere in recursivitate</h2>
      <div className="border-2 border-solid border-goldYellow  p-4 rounded-md text-[24px] font-bold hover:bg-[#222324] duration-200 ease-out w-full">
        O funcție recursivă poate fi definită ca o rutină care se apelează pe
        sine direct sau indirect.
      </div>
      <p className=" text-[19.88px] font-medium">
        O funcție recursivă este o funcție care rezolvă o problemă prin
        rezolvarea unor versiuni mai mici ale aceleiași probleme. Aceasta
        înseamnă că funcția se apelează pe sine de mai multe ori pentru a
        rezolva problema în pași mici și simpli.
      </p>
    </div>
  );
};

const Part2 = () => {
  return (
    <div className="p-2">
      <p className="text-header">Cum functioneaza recursivitatea?</p>
      <div className="flex flex-row justify-between mt-14">
        <Grupare34 />
        <Grupare37 />
      </div>
    </div>
  );
};

export default Introduction;
