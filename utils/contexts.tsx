import { createContext, Dispatch, SetStateAction } from "react";

interface ConnectedUserContextType {
  connectedUser: { uid: string };
  setConnectedUser: Dispatch<SetStateAction<{}>>;
}

export const ConnectedUserContext =
  createContext<ConnectedUserContextType | null>(null);
