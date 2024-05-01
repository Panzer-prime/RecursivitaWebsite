import React from "react";
import { EditorComponent } from "./editor/EditorView";

export const IteratieVsRecursivitate = () => {
  return (
    <div className="flex flex-col gap-6">
      <p className="text-header"> iteratie Vs Recursivitate</p>
      <Editoare />
    </div>
  );
};

export default IteratieVsRecursivitate;

const Editoare = () => {
  let codeExampleRecursive = `
#include <iostream>

// Metodă recursivă pentru calculul sumei cifrelor
int sumaCifrelorRecursiva(int n) {
    if (n == 0)
        return 0;
    else
        return n % 10 + sumaCifrelorRecursiva(n / 10);
}

int main() {
    int numar = 12345;
    
    std::cout << "Suma cifrelor lui " << numar << " (Recursiv): " << sumaCifrelorRecursiva(numar) << std::endl;

    return 0;
}

  `;
  let codeExampleIterativ = `
#include <iostream>

// Metodă iterativă pentru calculul sumei cifrelor
int sumaCifrelorIterativa(int n) {
    int suma = 0;
    while (n != 0) {
        suma += n % 10;
        n /= 10;
    }
    return suma;
}

int main() {
    int numar = 12345;
    
    std::cout << "Suma cifrelor lui " << numar << " (Iterativ): " << sumaCifrelorIterativa(numar) << std::endl;

    return 0;
}

  `;
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <div className="w-full flex flex-row gap-11">
        <EditorComponent
          initialCode={codeExampleRecursive}
          EditorHeight="50vh"
          EditorWidth="600px"
        />

        <EditorComponent
          initialCode={codeExampleIterativ}
          EditorHeight="50vh"
          EditorWidth="600px"
        />
      </div>
    </div>
  );
};

