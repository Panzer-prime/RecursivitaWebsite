import React from 'react';

const tableData = [
  {
    criteriu: 'Complexitate',
    metodaIterativa: 'De obicei, mai simplă de implementat și de înțeles.',
    metodaRecursiva: 'Uneori mai elegantă în rezolvarea anumitor probleme.'
  },
  {
    criteriu: 'Utilizare a Memoriei',
    metodaIterativa: 'De obicei, consumă mai puțină memorie datorită lipsei stivei de apeluri de funcție.',
    metodaRecursiva: 'Poate consuma mai multă memorie din cauza stivei de apeluri de funcție.'
  },
  {
    criteriu: 'Performanță',
    metodaIterativa: 'De obicei, mai rapidă pentru probleme cu seturi de date mari.',
    metodaRecursiva: 'Poate avea o execuție mai lentă din cauza costurilor suplimentare ale apelurilor de funcție.'
  },
  {
    criteriu: 'Debugging',
    metodaIterativa: 'Mai ușor de depanat datorită fluxului liniar și actualizărilor explicite ale stării.',
    metodaRecursiva: 'Mai dificil de depanat, în special în cazul recursivității profunde.'
  },
  {
    criteriu: 'Optimizare Coada Finală',
    metodaIterativa: 'Nu este aplicabilă.',
    metodaRecursiva: 'Aplicabilă în unele limbaje, reducând riscul de depășire a stivei.'
  },
  {
    criteriu: 'Lizibilitate',
    metodaIterativa: 'Poate fi mai puțin lizibilă pentru anumite algoritmi.',
    metodaRecursiva: 'Poate fi mai lizibilă, în special pentru algoritmii cu natură recursivă.'
  },
  {
    criteriu: 'Risc de Depășire a Stivei',
    metodaIterativa: 'Risc mai mic, deoarece nu există stivă de apeluri recursivă.',
    metodaRecursiva: 'Risc mai mare, în special în cazul recursivității profunde sau nelimitate.'
  },
  {
    criteriu: 'Lungimea Codului',
    metodaIterativa: 'Codul iterativ poate fi mai lung pentru anumite probleme.',
    metodaRecursiva: 'Codul recursiv poate fi mai concis pentru anumite probleme.'
  }
];

export const Table = () => {
  return (
    
      <div className="bg-midnightBlack shadow-md rounded-lg overflow-hidden w-full p-5 h-full break-words text-white">
        <table className="min-w-full divide-y divide-gray-200 w-[32rem]">
          <thead className="bg-[#282828] rounded-md">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-goldYellow uppercase tracking-wider">Criteriu</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-goldYellow uppercase tracking-wider">Metodă Iterativă</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-goldYellow uppercase tracking-wider">Metodă Recursivă</th>
            </tr>
          </thead>
          <tbody className="bg-[#282828] divide-y divide-white odd:bg-[#2e2d2d]">
            {tableData.map((row, index) => (
              <tr key={index}>
                <td className="px-6 py-4 ">
                  <div className="text-sm font-medium text-white">{row.criteriu}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200 ">{row.metodaIterativa}</td>
                <td className="px-6 py-4  text-sm text-gray-200">{row.metodaRecursiva}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    
  );
};


