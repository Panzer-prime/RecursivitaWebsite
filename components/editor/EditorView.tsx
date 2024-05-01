"use client";

import { Judge0Submission } from "@/constants/judge.types";
import { useState } from "react";
import handleCompileJudge0 from "@/lib/JudgeCodeSetUp";
import { Editor } from "@monaco-editor/react";

interface EditorComponentProps {
  initialCode: string;
  EditorWidth?: string;
  EditorHeight?: string;
}

export const EditorComponent: React.FC<EditorComponentProps> = ({
  initialCode,
  EditorWidth,
  EditorHeight,
}) => {
  const [codeEditor, setCodeEditor] = useState<string>(initialCode);
  const [codeOutput, setCodeOutput] = useState<Judge0Submission>();
  const [isNotCompiled, setIsNotCompiled] = useState(false);

  const handleChange = (value: string | undefined) => {
    if (value) {
      setCodeEditor(value);
    }
  };

  const handleClick = async () => {
    try {
      let tempCode: string = codeEditor.trim();
      if (tempCode.length === 0) {
        setIsNotCompiled(true);
        return;
      }

      const response = await handleCompileJudge0({
        code: codeEditor,
        languageId: 76,
      });
      setCodeOutput(response);
      console.log(response);
    } catch (error) {
      console.error("Error:", error);
      
    }
  };

  return (
    <div>
      <div>
        <div className="flex flex-col gap-y-6 text-white">
          <Editor
            width={EditorWidth}
            height={EditorHeight}
            defaultLanguage="cpp"
            defaultValue={codeEditor.trim()}
            theme="vs-dark"
            onChange={handleChange}
          />
          <button
            className="w-max-[8.75rem] h-10 bg-purple-600 text-white font-bold rounded-md px-2 "
            onClick={handleClick}
          >
            Run code
          </button>
        </div>
        <div className="text-white bg-slate-700 border-goldYellow border-solid border-2 rounded-md h-[200px] p-2 mt-5">
          <p>
            {!isNotCompiled
              ? codeOutput
                ? atob(codeOutput?.stdout)
                : "Press run to compile"
              : "editorul nu poate fi gol"}
          </p>
           {!isNotCompiled && <p>Memory: {codeOutput?.memory}</p>}
           {!isNotCompiled && <p>Time: {codeOutput?.time}</p>}
        </div>
      </div>
    </div>
  );
};
