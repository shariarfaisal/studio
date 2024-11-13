import { IFile } from "@/types";

export const extractJson = (content: string): object => {
  try {
    /** Extracts valid JSON strings delimited by 'json' and '```' from raw text.
     *
     * @param content - The raw input text string.
     * @returns A parsed JSON object, or an empty object if no valid JSON is found.
     */

    const jsonPattern = /json\s*([\s\S]*?)\s*```/gs; // Regex pattern to match content between ```json and ```
    const matches = content.match(jsonPattern);

    if (!matches) return {};

    for (const match of matches) {
      try {
        const jsonData = match.replace(/^json\s*|```$/g, "").trim(); // Remove pattern delimiters and extra whitespace
        return JSON.parse(jsonData); // Validate as JSON and return
      } catch (e) {
        console.error(e);

        // Continue to the next match if parsing fails
        continue;
      }
    }

    return {};
  } catch (error) {
    console.error(error);
    return {};
  }
};

export const extractUrl = (input: string): string => {
  const regex = /src='(.*?)'/;
  const match = input.match(regex);
  return match ? match[1] : "";
};

export function parseFileResponse(response: string): IFile {
  const fileTagMatch = response.match(/<file(?: mime='(.*?)')? src='(.*?)'\/>/);

  if (!fileTagMatch) {
    throw new Error("Invalid response format");
  }

  const mime = fileTagMatch[1] || ""; // Set mime to null if not found
  const url = fileTagMatch[2];

  // Extract filename from the URL
  const filename = url.substring(url.lastIndexOf("/") + 1);

  return {
    filename,
    url,
    mime,
  };
}
