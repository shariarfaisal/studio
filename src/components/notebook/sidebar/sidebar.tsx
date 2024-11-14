"use client";
import { FileText } from "lucide-react";
import { SidebarMenu, SidebarMenuItem } from "../../ui/sidebar";
import { useQuery } from "@tanstack/react-query";
import { notebookService } from "@/services/notebook";
import { useNotebook } from "../NotebookProvider";
import { useEffect } from "react";
import ContentLoader from "react-content-loader";
import ChatHistory from "./chat-history";
import { AddSource } from "./add-source";

function LoadingItems() {
  return (
    <ContentLoader
      viewBox="0 0 230 300" // Adjusted to fit all items
      width="100%"
      height="auto"
      backgroundColor="#c3c3c3"
      foregroundColor="#fcfcfc"
      className=""
    >
      <rect x="0" y="15" rx="3" ry="3" width="20" height="20" />
      <rect x="30" y="15" rx="3" ry="3" width="150" height="20" />
      <rect x="200" y="15" rx="3" ry="3" width="20" height="20" />

      <rect x="0" y="50" rx="3" ry="3" width="20" height="20" />
      <rect x="30" y="50" rx="3" ry="3" width="150" height="20" />
      <rect x="200" y="50" rx="3" ry="3" width="20" height="20" />

      <rect x="0" y="85" rx="3" ry="3" width="20" height="20" />
      <rect x="30" y="85" rx="3" ry="3" width="150" height="20" />
      <rect x="200" y="85" rx="3" ry="3" width="20" height="20" />

      <rect x="0" y="120" rx="3" ry="3" width="20" height="20" />
      <rect x="30" y="120" rx="3" ry="3" width="150" height="20" />
      <rect x="200" y="120" rx="3" ry="3" width="20" height="20" />
    </ContentLoader>
  );
}

export default function NotebookSidebar() {
  const {
    sources,
    toggleSource,
    selectAllSources,
    deselectAllSources,
    isAllSourcesSelected,
    setSources,
    openSourceDetails,
  } = useNotebook();
  const { data, isLoading } = useQuery({
    queryKey: ["sources"],
    queryFn: notebookService.getSources,
  });

  // useEffect(() => {
  //   if (data) {
  //     setSources(data);
  //   }
  // }, [data]);

  return (
    <div className="p-2.5 flex flex-col gap-3">
      <ChatHistory />
      <div className="flex items-center justify-between p-2.5 bg-background rounded-lg shadow-md">
        <h3 className="text-base font-semibold">Add Source</h3>
        <AddSource />
      </div>
      <SidebarMenu className="bg-background p-2.5 pr-1 rounded-lg shadow-md">
        <div className="flex items-center justify-between pr-2">
          <div>
            <h3 className="font-semibold">Sources</h3>
            <p className="text-gray-500">
              {sources.selected.length}/{sources.data.length} selected
            </p>
          </div>
          <div>
            <input
              type="checkbox"
              className="w-4 h-4 cursor-pointer"
              checked={isAllSourcesSelected}
              onChange={(e) => {
                if (e.target.checked) {
                  selectAllSources();
                } else {
                  deselectAllSources();
                }
              }}
            />
          </div>
        </div>
        <div className=" flex flex-col gap-2 max-h-[15rem] scroll-y pr-2">
          {data?.map((item) => (
            <SidebarMenuItem
              key={item.id}
              onClick={() => openSourceDetails(item)}
              className="rounded-xl h-12 flex justify-between items-center transition-all duration-150 ease-in-out"
            >
              <div className="h-full flex items-center gap-2 cursor-pointer md:text-base font-medium hover:opacity-80 hover:underline">
                <FileText className="w-4 h-4" />
                <span className="">{item.file.filename}</span>
              </div>
              <input
                type="checkbox"
                checked={sources.selected.includes(item.id)}
                className="w-4 h-4 cursor-pointer"
                onChange={() => toggleSource(item.id)}
              />
            </SidebarMenuItem>
          ))}
        </div>
        {isLoading && <LoadingItems />}
      </SidebarMenu>
    </div>
  );
}
