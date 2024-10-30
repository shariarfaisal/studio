"use client";

import { NoteType } from "@/services/models/notebook";

export type NotebookState = {
  activeNote?: NoteType;
};

export const initialState: NotebookState = {};

type Action = {
  type: string;
  payload: unknown;
};

export const Types = {
  SET_ACTIVE_NOTE: "SET_ACTIVE_NOTE",
};

export const reducer = (state: NotebookState, action: Action) => {
  switch (action.type) {
    case Types.SET_ACTIVE_NOTE:
      state.activeNote = action.payload as NoteType;
      return { ...state };
    default:
      return state;
  }
};
