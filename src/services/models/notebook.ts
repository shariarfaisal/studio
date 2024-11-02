export type NotebookType = {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
};

export type SourceType = {
  id: string;
  title: string;
  transcript: string;
  summary: string;
  createdAt: string;
  updatedAt: string;
};

export type NoteType = {
  id: string;
  title: string;
  content: string;
  editable: boolean;
  createdAt: string;
  updatedAt: string;
};

export type PromptType = {
  id: string;
  title: string;
  prompt: string;
  createdAt: string;
  updatedAt: string;
};

export type ChatMessageType = {
  id: string;
  role: string;
  content: string;
  createdAt: string;
  updatedAt: string;
};
