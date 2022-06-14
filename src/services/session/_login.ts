import _session from "../../data/session";
import _user from "../../data/user";
import utils from "../../utils";
import { ISession } from "../../../types/express-extend";

export default async ({
  session,
  email,
  password,
}: {
  session: ISession;
  email: string;
  password: string;
}) => {
  const id = await _user.listOrFaild({ email });
  const user = await _user.getOrFaild(id[0]);

  if (
    !user.params.password ||
    !password ||
    utils.rsa.decrypter({ data: JSON.parse(user.params.password) }) !== password
  ) {
    const error = Error();
    error.name = "_session:login:incorrectPassword";
    throw error;
  }
  if (user.params.blocked) {
    const error = Error();
    error.name = "_session:login:userBlocked";
    throw error;
  }

  await _session.update({
    id: session.id.toString(),
    userId: user.id.toString(),
  });

  session.userId = user.id.toString();
  session.user = user;

  return session;
};
