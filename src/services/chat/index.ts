import { API_URLS } from "@/constants";
import { PromptWithCustomConfig } from "@/types";
import { $clientPrivate } from "../client";

interface SendWorkflowPrompt extends PromptWithCustomConfig {
  workflow_id: string;
  session_id: string;
  prompt: string;
}

export const CHAT_API = {
  sendWorkflowPrompt: async ({
    prompt,
    context = { tasks: [] },
    workflow_id,
    session_id,
  }: SendWorkflowPrompt) =>
    await $clientPrivate.post(
      API_URLS.SEND_WORKFLOW_PROMPT + `/${workflow_id}/${session_id}`,
      {
        prompt,
        context,
      }
    ),

  listenToSession: async (session: string, sub_agent_id?: string) => {
    const timestamp = parseInt((new Date().getTime() / 1000).toString());
    return new EventSource(
      `${API_URLS.SSE_LISTENER}/${session}${
        sub_agent_id ? +`/${sub_agent_id}` : ""
      }?time=${timestamp}`
    );
  },
};
