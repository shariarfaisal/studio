"use client";

import { createContext, useContext, useMemo, useReducer } from "react";
import {
  ChatMessageType,
  NotebookType,
  NoteType,
  PromptType,
  SourceType,
} from "@/services/models/notebook";

type TabType = "notes" | "chats";

export type NotebookState = {
  tab: {
    active: TabType;
  };
  sources: {
    isLoading: boolean;
    data: SourceType[];
    error: string;
  };
  notes: {
    isLoading: boolean;
    data: NoteType[];
    error: string;
    selected: string[];
  };
  prompts: {
    isLoading: boolean;
    data: PromptType[];
    error: string;
  };
  notebook: {
    isLoading: boolean;
    data: NotebookType | null;
    error: string;
  };
  chats: {
    isLoading: boolean;
    data: ChatMessageType[];
    error: string;
  };
};

export const initialState: NotebookState = {
  tab: {
    active: "notes",
  },
  notes: {
    isLoading: false,
    data: [],
    error: "",
    selected: [],
  },
  sources: {
    isLoading: false,
    data: [],
    error: "",
  },
  prompts: {
    isLoading: false,
    data: [],
    error: "",
  },
  notebook: {
    isLoading: false,
    data: null,
    error: "",
  },
  chats: {
    isLoading: false,
    data: [],
    error: "",
  },
};

type Action = {
  type: string;
  payload: unknown;
};

export const Types = {
  SET_ACTIVE_TAB: "SET_ACTIVE_TAB",
  SET_NOTES_LOADING: "SET_NOTES_LOADING",
  SET_NOTES_DATA: "SET_NOTES_DATA",
  SET_NOTES_ERROR: "SET_NOTES_ERROR",
  ADD_NEW_NOTE: "ADD_NEW_NOTE",
  UPDATE_NOTE: "UPDATE_NOTE",
  DELETE_NOTE: "DELETE_NOTE",
  DELETE_NOTES: "DELETE_NOTES",
  DELETE_ALL_NOTES: "DELETE_ALL_NOTES",
  SELECT_NOTE: "SELECT_NOTE",
  DESELECT_NOTE: "DESELECT_NOTE",
  SELECT_ALL_NOTE: "SELECT_ALL_NOTE",
  DESELECT_ALL_NOTE: "DESELECT_ALL_NOTE",
  SET_SOURCES_LOADING: "SET_SOURCES_LOADING",
  SET_SOURCES_DATA: "SET_SOURCES_DATA",
  SET_SOURCES_ERROR: "SET_SOURCES_ERROR",
  ADD_NEW_SOURCE: "ADD_NEW_SOURCE",
  UPDATE_SOURCE: "UPDATE_SOURCE",
  DELETE_SOURCE: "DELETE_SOURCE",
  SET_PROMPTS_LOADING: "SET_PROMPTS_LOADING",
  SET_PROMPTS_DATA: "SET_PROMPTS_DATA",
  SET_PROMPTS_ERROR: "SET_PROMPTS_ERROR",
  SET_NOTEBOOK_LOADING: "SET_NOTEBOOK_LOADING",
  SET_NOTEBOOK_DATA: "SET_NOTEBOOK_DATA",
  SET_NOTEBOOK_ERROR: "SET_NOTEBOOK_ERROR",
  SET_CHATS_LOADING: "SET_CHATS_LOADING",
  SET_CHATS_DATA: "SET_CHATS_DATA",
  SET_CHATS_ERROR: "SET_CHATS_ERROR",
};

