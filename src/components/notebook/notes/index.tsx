"use client";

import NotebookTopBar from "./top-bar";
import { useNotebook } from "../NotebookProvider";
import { Project } from "@/types";
import { Note } from "./note";

type INotesProps = {
  show: boolean;
  project: Project;
  isLoading: boolean;
};
const Notes = ({ isLoading, project, show }: INotesProps) => {
  const {
    notes: { data: notesData, selected },
    setNotes,
  } = useNotebook();

  return (
    <div
      style={{
        display: show ? "block" : "none",
      }}
    >
      <NotebookTopBar {...{ project }} />
      <div className="p-4 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-h-[calc(100vh-180px)]">
        {isLoading && <div>Loading...</div>}
        {project?.topics?.map((note) => (
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
