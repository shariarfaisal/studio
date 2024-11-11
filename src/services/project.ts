import { projects } from "@/data/projects";
import { ProjectType } from "./models/project";

export const projectService = {
  getProjects: async (): Promise<ProjectType[]> => {
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve(projects);
      }, 500);
    });
  },
  createProject: async (): Promise<ProjectType> => {
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: new Date().toString(),
          title: "New Project",
          sourceCount: 0,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        });
      }, 500);
    });
  },
};
