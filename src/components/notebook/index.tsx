"use client";

import NotebookTopBar from "./TopBar";
import ActionPanel from "./ActionPanel";
import Notes from "./Notes";
import { createContext, useContext, useReducer } from "react";
import { initialState, NotebookState, reducer, Types } from "./reducer";
import { NoteType } from "@/services/models/notebook";

type NotebookContextType = NotebookState & {
  setActiveNote: (note: NoteType) => void;
};

export const NotebookContext = createContext<NotebookContextType>({
  setActiveNote: () => {},
});

export const useNotebook = () => useContext(NotebookContext);

export default function Notebook() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setActiveNote = (note: NoteType) => {
    dispatch({
      type: Types.SET_ACTIVE_NOTE,
      payload: note,
    });
  };

  return (
    <NotebookContext.Provider
      value={{
        ...state,
        setActiveNote,
      }}
    >
      <NotebookTopBar />
      <Notes />
      <ActionPanel />
    </NotebookContext.Provider>
  );
}
