"use client";

import { Dot, Edit, Trash2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui";
import { useQuery } from "@tanstack/react-query";
import { projectService } from "@/services/project";
import { DotsVerticalIcon } from "@radix-ui/react-icons";
import CreateNew from "./CreateNew";
import Link from "next/link";
import { ProjectType } from "@/services/models/project";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { useCallback, useState } from "react";
import { useProjectStore } from "@/store";
import { Project } from "@/types";

const ProjectCard = ({ project }: { project: Project }) => {
  const { push } = useRouter();
  const { setProjectStore } = useProjectStore();
  const [menuOpen, setMenuOpen] = useState(false);

  const deleteProject = useCallback(() => {
    setProjectStore(({ projects }) => ({
      projects: projects.filter((p) => p.id !== project.id),
    }));
  }, [project.id, setProjectStore]);

  return (
    <div
      onClick={() => {
        if (!menuOpen) {
          push(`/projects/${project.id}`);
        }
      }}
      className="border min-h-[12rem] rounded-xl p-4 flex flex-col bg-project-card lg:max-w-[300px] relative cursor-pointer"
    >
      <DropdownMenu open={menuOpen} onOpenChange={setMenuOpen}>
        <DropdownMenuTrigger className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/30 cursor-pointer">
          <DotsVerticalIcon />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[7rem] border border-gray-300 rounded-xl bg-white text-sm p-3 shadow-xl">
          <DropdownMenuItem className="flex gap-2 rounded-xl px-2 py-1.5 hover:bg-gray-100 ">
            <Edit className="w-4 h-4" />
            <span>Edit</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            className="flex gap-2 rounded-xl px-2 py-1.5 hover:bg-gray-100"
            onClick={deleteProject}
          >
            <Trash2 className="w-4 h-4" />
            <span>Delete</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <div className="mt-auto space-y-2">
        <Link
          href={`/projects/${project.id}`}
          className="text-lg font-semibold hover:underline underline-offset-4"
        >
          {project.name}
        </Link>
        <div className="text-xs flex items-center gap-2">
          <time>
            {new Date(project.created_at).toLocaleString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </time>
          <span>
            <Dot />
          </span>
          <span>
            {project.sources.length}
            {project.sources.length === 1 ? " Source" : " Sources"}
          </span>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [sortBy, setSortBy] = useState("mostRecent");

  const { projects } = useProjectStore();

  // const { data, isLoading } = useQuery({
  //   queryKey: ["projects"],
  //   queryFn: projectService.getProjects,
  // });

  return (
    <>
      <div className="w-full flex justify-between items-center border-t min-h-16 py-3">
        <CreateNew />

        <div>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[120px] rounded-xl">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="mostRecent">Most Recent</SelectItem>
              <SelectItem value="title">Title</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-auto-70 gap-4 ">
        {projects?.map((project) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </div>
    </>
  );
};

export default Projects;
