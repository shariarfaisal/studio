import { create } from "zustand";
import { Builder, Conversation } from "../types";

interface VAChatProperties {
  session_id: string;
  typingResponse: string;
  vaContextInfo: Builder | null;
  conversations: Conversation[];
  lastConversationSize: number | null;
}
interface VAChatStore extends VAChatProperties {
  setChatStore: (
    updater:
      | Partial<VAChatProperties>
      | ((prevState: VAChatProperties) => Partial<VAChatProperties>)
  ) => void;
  resetChatStore: () => void;
}

export const useChatStore = create<VAChatStore>((set) => ({
  hasResponseLoading: false,
  session_id: "",
  typingResponse: "",
  vaContextInfo: null,
  conversations: [],
  lastConversationSize: null,
  setChatStore: (updater) => {
    set((state) => ({
      ...state,
      ...(typeof updater === "function" ? updater(state) : updater),
    }));
  },
  resetChatStore: () => set({ conversations: [], session_id: "" }),
}));
