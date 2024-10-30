"use client";

import { ArrowRightIcon } from "lucide-react";
import { Button } from "../ui/button";
import Prompts from "./Prompts";

export default function ActionPanel() {
  return (
    <div className="sticky bg-white box-border left-0 bottom-0 w-full">
      <div className="bg-white w-full px-4 py-2 flex flex-col gap-3 rounded-t-3xl shadow-[0px_-1px_20px_rgba(0,0,0,0.2)]">
        <Prompts />
        <div className="w-full  flex items-center gap-2 justify-center">
          <div>
            <Button variant="ghost">Chat</Button>
          </div>
          <div className="relative max-w-2xl w-full h-14 flex items-center bg-zinc-100 border border-zinc-200 rounded-full">
            <input
              className="w-full px-5 py-3 bg-transparent border-none outline-none focus:border-none focus:outline-none rounded-full"
              placeholder="Enter text here"
            />
            <Button
              variant="ghost"
              className="absolute right-3 top-2 bg-zinc-500 text-white hover:bg-zinc-700 hover:text-white rounded-full w-10 h-10 flex items-center justify-center"
            >
              <ArrowRightIcon />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
