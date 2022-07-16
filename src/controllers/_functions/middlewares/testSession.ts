// import user from "../../../data/user";
import { ISession } from "~/src/models/Session";

export default async (session?: ISession) => {
  if (!session) return "_session:notFound";
  if (session.params.expired) return "_session:closed";

  // chargement des données utilisateur
  if (!session.user) return "_session:notHaveUser";

  // session.user = await user.get(session.userId);
  // if (!session.user) return "_session:notHaveUser";
  // if (session.user.params.blocked) return "_session:userBlocked";

  return session;
};
