"use client";

import { ChatMessageType } from "@/services/models/notebook";
import { copyTextToClipboard } from "@/utils";
import Markdown from "react-markdown";

const Chats = ({ data = [] }: { data: ChatMessageType[] }) => {
  return (
    <div className="w-full flex flex-col gap-5 py-3">
      {data.map((m) => {
        if (m.role === "user") {
          return (
            <div key={m.id} className="flex justify-end">
              <div className="font-medium bg-slate-200 dark:bg-slate-900 dark:text-white px-3 py-2 rounded-xl lg:max-w-[75%]">
                {m.content}
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
                <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  Assistant
                </div>
              </div>
              <div className="w-full pl-12 prose dark:prose-invert dark:!text-light lg:max-w-[75%]">
                <Markdown>{m.content}</Markdown>

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
      <div className="w-full pl-12">
        <div className="loading text-slate-500 dark:text-slate-400">
          <span className="text-title">&#8226;</span>
          <span className="text-title">&#8226;</span>
          <span className="text-title">&#8226;</span>
        </div>
      </div>
    </div>
  );
};

export default Chats;
