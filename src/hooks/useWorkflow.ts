import { WORKFLOWS } from "@/configs";
import { handleTypingResponse, SSE_SUCCESS_OR_ERROR } from "@/helpers";
import { CHAT_API } from "@/services";
import { Conversation, IFile, SESSION_ASSETS } from "@/types";
import { useCallback } from "react";

interface TriggerListenerProps {
  session_id?: string;
  sub_agent_id?: string;
  onCompleted?: (data: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: Record<string, any>;
    conversation: Conversation;
  }) => void;
  getEachRoleData?: (data: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: Record<string, any>;
    conversation: Conversation;
  }) => void;
  onTypingResponse?: (message: string) => void;
  onError?: (error?: Event) => void;
}

interface FileIndexing {
  prompt: "START" | "INSERT" | "DELETE";
  session_id: string;
  files: IFile[];
}

export const useWorkflow = () => {
  const triggerListener = useCallback(
    async ({
      session_id,
      sub_agent_id,
      onCompleted,
      getEachRoleData,
      onTypingResponse,
      onError,
    }: TriggerListenerProps) => {
      let IS_COMPLETE = false;
      const eventSource = await CHAT_API.listenToSession(
        session_id || "",
        sub_agent_id
      ); // TODO: Add session

      eventSource.addEventListener("message", async (event) => {
        if (!event.data) return;

        const data = JSON.parse(event.data);

        if (onTypingResponse) {
          onTypingResponse(handleTypingResponse(data.response));
        }

        if (String(data.response) === "COMPLETE") {
          IS_COMPLETE = true;
        }

        const conversation = {
          ...data,
          content: data?.response,
          created_at: data?.timestamp,
        };

        if (getEachRoleData) getEachRoleData({ ...data, conversation });

        if (data.id > 0 && SESSION_ASSETS.includes(data.role)) {
          if (IS_COMPLETE) {
            if (onCompleted) onCompleted({ ...data, conversation });
            eventSource.close();
          }
        }

        // TODO: trigger for sub-agent
        // if (String(data.response)?.startsWith(`${va_id}:`)) {
        //   const ids = String(data.response).split(":");
        //   const sub_agent_id = ids[ids.length - 1];
        //   eventSource.close();
        //   await triggerListener(sub_agent_id);
        // }

        if (SSE_SUCCESS_OR_ERROR.includes(String(data.response))) {
          if (String(data.response) === "_ERROR") {
            if (onError) onError();
          }
          eventSource.close();
        }
      });

      eventSource.addEventListener("error", (error) => {
        console.error("EventSource failed:", error);
        if (onError) onError(error);
        eventSource.close();
      });
    },
    []
  );

  const fileIndexing = async ({ prompt, session_id, files }: FileIndexing) => {
    try {
      // Start Indexing
      await CHAT_API.sendWorkflowPrompt({
        prompt,
        workflow_id: WORKFLOWS.FILE_KNOWLEDGE,
        session_id,
        context: {
          tasks: [
            {
              task: "SYSTEM_FILE_KNOWLEDGE",
              order: 1,
              task_config: {
                task_type: "SEMANTIC_SIMILARITY",
                files,
                include_graph: true,
              },
            },
          ],
        },
      });
      await triggerListener({ session_id });
    } catch (error) {
      console.error("Error in file indexing", error);
    }
  };

  return {
    triggerListener,
    fileIndexing,
  };
};
