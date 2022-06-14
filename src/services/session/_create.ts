import data from "../../data/session";
import { ISession } from "../../../types/express-extend";

/**
 * @name login_step_1
 * @author domutala
 * @description initialiser un nouvelle session
 * @version 0.2.0
 */
export default async ({
  session,
  publicKey,
}: {
  session?: ISession;
  publicKey: string;
}) => {
  // vérifier si la session n'est pas expirée
  if (!session || session.expired) {
    // créer un nouvelle session
    session = await data.add({ publicKey });
  }

  return session;
};
