import React from "react";
import { Cards } from "@/components/cards";

export const Dezavantaje = () => {
  return (
    <div className="flex flex-col gap-y-7 w-[72.5rem] ">
      <p className="text-header">Dezavantajele recursivitati</p>
      <div className="grid grid-cols-3 gap-12">
        <Cards
          title=" Simplicitate"
          description="Metodele recursive duc adesea la cod mai simplu și mai concis, care reflectă îndeaproape structura problemei."
        />
        <Cards
          title="Eficiență"
          description="Pentru probleme cu o structură intrinsecă recursivă, utilizarea recursivității poate fi mai naturală și mai eficientă decât alte abordări."
        />
        <Cards
          title="Flexibilitate și adaptabilitate"
          description=" Recursivitatea permite abordarea problemelor cu un grad variabil de complexitate, fiind adaptabilă la diferite scenarii și cerințe."
        />
      </div>
    </div>
  );
};
