import { ISession } from "../../../../types/express-extend";
import user from "../../../data/user";

export default async (session?: ISession) => {
  if (!session) return "_session:notFound";
  if (session.expired) return "_session:expired";

  // chargement des données utilisateur
  if (!session.userId) return "_session:notHaveUser";

  session.user = await user.get(session.userId);
  if (!session.user) return "_session:notHaveUser";
  if (session.user.params.blocked) return "_session:userBlocked";

  return session;
};
