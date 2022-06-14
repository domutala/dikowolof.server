import get from "./_get";

/**
 * @author domutala
 * @description trouver une sssion
 * @version 0.2.0
 */
export default async (id: string) => {
  const session = await get(id);

  if (!session) {
    const error = Error();
    error.name = "_session:notFound";
    throw error;
  }

  return session;
};
