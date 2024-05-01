import React from "react";
import { Cards } from "@/components/cards";
import overflow from "@/public/overflow.jpg"
import performance from "@/public/performance.jpg"
import code from "@/public/code.jpg"


export const Dezavantaje = () => {
  return (
    <div className="flex flex-col gap-y-7 w-[72.5rem] ">
      <p className="text-header">Dezavantajele recursivitati</p>
      <div className="grid grid-cols-3 gap-12">
        <Cards
          title="Depășirea Stivei"
          description="Recursivitatea poate duce la erori de depășire a stivei dacă adâncimea recursiei depășește limita stivei sistemului, în special pentru probleme cu recursie profundă sau dimensiuni mari ale intrării."
          imageURL={overflow}
        />
        <Cards
          title="Performance Issues"
          description="Metodele recursive pot avea suprasarcină de performanță din cauza costurilor de apelare a funcțiilor și gestionării stivei de apeluri. Soluțiile iterative pot fi mai eficiente în unele cazuri."
          imageURL={performance}
        />
        <Cards
          title="Dificultăți în Debugging"
          description="Codul recursiv poate fi mai greu de depanat decât cel iterativ, în special când se lucrează cu structuri de recursivitate complexe sau cazuri de bază subtile. Urmarirea fluxului de execuție prin multiple apeluri recursive poate fi dificilă."
          imageURL={code}
        />
      </div>
    </div>
  );
};
