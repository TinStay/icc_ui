import { createContext, Dispatch, SetStateAction } from "react";

interface ConnectedUserContextType {
  connectedUser: { UID: string };
  setConnectedUser: Dispatch<SetStateAction<{}>>;
}
interface UtilitiesContextType {
  isDesktopView: boolean;
}

export const ConnectedUserContext =
  createContext<ConnectedUserContextType | null>(null);

export const UtilitiesContext =
  createContext<UtilitiesContextType | null>(null);
