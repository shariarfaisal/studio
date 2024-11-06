"use client";

import ActionPanel from "./ActionPanel";
import Notes from "./notes";
import NotebookChat from "./chat";
import { useNotebook } from "./Provider";
import SourceDetails from "./SourceDetails";

export default function Notebook() {
  const {
    tab: { active },
    sources: { openSourceDetails },
  } = useNotebook();
  return (
    <>
      <Notes show={active === "notes" && !openSourceDetails} />
      <NotebookChat show={active === "chats" && !openSourceDetails} />
      {openSourceDetails && <SourceDetails />}
      <ActionPanel />
    </>
  );
}
