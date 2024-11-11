"use client";

import { Button } from "@/components/ui/button";
import { SidebarMenu, SidebarMenuItem } from "@/components/ui/sidebar";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { ChevronDown, ChevronUp, HistoryIcon } from "lucide-react";
import { useState } from "react";

const ChatHistory = () => {
  const [open, setOpen] = useState(false);
  const data = [
    {
      id: 1,
      title: "Collection follow up questions",
    },
    {
      id: 2,
      title: "Greetings and wellbeing",
    },
    {
      id: 3,
      title: "Account deletion",
    },
    {
      id: 4,
      title: "Assembly language error",
    },
  ];

  return (
    <div className="z-1 bg-background p-2.5 px-1 pr-1 rounded-lg shadow-md">
      <div
        className="sticky bg-background z-1 top-0 left-0 w-full text-sm font-semibold p-2.5 flex justify-between items-center cursor-pointer"
        onClick={() => setOpen((o) => !o)}
      >
        <div className="flex gap-2 items-center">
          <HistoryIcon className="w-4 h-4" />
          <h3>Chat History</h3>
        </div>
        <div>
          {open ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </div>
      </div>
      {open && (
        <SidebarMenu className="max-h-[300px] scroll-y pr-1 py-2 border-t border-slate-200">
          {data.map((item, i) => {
            return (
              <SidebarMenuItem
                key={item.id}
                className="flex justify-between items-center hover:bg-slate-200 rounded-xl px-2 py-2 cursor-pointer transition-all duration-150 ease-in-out"
              >
                <div className="w-full text-base">{item.title}</div>
                <Button variant="ghost" className="w-7 h-7">
                  <DotsHorizontalIcon />
                </Button>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      )}
    </div>
  );
};

export default ChatHistory;
