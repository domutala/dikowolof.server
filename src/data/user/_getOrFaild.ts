import get from "./_get";

/**
 * Trouver un utilisateur
 * @author domutala
 */
export default async (id?: string) => {
  const user = await get(id);
  if (!user) {
    const error = Error();
    error.name = "_user:notFound";
    throw error;
  }

  return user;
};