export const reducer = (
  state: NotebookState,
  action: Action
): NotebookState => {
  switch (action.type) {
    case Types.SET_ACTIVE_TAB:
      state.tab.active = action.payload as TabType;
      return { ...state };
    case Types.SET_NOTES_LOADING:
      return {
        ...state,
        notes: { ...state.notes, isLoading: action.payload as boolean },
      };
    case Types.SET_NOTES_DATA:
      return {
        ...state,
        notes: { ...state.notes, data: action.payload as NoteType[] },
      };
    case Types.SET_NOTES_ERROR:
      return {
        ...state,
        notes: { ...state.notes, error: action.payload as string },
      };
    case Types.ADD_NEW_NOTE:
      const notes = [...state.notes.data];
      console.log(notes);
      notes.unshift(action.payload as NoteType);
      console.log(notes);
      return {
        ...state,
        notes: {
          ...state.notes,
          data: notes,
        },
      };

    case Types.UPDATE_NOTE:
      const payload = action.payload as NoteType;
      const note = state.notes.data.find((note) => note.id === payload.id);
      if (note) {
        Object.assign(note, payload);
      }
      return { ...state };
    case Types.DELETE_NOTE:
      const index = state.notes.data.findIndex(
        (note) => note.id === action.payload
      );
      if (index !== -1) {
        state.notes.data.splice(index, 1);
      }
      return { ...state };
    case Types.DELETE_NOTES:
      if (action.payload) {
        const ids = action.payload as string[];
        state.notes.data = state.notes.data.filter(
          (note) => !ids.includes(note.id)
        );

        state.notes.selected = state.notes.selected.filter(
          (id) => !ids.includes(id)
        );
      }

      return { ...state };
    case Types.DELETE_ALL_NOTES:
      return { ...state, notes: { ...state.notes, data: [] as NoteType[] } };
    case Types.SELECT_NOTE:
      if (!state.notes.selected.includes(action.payload as string)) {
        state.notes.selected.push(action.payload as string);
      }

      return { ...state };
    case Types.DESELECT_NOTE:
      if (state.notes.selected.includes(action.payload as string)) {
        state.notes.selected = state.notes.selected.filter(
          (id) => id !== action.payload
        );
      }

      console.log(state.notes.selected);
      return { ...state };
    case Types.SELECT_ALL_NOTE:
      return {
        ...state,
        notes: {
          ...state.notes,
          selected: state.notes.data.map((note) => note.id),
        },
      };
    case Types.DESELECT_ALL_NOTE:
      return { ...state, notes: { ...state.notes, selected: [] } };
    case Types.SET_SOURCES_LOADING:
      return {
        ...state,
        sources: { ...state.sources, isLoading: action.payload as boolean },
      };
    case Types.SET_SOURCES_DATA:
      return {
        ...state,
        sources: { ...state.sources, data: action.payload as SourceType[] },
      };
    case Types.SET_SOURCES_ERROR:
      return {
        ...state,
        sources: { ...state.sources, error: action.payload as string },
      };
    case Types.ADD_NEW_SOURCE:
      state.sources.data.push(action.payload as SourceType);
      return { ...state };
    case Types.UPDATE_SOURCE:
      const sourcePayload = action.payload as SourceType;
      if (sourcePayload) {
        const source = state.sources.data.find(
          (source) => source.id === sourcePayload.id
        );
        if (source) {
          Object.assign(source, action.payload);
        }
      }
      return { ...state };
    case Types.DELETE_SOURCE:
      const sourceIndex = state.sources.data.findIndex(
        (source) => source.id === action.payload
      );
      if (sourceIndex !== -1) {
        state.sources.data.splice(sourceIndex, 1);
      }
      return { ...state };
    case Types.SET_PROMPTS_LOADING:
      return {
        ...state,
        prompts: { ...state.prompts, isLoading: action.payload as boolean },
      };
    case Types.SET_PROMPTS_DATA:
      return {
        ...state,
        prompts: { ...state.prompts, data: action.payload as PromptType[] },
      };
    case Types.SET_PROMPTS_ERROR:
      return {
        ...state,
        prompts: { ...state.prompts, error: action.payload as string },
      };
    case Types.SET_NOTEBOOK_LOADING:
      return {
        ...state,
        notebook: { ...state.notebook, isLoading: action.payload as boolean },
      };
    case Types.SET_NOTEBOOK_DATA:
      return {
        ...state,
        notebook: { ...state.notebook, data: action.payload as NotebookType },
      };
    case Types.SET_NOTEBOOK_ERROR:
      return {
        ...state,
        notebook: { ...state.notebook, error: action.payload as string },
      };
    case Types.SET_CHATS_LOADING:
      return {
        ...state,
        chats: { ...state.chats, isLoading: action.payload as boolean },
      };
    case Types.SET_CHATS_DATA:
      return {
        ...state,
        chats: { ...state.chats, data: action.payload as ChatMessageType[] },
      };
    case Types.SET_CHATS_ERROR:
      return {
        ...state,
        chats: { ...state.chats, error: action.payload as string },
      };
    default:
      return state;
  }
};

