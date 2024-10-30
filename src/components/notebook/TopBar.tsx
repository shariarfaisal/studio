"use client";

import { Button } from "../ui/button";
import { Check, Plus, Trash2, X } from "lucide-react";

export default function NotebookTopBar() {
  return (
    <div className="sticky top-16 left-0 z-10 px-4 py-2 bg-white max-w-full overflow-x-auto no-scrollbar shadow-sm lg:shadow-none">
      <div className="w-full flex items-center gap-2 ">
        <Button variant="ghost">
          <Plus />
          <span>Add note</span>
        </Button>
        <Button variant="destructive">
          <Trash2 />
          <span>Delete note</span>
        </Button>
        <Button variant="ghost">
          <Check />
          <span>Select all</span>
        </Button>
        <Button variant="ghost">
          <X />
          <span>Deselect all</span>
        </Button>
      </div>
    </div>
  );
}
