import Session from "../_entities/Session";

/**
 * Ajouter une nouvelle session
 * @author domutala
 * @version 0.2.0
 */
export default async ({ publicKey }: { publicKey: string }) => {
  if (!publicKey) {
    const error = Error();
    error.name = "_session:publickeyRequired";
    throw error;
  }

  const session = new Session();

  session.publicKey = publicKey;
  session.expired = false;

  await session.save();

  return session;
};
