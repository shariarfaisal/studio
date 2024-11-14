"use client";

import { Button } from "@/components/ui";
import { notebookService } from "@/services/notebook";
import { useQuery } from "@tanstack/react-query";
import { Edit, X } from "lucide-react";
import { useNotebook } from "../provider";
import Chats from "./chats";

const InitialDisplay = () => {
  const questions = [
    {
      id: 1,
      question: "Tìm kiếm tài khoản bên quan hệ đối tác",
    },
    {
      id: 2,
      question: "Có những tỷ giá hối đoái nào hiện tại?",
    },
    {
      id: 3,
      question: "Có những thông tin gì liên quan tới sửa chữa ôtô?",
    },
  ];
  return (
    <div className="flex justify-center items-center">
      <div className="w-full xl:max-w-[75%] flex flex-col justify-center items-center">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-semibold">
            Hôm nay tôi có thể giúp gì cho bạn?
          </h2>
          <p className="text-sm text-gray-500">
            Giao diện trả lời tùy biến câu lệnh
          </p>
        </div>
        <div className="p-4 flex flex-col sm:flex-row  gap-4">
          {questions.map((question, i) => (
            <div
              key={question.id}
              className={`hover:shadow-lg transition-all duration-150 ease-in-out cursor-pointer border-2 dark:bg-slate-900 dark:text-white px-3 py-2 rounded-xl md:min-h-[200px] flex items-center justify-center text-center ${
                i === 1 ? "md:mt-5" : ""
              }`}
            >
              <p>{question.question}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const NotebookChat = ({ show }: { show: boolean }) => {
  const { toggleChats } = useNotebook();
  const { data } = useQuery({
    queryKey: ["chats"],
    queryFn: notebookService.getChats,
  });
  console.log("🚀 ~ NotebookChat ~ data:", data);

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
        <div className="p-4">{data && <Chats data={data} />}</div>
        {/* <InitialDisplay /> */}
      </div>
    </div>
  );
};

export default NotebookChat;
