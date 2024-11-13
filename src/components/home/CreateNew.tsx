"use client";

import { Plus } from "lucide-react";
import { nanoid } from "nanoid";
import { useRouter } from "next/navigation";
import { useProjectStore } from "@/store";
import { Status } from "@/types";

const CreateNew = () => {
  const { push } = useRouter();
  const { setProjectStore } = useProjectStore();
  // const { mutate } = useMutation({
  //   mutationFn: projectService.createProject,
  //   onSuccess: (data) => {
  //     push(`/notebook/${data.id}`);
  //   },
  //   onError: () => {},
  // });

  const createNewProject = () => {
    const project = {
      id: nanoid(),
      configs: {},
      created_at: new Date(),
      name: "New Project",
      sources: [],
      status: Status.CURRENT,
      system_prompt: "",
      topics: [],
      updated_at: new Date(),
    };
    // mutate();
    setProjectStore(({ projects }) => ({
      projects: [...projects, project],
    }));
    push(`/notebook/${project.id}`);
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
