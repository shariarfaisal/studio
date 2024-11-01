"use client";

import { notebookService } from "@/services/notebook";
import { useQuery } from "@tanstack/react-query";

export default function Prompts() {
  const { data, isLoading } = useQuery({
    queryKey: ["prompts"],
    queryFn: notebookService.getPrompts,
  });

  return (
    <div className="flex gap-2 items-center p-3 flex-row overflow-x-auto no-scrollbar">
      {isLoading && <div>Loading...</div>}
      {data?.map((prompt) => {
        return (
          <div key={prompt.id}>
            <p className="whitespace-nowrap text-sm px-3 py-2 rounded-2xl bg-zinc-200 hover:bg-zinc-300 transition-all duration-200 ease-in-out cursor-pointer">
              {prompt.title}
            </p>
          </div>
        );
      })}
    </div>
  );
}
