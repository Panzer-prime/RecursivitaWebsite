import axios from "axios";
import { Judge0Submission } from "@/constants/judge.types";

interface RunCodeOnJudge0Props {
  code: string;
  languageId: number;
}

const handleCompileJudge0 = async ({
  code,
  languageId,
}: RunCodeOnJudge0Props) => {
  try {
    const formData = {
      language_id: languageId,
      source_code: btoa(code),
    };

    const options = {
      method: "POST",
      url: process.env.NEXT_PUBLIC_RAPID_API_URL + "submissions",
      params: { base64_encoded: "true", fields: "*" },
      headers: {
        "content-type": "application/json",
        "Content-Type": "application/json",
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
        "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPID_API_HOST,
      },
      data: formData,
    };

    const response = await axios.request(options);
    const token = response.data.token;
    const codeOutput = await CheckStatus(token);
    return codeOutput;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      
      const errorResponse = err.response;
      if (errorResponse) {
        
        const { data, status } = errorResponse;
        if (status === 429) {
          console.error("Too Many Requests:", status);
          throw { status: 429, message: "Too Many Requests" };
          
        }
      } else {
        
        console.error("Network Error:", err.message);
        throw { status: 500, message: "Network Error" };
      }
    } else {

      throw new Error("Something went wrong");
    }
  }
};

const CheckStatus = async (token: string): Promise<Judge0Submission> => {
  const options = {
    method: "GET",
    url: `https://judge0-ce.p.rapidapi.com/submissions/${token}`,
    params: { base64_encoded: "true", fields: "*" },
    headers: {
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
      "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPID_API_HOST,
    },
  };

  try {
    const response = await axios.request(options);
    const statusID = response.data.status?.id;

    if (statusID === 1 || statusID === 2) {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      return await CheckStatus(token);
    } else {
      return response.data;
    }
  } catch (error) {
    throw new Error("Something went wrong");
  }
};

export default handleCompileJudge0;
