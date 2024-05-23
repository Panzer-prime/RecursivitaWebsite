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

  // Recursive function to calculate the factorial of a number
  int factorial(int n) {
      if (n <= 1) {
          return 1;
      } else {
          return n * factorial(n - 1);
      }
  }
  
  int main() {
      int num = 5;
      std::cout << "Factorial of " << num << " is: " << factorial(num) << std::endl;
      return 0;
  }
  

  `;
  let codeExampleIterativ = `
  #include <iostream>

  // Iterative function to calculate the factorial of a number
  int factorial(int n) {
      int result = 1;
      for (int i = 1; i <= n; ++i) {
          result *= i;
      }
      return result;
  }
  
  int main() {
      int num = 5;
      std::cout << "Factorial of " << num << " is: " << factorial(num) << std::endl;
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

