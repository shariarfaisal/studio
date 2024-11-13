import { BaseTypes } from "../base";
import { Source } from "../source";
import { Topic } from "../topic";

// Project.ts
export interface Project extends BaseTypes {
  name: string;
  systemPrompt: string;
  status: string;
  topics: Topic[];
  sources: Source[];
  configs: Record<string, string>; // Key-value pair for configs
}
