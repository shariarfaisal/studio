"use client";

import { Plus } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { projectService } from "@/services/project";
import { useRouter } from "next/navigation";

const CreateNew = () => {
  const { push } = useRouter();
  const { mutate } = useMutation({
    mutationFn: projectService.createProject,
    onSuccess: (data) => {
      push(`/notebook/${data.id}`);
    },
    onError: () => {},
  });

  const createNewProject = () => {
    mutate();
  };

  return (
    <button
      onClick={createNewProject}
      className="flex items-center gap-2 rounded-full h-8 px-4 text-sm bg-blue-200 hover:bg-blue-300 transition-all duration-200 ease-in-out"
    >
      <Plus className="w-4 h-4" />
      <span>Create New</span>
    </button>
  );
};

export default CreateNew;
