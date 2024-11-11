"use client";
import Note from "./Note";
import { useQuery } from "@tanstack/react-query";
import { notebookService } from "@/services/notebook";
import NotebookTopBar from "./TopBar";
import { useNotebook } from "../Provider";
import { useEffect } from "react";

const Notes = ({ show }: { show: boolean }) => {
  const {
    notes: { data: notesData, selected },
    setNotes,
  } = useNotebook();
  const { data, isLoading } = useQuery({
    queryKey: ["notes"],
    queryFn: notebookService.getNotes,
  });

  useEffect(() => {
    if (data) {
      setNotes(data);
    }
  }, [data]);

  return (
    <div
      style={{
        display: show ? "block" : "none",
      }}
    >
      <NotebookTopBar />
      <div className="p-4 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-h-[calc(100vh-180px)]">
        {isLoading && <div>Loading...</div>}
        {notesData.map((note) => (
          <Note
            key={note.id}
            note={note}
            selected={selected.includes(note.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Notes;
