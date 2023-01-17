import { getAuth } from "firebase/compat/auth";

export const auth = getAuth(firebase); 
export const user = auth.currentUser;