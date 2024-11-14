"use client";

import { ChatMessageType } from "@/services/models/notebook";
import { useChatStore } from "@/store";
import { copyTextToClipboard } from "@/utils";
import "highlight.js/styles/github.css"; // Import a highlight.js style
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeMinifyWhitespace from "rehype-minify-whitespace";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { RenderMessageContent } from "@/components";

const Chats = () => {
  const { conversations, typingResponse } = useChatStore();

  return (
    <div className="w-full flex flex-col gap-5 py-3">
      {conversations.map((m) => {
        if (m.role === "user") {
          return (
            <div key={m.id} className="flex justify-end">
              <div className="font-medium bg-slate-200 dark:bg-slate-900 dark:text-white px-3 py-2 rounded-xl lg:max-w-[75%]">
                <RenderMessageContent conversation={m} />
              </div>
            </div>
          );
        }

        return (
          <div key={m.id} className="flex gap-2">
            <div className="w-full flex flex-col gap-2">
              <div className="w-full flex items-center gap-2">
                <div className="w-9">
                  <i className="tubeOnAI-logo text-2xl"></i>
                </div>
                <div className="font-bold text-gray-500 dark:text-gray-400">
                  Assistant
                </div>
              </div>
              <div className="w-full pl-12 prose dark:prose-invert dark:!text-light lg:max-w-[75%]">
                <RenderMessageContent conversation={m} />
                <div className="flex items-center gap-3 tracking-wide">
                  <div
                    onClick={() => copyTextToClipboard(m.content)}
                    className="text-xl"
                  >
                    <i className="tubeOnAI-copy text-black hover:text-slate-600 dark:text-slate-50 dark:hover:text-slate-200 transition-all duration-200 ease-in-out cursor-pointer"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Generating response... */}
      {typingResponse && (
        <div className="w-full pl-12">
          <Markdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw, rehypeMinifyWhitespace, rehypeHighlight]}
          >
            {typingResponse}
          </Markdown>
          <div className="loading text-slate-500 dark:text-slate-400">
            <span className="text-title">&#8226;</span>
            <span className="text-title">&#8226;</span>
            <span className="text-title">&#8226;</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chats;
