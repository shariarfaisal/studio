"use client";

import ActionPanel from "./ActionPanel";
import Notes from "./notes";
import NotebookChat from "./chat";

export default function Notebook() {
  return (
    <>
      <Notes />
      <NotebookChat />
      <ActionPanel />
    </>
  );
}
