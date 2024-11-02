"use client";

import { ArrowRightIcon } from "lucide-react";
import { Button } from "../ui/button";
import { useNotebook } from "./Provider";

export default function ActionPanel() {
  const {
    toggleChats,
    tab: { active },
  } = useNotebook();
  return (
    <div className="sticky bg-background box-border left-0 bottom-0 w-full min-h-[80px]">
      <div className="bg-background w-full px-4 py-2 flex flex-col gap-3 rounded-xl">
        <div className="w-full  flex items-center gap-2 justify-center">
          <div>
            <Button
              onClick={() => {
                toggleChats();
              }}
              variant="ghost"
            >
              {active === "chats" ? "Close Chats" : "Open Chats"}
            </Button>
          </div>
          <div className="relative max-w-2xl w-full h-12 flex items-center border border-zinc-200 rounded-full shadow-[0px_-1px_20px_rgba(0,0,0,0.2)]">
            <input
              className="w-full px-5 py-2 bg-transparent border-none outline-none focus:border-none focus:outline-none rounded-full "
              placeholder="Enter text here"
            />
            <Button
              variant="ghost"
              className="absolute right-3 top-2 bg-zinc-500 text-white hover:bg-zinc-700 hover:text-white rounded-full w-8 h-8 flex items-center justify-center"
            >
              <ArrowRightIcon />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
