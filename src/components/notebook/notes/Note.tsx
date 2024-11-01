"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { NoteType } from "@/services/models/notebook";
import Markdown from "react-markdown";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogHeader,
  DialogTrigger,
} from "../../ui/dialog";
import { useNotebook } from "../Provider";

export default function Note({
  note,
  selected,
}: {
  note: NoteType;
  selected: boolean;
}) {
  const { toggleSelectNote } = useNotebook();
  return (
    <Card className="max-h-[300px] overflow-hidden shadow-none border-2 border-gray-200">
      <CardHeader className="w-full bg-white flex flex-row justify-between items-center">
        <CardTitle className="text-lg font-medium">{note.title}</CardTitle>
        <input
          id={`note-${note.id}`}
          style={{
            width: "20px",
            height: "20px",
          }}
          type="checkbox"
          onChange={(e) => {
            toggleSelectNote(note.id, e.target.checked);
          }}
          checked={selected}
        />
      </CardHeader>

      <Dialog>
        <DialogTrigger asChild>
          <CardContent className="text-sm partial-text h-[200px] cursor-pointer">
            <Markdown>{note.content}</Markdown>
          </CardContent>
        </DialogTrigger>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle>{note.title}</DialogTitle>
          </DialogHeader>
          <div className="text-sm min-h-[200px] max-h-[400px] overflow-x-hidden scroll-y text-wrap">
            <Markdown className="text-wrap">{note.content}</Markdown>
          </div>
        </DialogContent>
      </Dialog>
    </Card>
  );
}
