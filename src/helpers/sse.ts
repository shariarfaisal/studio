import { isObject } from "lodash";

export const LLM_PROCESSING_MODE = "Processing...";
export const LLM_THINKING_MODE = "Thinking...";
export const RESET_RESPONSE = "";
export const SSE_SUCCESS_OR_ERROR = ["_SUCCESS", "_ERROR"];

export const handleTypingResponse = (response: string) => {
  if (SSE_SUCCESS_OR_ERROR.includes(String(response))) {
    return RESET_RESPONSE;
  }

  if (response === "[" || response === "```" || response === "```yaml") {
    return LLM_THINKING_MODE;
  }
  const regex = /Answer:\s*(.*?)(?=\n|$)/;
  const match = regex.exec(response);
  const answer = match ? match[1].trim() : "";

  if (
    (!isObject(response) && answer) ||
    response === "STARTING" ||
    String(response).includes("[/answer]")
  ) {
    return LLM_PROCESSING_MODE;
  }

  return `${answer || String(response)}`;
};
