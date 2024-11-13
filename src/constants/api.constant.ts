export const API_URLS = {
  BASE_API_URL: process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1/thanh-uy",
  UPLOAD_WORKFLOW_FILE: "/v1/w_file",
  LOGIN: "/api/auth/login",
  REGISTER: "/api/users",
  PROJECT: "/api/projects",
  ANALYTICS: "/api/analytics",
  CONVERSATION: "/api/conversations",
  THREAD: "/api/threads",
  STEP: "/api/steps",
  ANALYSIS: "/api/analysis",
  USER: "/api/users",
  LOGOUT: "/api/auth/logout",
  SEND_WORKFLOW_PROMPT: "/v1/w_prompt",
  CHAT_PROMPT: "/v1/prompt",
  CHAT: "/v1/chat",
  SSE_LISTENER: process.env.NEXT_PUBLIC_API_URL + "/sse/sub",
};

export enum SCROLL_DIRECTION {
  UP = 0,
  DOWN = 1,
}
