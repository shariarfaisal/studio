"use client";

import { SendHorizonal } from "lucide-react";
import { Button } from "../ui/button";
import { useNotebook } from "./provider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui";
import { useState } from "react";
import { CHAT_API } from "@/services";
import { useParams } from "next/navigation";
import { WORKFLOWS } from "@/configs";
import { useWorkflow } from "@/hooks";
import { useChatStore } from "@/store";
import { SESSION_ASSETS } from "@/types";
import { set, uniqBy } from "lodash";
import { LLM_THINKING_MODE } from "@/helpers";

export const ActionPanel = () => {
  const [message, setMessage] = useState("");
  const { id } = useParams();
  const { triggerListener } = useWorkflow();
  const { setChatStore } = useChatStore();

  const {
    setActiveTab,
    tab: { active },
  } = useNotebook();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!message) return;

    try {
      await CHAT_API.sendWorkflowPrompt({
        prompt: message,
        session_id: id as string,
        workflow_id: WORKFLOWS.FILE_KNOWLEDGE,
      });

      setMessage("");

      setChatStore({ typingResponse: "## " + LLM_THINKING_MODE });
      triggerListener({
        session_id: id as string,
        onTypingResponse: (message) => {
          setChatStore({ typingResponse: message });
        },
        getEachRoleData: ({ conversation }) => {
          if (
            conversation.id > 0 &&
            SESSION_ASSETS.includes(conversation.role)
          ) {
            setChatStore(({ conversations }) => ({
              conversations: uniqBy([...conversations, conversation], "id"),
            }));
          }
        },
        onCompleted: () => {
          setChatStore({ typingResponse: "" });
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="sticky bg-background box-border left-0 bottom-0 w-full">
      <div className="bg-background w-full px-4 py-3 flex flex-col gap-3 rounded-t-3xl shadow-[0px_-1px_20px_rgba(0,0,0,0.2)]">
        <div className="w-full  flex items-center gap-2 justify-center">
          <div>
            <Select value={active} onValueChange={setActiveTab}>
              <SelectTrigger className="w-[80px] rounded-xl">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="notes">Notes</SelectItem>
                <SelectItem value="chats">Chats</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <form
            {...{ onSubmit }}
            className="relative max-w-2xl w-full h-12 flex items-center bg-blue-50 border border-blue-300 rounded-full"
          >
            <input
              className="w-full px-5 py-3 bg-transparent border-none outline-none focus:border-none focus:outline-none rounded-full"
              placeholder="Enter text here"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button
              variant="ghost"
              className="absolute right-3 top-2 text-blue-600 hover:bg-blue-400 hover:text-white rounded-full w-8 h-8 flex items-center justify-center"
              type="submit"
            >
              <SendHorizonal className="w-6 h-6" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
