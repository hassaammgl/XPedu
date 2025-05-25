import { GoogleGenAI } from "@google/genai";
import { ENVS } from "../config/constants";

const ai = new GoogleGenAI({ apiKey: ENVS.GEMINI_API_KEY });

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: "Explain how AI works in a few words",
  });
  console.log(response.text);
}

main();