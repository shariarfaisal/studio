import { Project } from "@/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ProjectProperties {
  projects: Project[];
}
interface ProjectStore extends ProjectProperties {
  setProjectStore: (
    updater:
      | Partial<ProjectProperties>
      | ((prevState: ProjectProperties) => Partial<ProjectProperties>)
  ) => void;
  resetProjectStore: () => void;
}

export const useProjectStore = create(
  persist<ProjectStore>(
    (set) => ({
      projects: [],
      setProjectStore: (updater) => {
        set((state) => ({
          ...state,
          ...(typeof updater === "function" ? updater(state) : updater),
        }));
      },
      resetProjectStore: () =>
        set({
          projects: [],
        }),
    }),
    { name: "notebook-project-store" }
  )
);
