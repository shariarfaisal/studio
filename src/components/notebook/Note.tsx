"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { NoteType } from "@/services/models/notebook";
import Markdown from "react-markdown";
import { Checkbox } from "../ui/checkbox";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogHeader,
  DialogTrigger,
} from "../ui/dialog";

export default function Note({ note }: { note: NoteType }) {
  return (
    <Card className="max-h-[300px] overflow-hidden shadow-none border-2 border-gray-200">
      <CardHeader className="w-full bg-white flex flex-row justify-between items-center">
        <CardTitle className="text-lg font-medium">{note.title}</CardTitle>
        <Checkbox />
      </CardHeader>

      <Dialog>
        <DialogTrigger asChild>
          <CardContent className="text-sm partial-text max-h-[200px] cursor-pointer">
            <Markdown>{note.content}</Markdown>
          </CardContent>
        </DialogTrigger>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle>{note.title}</DialogTitle>
          </DialogHeader>
          <div className="text-sm">
            <Markdown>{note.content}</Markdown>
          </div>
        </DialogContent>
      </Dialog>
    </Card>
  );
}
