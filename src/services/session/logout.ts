import { ISession } from "@/models/Session";
import _close from "../../data/session/update/close";

interface Params {
  session: ISession;
}

export default async (params: Params) => {
  const session = await _close({ id: params.session.id, close: true });
  return session;
};
