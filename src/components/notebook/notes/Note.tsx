"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui";
import type { NoteType } from "@/services/models/notebook";
import Markdown from "react-markdown";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogHeader,
  DialogTrigger,
} from "../../ui/dialog";
import { useNotebook } from "../Provider";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { useMutation } from "@tanstack/react-query";
import { notebookService } from "@/services/notebook";
import { useToast } from "@/hooks/use-toast";
import { Edit3 } from "lucide-react";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Heading from "@tiptap/extension-heading";

function NoteTitle({ note }: { note: NoteType }) {
  const { updateNote } = useNotebook();
  const { toast } = useToast();
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState(note.title);
  const { mutate, isPending } = useMutation({
    mutationKey: ["updateNote"],
    mutationFn: notebookService.updateNote,
    onSuccess: (data) => {
      console.log(data);
      updateNote(data);
      setEdit(false);
    },
    onError: (err) => {
      console.log(err);
      toast({
        title: "Error",
        description: err.message,
      });
    },
  });

  const onSubmit = () => {
    mutate({
      id: note.id,
      payload: {
        title: title,
        content: note.content,
      },
    });
  };

  if (edit && note.editable) {
    return (
      <Input
        className="w-[calc(100%-40px)]"
        value={title}
        disabled={isPending}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onSubmit();
          }
        }}
        onChange={(e) => setTitle(e.target.value)}
      />
    );
  }

  return (
    <>
      <CardTitle
        onClick={() => {
          if (note.editable) {
            setEdit(true);
          }
        }}
        className={`w-[calc(100%-40px)] text-lg font-medium ${
          note.editable ? "cursor-pointer hover:opacity-80" : ""
        }`}
      >
        {note.title}
      </CardTitle>
    </>
  );
}

const Note = ({ note, selected }: { note: NoteType; selected: boolean }) => {
  const { toggleSelectNote } = useNotebook();
  const editor = useEditor({
    extensions: [
      StarterKit,
      Document,
      Paragraph,
      Text,
      Heading.configure({
        levels: [1, 2, 3],
      }),
    ],
    content: note.content,
    editable: note.editable,
    autofocus: true,
    injectCSS: false,
    onUpdate: () => {},
  });

  return (
    <Card className="max-h-[300px] overflow-hidden shadow-none border-2 border-gray-200">
      <CardHeader className="w-full bg-background flex flex-row justify-between items-start">
        <div className="w-full flex flex-col">
          {note.editable && (
            <div className="flex gap-2 items-center text-zinc-600 text-sm">
              <Edit3 className="w-4 h-4" />
              <span>Edit Note</span>
            </div>
          )}
          <NoteTitle note={note} />
        </div>
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
            {note.editable ? (
              <EditorContent editor={editor} />
            ) : (
              <Markdown className="text-wrap">{note.content}</Markdown>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </Card>
  );
};

export default Note;
