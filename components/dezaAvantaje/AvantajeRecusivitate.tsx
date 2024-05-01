import React from "react";
import { Cards } from "@/components/cards";
import simplicity from "@/public/simplicity.jpg"
import efficiency from "@/public/efficiency.jpg"
import flexibility from "@/public/Na__August_48.jpg"
import modularity from "@/public/modularity.jpg"
import abstraction from "@/public/abstraction.jpg"

export const AvantajeRecusivitate = () => {
  return (
    <div className="flex flex-col gap-y-7 w-[72.5rem] ">
      <p className="text-header">Avantajele recursivitati</p>
      <div className="grid grid-cols-3 gap-12">
        <Cards
          title=" Simplicitate"
          description="Metodele recursive duc adesea la cod mai simplu și mai concis, care reflectă îndeaproape structura problemei."
          imageURL={simplicity}
        />
        <Cards
          title="Eficiență"
          description="Pentru probleme cu o structură intrinsecă recursivă, utilizarea recursivității poate fi mai naturală și mai eficientă decât alte abordări."
          imageURL={efficiency}
        />
        <Cards
          title="Flexibilitate și adaptabilitate"
          description=" Recursivitatea permite abordarea problemelor cu un grad variabil de complexitate, fiind adaptabilă la diferite scenarii și cerințe."
          imageURL={flexibility}
        />
        <div className="flex w-[72.5rem] flex-row gap-12 justify-center">
          <Cards
            title="Modularitate"
            description="Metodele recursive promovează modularitatea prin împărțirea problemelor complexe în subprobleme mai mici și mai ușor de gestionat. Fiecare apel recursiv gestionează o parte specifică a problemei, facilitând depanarea și testarea."
            imageURL={modularity}
          />
          <Cards
            title="Abstractizare"
            description="Recursivitatea abstractizează implementarea și se concentrează pe logica problemelor, făcând codul mai flexibil și mai ușor de întreținut."
            imageURL={abstraction}
          />
        </div>
      </div>
    </div>
  );
};
