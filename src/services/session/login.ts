import firebase from "firebase-admin";
import { ISession } from "~/src/models/Session";
import _add from "@/data/user/add";

interface Params {
  token: string;
  session: ISession;
}

/**
 * lier une session à un utilisateur
 * @author domutala
 */
export default async (params: Params) => {
  const firebaseConfig = process.env.FIREBASE_CONFIG as string;
  const credential = firebase.credential.cert(firebaseConfig);

  firebase.initializeApp({ credential });

  const isOk = await firebase.auth().verifyIdToken(params.token);
  if (!isOk) {
    const error = Error();
    error.name = "_session:login:firebaseTokenError";
    throw error;
  }

  const fuser = await firebase.auth().getUser(isOk.uid);
  const user = await _add({
    name: fuser.displayName || fuser.uid,
    uid: fuser.uid,
  });

  return user;
};
