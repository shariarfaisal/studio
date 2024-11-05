"use client";

import { Button } from "@/components/ui/button";
import { notebookService } from "@/services/notebook";
import { copyTextToClipboard } from "@/utils";
import { useQuery } from "@tanstack/react-query";
import { X } from "lucide-react";
import Markdown from "react-markdown";
import { useNotebook } from "../Provider";

export default function NotebookChat({ show }: { show: boolean }) {
  const { toggleChats } = useNotebook();
  const { data, isLoading } = useQuery({
    queryKey: ["chats"],
    queryFn: notebookService.getChats,
  });
  return (
    <div
      style={{
        display: show ? "block" : "none",
      }}
    >
      <div className="sticky top-16 left-0 z-10 px-4 py-2 bg-background max-w-full overflow-x-auto no-scrollbar shadow-sm lg:shadow-none flex justify-between items-center">
        <h2>Chat</h2>
        <div>
          <Button
            size="sm"
            variant="destructive"
            className="w-8 h-8 rounded-full"
            onClick={() => {
              toggleChats();
            }}
          >
            <X />
          </Button>
        </div>
      </div>
      <div className="p-4">
        {isLoading && <div>Loading...</div>}
        <div className="w-full flex flex-col gap-5 py-3">
          {data?.map((m) => {
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
          {/* <div className="w-full pl-12">
            <div className="loading text-slate-500 dark:text-slate-400">
              <span className="text-title">&#8226;</span>
              <span className="text-title">&#8226;</span>
              <span className="text-title">&#8226;</span>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
