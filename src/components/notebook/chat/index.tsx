"use client";

import { Button } from "@/components/ui";
import { notebookService } from "@/services/notebook";
import { useQuery } from "@tanstack/react-query";
import { Edit, X } from "lucide-react";
import Chats from "./chats";
import { useNotebook } from "../NotebookProvider";

const NotebookChat = ({ show }: { show: boolean }) => {
  const { toggleChats } = useNotebook();
  const { data } = useQuery({
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
        <div className="flex items-center gap-2">
          <h2>Chat</h2>
          <Button variant="ghost" className="w-8 h-8">
            <Edit />
          </Button>
        </div>
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
      <div className="h-[calc(100vh-180px)]">
        <div className="p-4">
          <Chats />
        </div>
      </div>
    </div>
  );
};

export default NotebookChat;
