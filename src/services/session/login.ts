import firebase from "firebase-admin";
import { ISession } from "~/src/models/Session";
import _add from "@/data/user/add";
import _sessionUpdateUser from "@/data/session/update/user";
import _get from "@/services/user/get";

interface Params {
  token: string;
  session: ISession;
}

/**
 * lier une session à un utilisateur
 * @author domutala
 */
export default async (params: Params) => {
  // const isOk = await firebase.auth().verifyIdToken(params.token);
  // if (!isOk) {
  //   const error = Error();
  //   error.name = "_session:login:firebaseTokenError";
  //   throw error;
  // }

  const fuser = await firebase.auth().getUser(params.token);
  if (!fuser) {
    const error = Error();
    error.name = "_session:login:notUserFound";
    throw error;
  }

  let user = await _add({
    name: fuser.displayName || fuser.uid,
    uid: fuser.uid,
  });

  await _sessionUpdateUser({ id: params.session.id, user: user.id });
  user = (await _get({ id: user.id })) as any;

  return user;
};
