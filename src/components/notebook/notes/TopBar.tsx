"use client";

import { Button } from "../../ui/button";
import { Check, LoaderIcon, Plus, Trash2, X } from "lucide-react";
import { useNotebook } from "../Provider";
import { useMutation } from "@tanstack/react-query";
import { notebookService } from "@/services/notebook";
import Popconfirm from "@/components/ui/popconfirm";

export default function NotebookTopBar() {
  const {
    selectAllNote,
    deselectAllNote,
    isAllNotesSelected,
    notes: { selected },
    addNewNote,
    deleteNotes,
  } = useNotebook();

  const { mutate, isPending } = useMutation({
    mutationKey: ["addNote"],
    mutationFn: notebookService.addNote,
    onSuccess: (data) => {
      if (data) {
        addNewNote(data);
      }
    },
  });

  const { mutate: deleteMutate, isPending: deleteIsPending } = useMutation({
    mutationKey: ["deleteNotes"],
    mutationFn: notebookService.deleteNotes,
    onSuccess: (data) => {
      if (data) {
        deleteNotes(data);
      }
    },
  });

  const addNoteHandler = () => {
    mutate();
  };

  const deleteNotesHandler = () => {
    deleteMutate({
      ids: selected,
      notebookId: "",
    });
  };

  return (
    <div className="sticky top-16 left-0 z-10 px-4 py-2 bg-white max-w-full overflow-x-auto no-scrollbar shadow-sm lg:shadow-none">
      <div className="w-full flex items-center gap-2 ">
        <Button onClick={addNoteHandler} variant="ghost">
          {isPending ? <LoaderIcon className="animate-spin" /> : <Plus />}
          <span>Add note</span>
        </Button>
        {selected.length !== 0 && (
          <Popconfirm title="Are you sure?" onConfirm={deleteNotesHandler}>
            <Button variant="destructive">
              {deleteIsPending ? (
                <LoaderIcon className="animate-spin" />
              ) : (
                <Trash2 />
              )}
              <span>Delete notes</span>
            </Button>
          </Popconfirm>
        )}
        {!isAllNotesSelected && (
          <Button onClick={selectAllNote} variant="ghost">
            <Check />
            <span>Select all</span>
          </Button>
        )}
        {selected.length !== 0 && (
          <Button onClick={deselectAllNote} variant="ghost">
            <X />
            <span>Deselect all</span>
          </Button>
        )}
      </div>
    </div>
  );
}
