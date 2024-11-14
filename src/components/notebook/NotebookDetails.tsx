"use client";

import Notes from "./notes";
import NotebookChat from "./chat";
import { useNotebook } from "./NotebookProvider";
import SourceDetails from "./source-details";
import { useParams } from "next/navigation";
import { useProjectStore } from "@/store";
import { ActionPanel } from "./action-panel";
import { useEffect, useState } from "react";
import { Project } from "@/types";

export const Notebook = () => {
  const {
    tab: { active },
    sources: { openSourceDetails },
  } = useNotebook();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const { getProjectById } = useProjectStore();
  const project = getProjectById(id as string);

  useEffect(() => {
    if (project) {
      setIsLoading(false);
    }
  }, [project]);

  return (
    <>
      <Notes
        show={active === "notes" && !openSourceDetails}
        {...{ project: project as Project, isLoading }}
      />
      <NotebookChat
        show={active === "chats" && !openSourceDetails}
        {...{ project, isLoading }}
      />
      {openSourceDetails && <SourceDetails />}
      <ActionPanel />
    </>
  );
};
