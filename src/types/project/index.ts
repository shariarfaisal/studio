import { Source } from "../source";
import { Topic } from "../topic";

// Project.ts
export interface Project {
  id: string;
  name: string;
  systemPrompt: string;
  status: string;
  topics: Topic[];
  sources: Source[];
  configs: Record<string, string>; // Key-value pair for configs
  createdAt: Date;
  updatedAt: Date;
}
