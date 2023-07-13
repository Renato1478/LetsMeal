import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const loginRequest = (email, password) => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password);
};
