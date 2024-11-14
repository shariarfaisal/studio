import { Project } from '@/types';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

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
  getProjectById: (id: string) => Project | undefined;
  getAllProjects: () => Project[];
}

export const useProjectStore = create(
  persist<ProjectStore>(
    (set, get) => ({
      projects: [],
      setProjectStore: updater => {
        set(state => ({
          ...state,
          ...(typeof updater === 'function' ? updater(state) : updater),
        }));
      },
      resetProjectStore: () =>
        set({
          projects: [],
        }),
      getProjectById: (id: string): Project | undefined => {
        const { projects } = get();
        return projects.find(project => project.id === id);
      },
      getAllProjects: () => {
        const { projects } = get();
        return projects;
      },
    }),
    { name: 'notebook-project-store' }
  )
);
