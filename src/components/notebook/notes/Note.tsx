"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui";
import Markdown from "react-markdown";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogHeader,
  DialogTrigger,
} from "../../ui/dialog";
import { useNotebook } from "../provider";
import { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Edit3 } from "lucide-react";
import { Topic } from "@/types";
import { useProjectStore } from "@/store";
import { useParams } from "next/navigation";
import { useEditor } from "@/hooks";
import { Editor } from "./editor";

function NoteTitle({ note, editable }: { note: Topic; editable: boolean }) {
  const { id } = useParams();
  const { updateNote } = useNotebook();
  const { toast } = useToast();
  const [edit, setEdit] = useState(false);
  const [isPending, setIsLoading] = useState(false);
  const [title, setTitle] = useState(note.name);
  const { setProjectStore } = useProjectStore();

  // const { mutate, isPending } = useMutation({
  //   mutationKey: ["updateNote"],
  //   mutationFn: notebookService.updateNote,
  //   onSuccess: (data) => {
  //     console.log(data);
  //     updateNote(data);
  //     setEdit(false);
  //   },
  //   onError: (err) => {
  //     console.log(err);
  //     toast({
  //       title: "Error",
  //       description: err.message,
  //     });
  //   },
  // });

  const onSubmit = () => {
    setIsLoading(true);
    setProjectStore((prev) => {
      const updatedProjects = prev.projects.map((proj) => {
        if (proj.id === (id as string)) {
          const updatedTopics = proj.topics.map((topic) =>
            topic.id === note.id
              ? { ...topic, name: title, data: note.data }
              : topic
          );
          return {
            ...proj,
            topics: updatedTopics,
          };
        }
        return proj;
      });

      return {
        ...prev,
        projects: updatedProjects,
      };
    });

    setIsLoading(false);
    setEdit(false);
  };

  if (edit && editable) {
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
          if (editable) {
            setEdit(true);
          }
        }}
        className={`w-[calc(100%-40px)] text-lg font-medium ${
          editable ? "cursor-pointer hover:opacity-80" : ""
        }`}
      >
        {note.name}
      </CardTitle>
    </>
  );
}

type NoteProps = {
  note: Topic;
  selected: boolean;
};

export const Note = ({ note, selected }: NoteProps) => {
  const { toggleSelectNote } = useNotebook();
  const { id } = useParams();
  const { setProjectStore } = useProjectStore();
  const [editable, setEditable] = useState(true);
  const [value, setValue] = useState(note.data);
  const handleBlur = () => {
    setProjectStore((prev) => {
      const updatedProjects = prev.projects.map((proj) => {
        if (proj.id === (id as string)) {
          const updatedTopics = proj.topics.map((topic) =>
            topic.id === note.id ? { ...topic, data: value } : topic
          );
          return {
            ...proj,
            topics: updatedTopics,
          };
        }
        return proj;
      });

      return {
        ...prev,
        projects: updatedProjects,
      };
    });
  };

  return (
    <Card className="max-h-[300px] overflow-hidden shadow-none border-2 border-gray-200">
      <CardHeader className="w-full bg-background flex flex-row justify-between items-start">
        <div className="w-full flex flex-col">
          {note && editable && (
            <div className="flex gap-2 items-center text-zinc-600 text-sm">
              <Edit3 className="w-4 h-4" />
              <span>Edit Note</span>
            </div>
          )}
          <NoteTitle note={note} editable={editable} />
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
      <Dialog modal={true}>
        <DialogTrigger asChild>
          <CardContent className="text-sm partial-text min-h-[200px] cursor-pointer">
            <div dangerouslySetInnerHTML={{ __html: note.data }} />
          </CardContent>
        </DialogTrigger>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle>{note.name}</DialogTitle>
          </DialogHeader>
          <div>
            {editable ? (
              <Editor value={value} onChange={setValue} onBlur={handleBlur} />
            ) : (
              <div className="text-sm  min-h-[200px] max-h-[400px] overflow-x-hidden scroll-y text-wrap">
                <div dangerouslySetInnerHTML={{ __html: note.data }} />
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </Card>
  );
};
