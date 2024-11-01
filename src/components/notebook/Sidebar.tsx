"use client";
import { PlusSquare } from "lucide-react";
import { Button } from "../ui/button";
import { SidebarMenu, SidebarMenuItem } from "../ui/sidebar";
import { Checkbox } from "../ui/checkbox";
import { useQuery } from "@tanstack/react-query";
import { notebookService } from "@/services/notebook";

export default function NotebookSidebar() {
  const { data, isLoading } = useQuery({
    queryKey: ["sources"],
    queryFn: notebookService.getSources,
  });

  return (
    <div>
      <div className="flex items-center justify-between p-3">
        <h3 className="text-base font-semibold">Sources</h3>
        <Button variant="ghost" className="w-8 h-8 [&>svg]:!size-6">
          <PlusSquare />
        </Button>
      </div>
      <SidebarMenu className="px-2">
        {isLoading && <div>Loading...</div>}
        {data?.map((item) => (
          <SidebarMenuItem
            key={item.title}
            className="hover:bg-zinc-200 rounded-xl px-3 h-12 flex justify-between items-center"
          >
            <label
              htmlFor={`id-${item.id}`}
              className=" w-full h-full flex items-center cursor-pointer md:text-base font-medium text-zinc-600"
            >
              {item.title}
            </label>
            <Checkbox id={`id-${item.id}`} />
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </div>
  );
}
