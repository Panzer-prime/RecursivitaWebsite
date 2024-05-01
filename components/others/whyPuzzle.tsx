import React from "react";
import { Canvas } from "@/components/canvaGame/Canvas";

export const WhyPuzzle = () => {
  return (
    <div className="flex flex-col items-center">
      <Canvas />
      <Details />
    </div>
  );
};
const Details = () => {
  return (
    <div className="flex flex-col w-[72.5rem] text-[20px] text-white gap-y-7 font-medium mt-14">
      <p className="text-header">Dece un puzzle?</p>
      <p className="">
        Un exemplu potrivit pentru recursivitate ar fi rezolvarea unui puzzle
        Recursivitatea în rezolvarea unui labirint implică descompunerea
        problemei în subprobleme mai mici și mai ușor de gestionat și rezolvarea
        fiecăreia dintre ele recursiv până când se găsește o soluție. Iată cum
        funcționează:
      </p>
      <ul className="flex flex-col gap-y-7 list-decimal">
        <li>
          Cazul de bază: Recursivitatea începe cu un caz de bază care definește
          cea mai simplă scenă posibilă. În rezolvarea unui labirint, acest
          lucru ar putea fi ajungerea la destinație sau întâlnirea unei pereți.
        </li>
        <li>
          Pasul recursiv: Dacă cazul de bază nu este îndeplinit, problema este
          împărțită în subprobleme mai mici care sunt similare ca structură cu
          problema originală. În rezolvarea unui labirint, acest lucru implică
          în general explorarea celulelor sau direcțiilor adiacente.
        </li>
        <li>
          Backtracking: Dacă pasul recursiv nu duce la o soluție, algoritmul
          revine și încearcă o altă abordare. În rezolvarea unui labirint, acest
          lucru înseamnă anularea mutării curente și încercarea unei direcții
          diferite.
        </li>
        <li>
          Terminare: Recursivitatea continuă până când se îndeplinește un caz de
          bază și se găsește o soluție, sau până când toate căile posibile au
          fost explorate fără succes.
        </li>
      </ul>
    </div>
  );
};