type NotebookContextType = NotebookState & {
  dispatch: (action: Action) => void;
  setActiveTab: (tab: TabType) => void;
  toggleChats: () => void;
  toggleSelectNote: (id: string, value: boolean) => void;
  selectAllNote: () => void;
  deselectAllNote: () => void;
  setNotes: (notes: NoteType[]) => void;
  setSources: (sources: SourceType[]) => void;
  setPrompts: (prompts: PromptType[]) => void;
  setNotebook: (notebook: NotebookType) => void;
  addNewNote: (note: NoteType) => void;
  deleteNotes: (ids: string[]) => void;
  isAllNotesSelected: boolean;
};

export const NotebookContext = createContext<NotebookContextType>({
  ...initialState,
  dispatch: () => {},
  setActiveTab: () => {},
  toggleChats: () => {},
  toggleSelectNote: () => {},
  selectAllNote: () => {},
  deselectAllNote: () => {},
  setNotes: () => {},
  setSources: () => {},
  setPrompts: () => {},
  setNotebook: () => {},
  addNewNote: () => {},
  deleteNotes: () => {},
  isAllNotesSelected: false,
});

export const useNotebook = () => useContext(NotebookContext);

export default function NotebookProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setActiveTab = (tab: TabType) => {
    dispatch({ type: Types.SET_ACTIVE_TAB, payload: tab });
  };

  const setNotes = (notes: NoteType[]) => {
    dispatch({
      type: Types.SET_NOTES_DATA,
      payload: notes,
    });
  };

  const setSources = (sources: SourceType[]) => {
    dispatch({
      type: Types.SET_SOURCES_DATA,
      payload: sources,
    });
  };

  const setPrompts = (prompts: PromptType[]) => {
    dispatch({
      type: Types.SET_PROMPTS_DATA,
      payload: prompts,
    });
  };

  const setNotebook = (notebook: NotebookType) => {
    dispatch({
      type: Types.SET_NOTEBOOK_DATA,
      payload: notebook,
    });
  };

  const toggleChats = () => {
    dispatch({
      type: Types.SET_ACTIVE_TAB,
      payload: state.tab.active === "chats" ? "notes" : "chats",
    });
  };

  const toggleSelectNote = (id: string, value: boolean) => {
    if (value) {
      dispatch({ type: Types.SELECT_NOTE, payload: id });
    } else {
      dispatch({ type: Types.DESELECT_NOTE, payload: id });
    }
  };

  const selectAllNote = () => {
    dispatch({ type: Types.SELECT_ALL_NOTE, payload: true });
  };

  const deselectAllNote = () => {
    dispatch({ type: Types.DESELECT_ALL_NOTE, payload: true });
  };

  const isAllNotesSelected = useMemo(() => {
    return state.notes.data.every((note) =>
      state.notes.selected.includes(note.id)
    );
  }, [state.notes]);

  const addNewNote = (note: NoteType) => {
    console.log("add new note", note);
    dispatch({ type: Types.ADD_NEW_NOTE, payload: note });
  };

  const deleteNotes = (ids: string[]) => {
    dispatch({
      type: Types.DELETE_NOTES,
      payload: ids,
    });
  };

  return (
    <NotebookContext.Provider
      value={{
        ...state,
        dispatch,
        setActiveTab,
        toggleChats,
        setNotes,
        setSources,
        setPrompts,
        setNotebook,
        toggleSelectNote,
        selectAllNote,
        deselectAllNote,
        addNewNote,
        deleteNotes,
        isAllNotesSelected,
      }}
    >
      {children}
    </NotebookContext.Provider>
  );
}
