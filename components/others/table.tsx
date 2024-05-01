export const Table = () => {
    return (
      <div className="overflow-x-auto text-white w-[72.5rem]">
        <table className="table-auto w-full bg-[#2A2A2A]">
          <thead>
            <tr className="text-goldYellow text-[26px] ">
              <th className="border px-4 py-2">Criteriu</th>
              <th className="border px-4 py-2">Metodă Iterativă</th>
              <th className="border px-4 py-2">Metodă Recursivă</th>
            </tr>
          </thead>
          <tbody className="text-[16px]">
            <tr>
              <td className="border px-4 py-2">Complexitate</td>
              <td className="border px-4 py-2">
                De obicei, mai simplă de implementat și de înțeles.
              </td>
              <td className="border px-4 py-2">
                Uneori mai elegantă în rezolvarea anumitor probleme.
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Utilizare a Memoriei</td>
              <td className="border px-4 py-2">
                De obicei, consumă mai puțină memorie datorită lipsei stivei de
                apeluri de funcție.
              </td>
              <td className="border px-4 py-2">
                Poate consuma mai multă memorie din cauza stivei de apeluri de
                funcție.
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Performanță</td>
              <td className="border px-4 py-2">
                De obicei, mai rapidă pentru probleme cu seturi de date mari.
              </td>
              <td className="border px-4 py-2">
                Poate avea o execuție mai lentă din cauza costurilor suplimentare
                ale apelurilor de funcție.
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Debugging</td>
              <td className="border px-4 py-2">
                Mai ușor de depanat datorită fluxului liniar și actualizărilor
                explicite ale stării.
              </td>
              <td className="border px-4 py-2">
                Mai dificil de depanat, în special în cazul recursivității
                profunde.
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Optimizare Coada Finală</td>
              <td className="border px-4 py-2">Nu este aplicabilă.</td>
              <td className="border px-4 py-2">
                Aplicabilă în unele limbaje, reducând riscul de depășire a stivei.
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Lizibilitate</td>
              <td className="border px-4 py-2">
                Poate fi mai puțin lizibilă pentru anumite algoritmi.
              </td>
              <td className="border px-4 py-2">
                Poate fi mai lizibilă, în special pentru algoritmii cu natură
                recursivă.
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Risc de Depășire a Stivei</td>
              <td className="border px-4 py-2">
                Risc mai mic, deoarece nu există stivă de apeluri recursivă.
              </td>
              <td className="border px-4 py-2">
                Risc mai mare, în special în cazul recursivității profunde sau
                nelimitate.
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Lungimea Codului</td>
              <td className="border px-4 py-2">
                Codul iterativ poate fi mai lung pentru anumite probleme.
              </td>
              <td className="border px-4 py-2">
                Codul recursiv poate fi mai concis pentru anumite probleme.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };
  