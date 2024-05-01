-[English](#english)
-[Romana](#romana)



















## <a id="english">Introduction</a>

In this project, I have chosen to use the following technologies:

- [Next.js](https://nextjs.org/docs): A meta-framework for [React](https://react.dev/learn), which in turn is a framework for JavaScript.
- [Tailwind CSS](https://tailwindcss.com/docs/installation): A CSS framework.
- [TypeScript](https://www.typescriptlang.org/docs/): A programming language that serves as a superset for JavaScript, bringing static types to the JavaScript ecosystem for safety.
- [Judge0 API](https://ce.judge0.com): This is an API that I used to create an online editor for C++, using it to compile code on an external server, with its daily limits.
- [Monaco Editor](https://www.npmjs.com/package/@monaco-editor/react): This library helped me in creating browser-based editor functionalities with ease.

### NOTE
All libraries and technologies were used in a specific environment. If you want to run the project offline, you will need:

- NPM/Yarn etc.
- [Node.js](https://nodejs.org/en).

## Getting Started

1. Create a ```.env.local``` file with the following variables (they should have the same names):

```
NEXT_PUBLIC_RAPID_API_KEY=
NEXT_PUBLIC_RAPID_API_HOST=
NEXT_PUBLIC_RAPID_API_URL=
```

2. Fill in each variable with the specific keys. These can be obtained from the official [RapidAPI](https://rapidapi.com/judge0-official/api/judge0-ce) website. Sign up for an account and enroll in the appropriate tier.

3. In the terminal, use the command to start the application:

```bash
npm run dev
```


## <a id="romana">Introducere</a>

În acest proiect, am optat să folosesc următoarele tehnologii:

- [Next.js](https://nextjs.org/docs): Un meta-framework pentru [React](https://react.dev/learn), care, la rândul său, este un framework pentru JavaScript.
- [Tailwind CSS](https://tailwindcss.com/docs/installation): Un framework CSS.
- [TypeScript](https://www.typescriptlang.org/docs/): Un limbaj de programare care servește ca un superset pentru JavaScript, aducând tipurile statice în ecosistemul JavaScript pentru siguranță.
- [Judge0 API](https://ce.judge0.com): Acesta este un API pe care l-am folosit pentru a crea un editor online pentru C++, utilizându-l pentru a compila codul pe un server extern, cu limitele sale zilnice.
- [Monaco Editor](https://www.npmjs.com/package/@monaco-editor/react): Această bibliotecă a avut rolul de a mă ajuta în crearea funcționalităților unui editor în browser cu ușurință.

### NOTĂ
Toate bibliotecile și tehnologiile au fost utilizate într-un mediu specific. Dacă doriți să rulați proiectul offline, veți avea nevoie de:

- NPM/Yarn etc.
- [Node.js](https://nodejs.org/en).

## Cum să începi

1. Creează un fișier ```.env.local``` cu următoarele variabile (trebuie să aibă aceleași nume):

```
NEXT_PUBLIC_RAPID_API_KEY=
NEXT_PUBLIC_RAPID_API_HOST=
NEXT_PUBLIC_RAPID_API_URL=
```

2. Completează fiecare variabilă cu cheile specifice. Acestea pot fi obținute de pe site-ul oficial [RapidAPI](https://rapidapi.com/judge0-official/api/judge0-ce). Înregistrați-vă pentru un cont și înscrieți-vă pentru tier-ul potrivit.

3. În terminal, folosește comanda pentru a porni aplicația:

```bash
npm run dev (cu npm)
```
```bash
yarn dev

```