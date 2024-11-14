export interface PromptWithCustomConfig {
  prompt: string;
  context?: {
    tasks: Task[];
  };
}

interface Task {
  task: string;
  order: number;
  task_config: TaskConfig;
}

interface TaskConfig {
  task_type: string;
  files: {
    filename: string;
    url: string;
    mime: string;
  }[];
  include_graph?: boolean;
}
