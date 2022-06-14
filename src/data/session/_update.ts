import get from "./_getOrFaild";

/**
 * Modifier une session: une session ne peur etre modifier
 * que si elle n'est pas expirée
 * @author domutala
 * @version 0.2.0
 */
export default async ({
  id,
  userId,
  expired,
}: {
  id: string;
  userId?: string;
  expired?: boolean;
}) => {
  // vérifier si la existe
  const session = await get(id);

  // vérifie si la session est expirée
  if (session.expired) {
    const error = Error();
    error.name = "_session:expired";
    throw error;
  }

  // vérifier si l'utilisateur existe
  if (userId) {
    if (session.userId) {
      const error = Error();
      error.name = "_session:haveAlreadyUser";
      throw error;
    }
  }

  session.userId = userId || session.userId;
  session.expired = expired || session.expired;

  await session.save();

  return session;
};
