import { chatMessages, notes, prompts, sources } from "@/data/notebook";
import {
  ChatMessageType,
  NotebookType,
  NoteType,
  PromptType,
  SourceType,
} from "./models/notebook";

export const notebookService = {
  getNotebook: async (): Promise<NotebookType> => {
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: "1",
          title: "Notebook 1",
          createdAt: "2022-01-01T00:00:00.000Z",
          updatedAt: "2022-01-01T00:00:00.000Z",
        });
      }, 100);
    });
  },
  getSources: async (): Promise<SourceType[]> => {
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve(sources);
      }, 100);
    });
  },
  getNotes: async (): Promise<NoteType[]> => {
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve(notes);
      }, 100);
    });
  },
  getPrompts: async (): Promise<PromptType[]> => {
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve(prompts);
      }, 100);
    });
  },
  addNote: async (): Promise<NoteType> => {
    return await new Promise((resolve) => {
      setTimeout(() => {
        const newNote = {
          id: new Date().toString(),
          title: "New Note",
          editable: true,
          content: "",
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          notebookId: "1",
        };
        resolve(newNote);
      }, 100);
    });
  },
  updateNote: async ({
    id,
    payload,
  }: {
    id: string;
    payload: {
      title: string;
      content: string;
    };
  }): Promise<NoteType> => {
    return await new Promise((resolve) => {
      setTimeout(() => {
        const note = { ...notes[0] };
        note.id = id;
        note.title = payload.title;
        note.content = payload.content;
        note.editable = true;
        note.updatedAt = new Date().toISOString();
        resolve(note);
      }, 1000);
    });
  },
  deleteNote: async ({
    id,
  }: {
    id: string;
    notebookId: string;
  }): Promise<NoteType> => {
    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        const note = notes.find((n) => n.id === id);
        if (note) {
          resolve(note);
        } else {
          reject("Note not found");
        }
      }, 1000);
    });
  },
  deleteAllNotes: async (): Promise<boolean> => {
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 1000);
    });
  },
  deleteNotes: async ({
    ids,
  }: {
    notebookId: string;
    ids: string[];
  }): Promise<string[]> => {
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve(ids);
      }, 1000);
    });
  },
  addSource: async (payload: unknown): Promise<SourceType> => {
    return await new Promise((resolve) => {
      setTimeout(() => {
        console.log(payload);
        const newSource = sources[0];
        newSource.title = "New Source";
        newSource.id = new Date().toString();
        resolve(newSource);
      }, 1000);
    });
  },
  updateSource: async ({
    id,
  }: {
    id: string;
    payload: {
      title: string;
    };
  }): Promise<SourceType> => {
    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        const source = sources.find((s) => s.id === id);
        if (source) {
          resolve(source);
        } else {
          reject("Source not found");
        }
      }, 1000);
    });
  },
  deleteSource: async ({
    id,
  }: {
    id: string;
    notebookId: string;
  }): Promise<SourceType> => {
    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        const source = sources.find((s) => s.id === id);
        if (source) {
          resolve(source);
        } else {
          reject("Source not found");
        }
      }, 1000);
    });
  },
  getChats: async (): Promise<ChatMessageType[]> => {
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve(chatMessages);
      }, 1000);
    });
  },
};
