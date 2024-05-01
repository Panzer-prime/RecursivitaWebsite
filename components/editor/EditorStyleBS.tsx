
import { EditorComponent } from "./EditorView";


export const EditorStyleBs = () => {
  let codeEditor = `
   #include <iostream>

  using namespace std;
  
  // Recursive Function to calculate Factorial of a number
  int factorial(int n)
  {
    // Base case
    if (n == 0) {
      return 1;
    }
  
    // Recursive case
    return n * factorial(n - 1);
  }
  
  // Driver Code
  int main()
  {
    int n = 4;
    cout << "Factorial of " << n<< " is: " << factorial(n);
    return 0;
  }
   `;

  return (
    <div className="flex flex-col gap-y-6 font-medium">
      <p className="text-header">Cod exemplu:</p>
      <EditorComponent initialCode={codeEditor} EditorHeight="50vh" />
      <div className="flex flex-col text-white">
        <p className="text-header">Cum functioneaza?</p>
        <ul className="text-[20px] flex flex-col gap-y-5 list-decimal">
          <li>
            Funcția factorial primește un întreg n ca intrare și returnează
            factorialul lui n.
          </li>
          <li>
            <pre>
              În funcția factorial:
              <p>
                Dacă n este 0 (cazul de bază), returnează 1 deoarece factorialul
                lui 0 este definit ca 1.
              </p>
              <p>
                În caz contrar (cazul recursiv), multiplică n cu factorialul lui
                n - 1.
              </p>
            </pre>
          </li>
          <li>
            Funcția main: Inițializează o variabilă întreagă n cu valoarea 4.
            Apelează funcția factorial cu n ca parametru. Afișează rezultatul,
            care este factorialul lui n.
          </li>
        </ul>
      </div>
    </div>
  );
};
