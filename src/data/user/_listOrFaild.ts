import list from "./_list";

/**
 * @author domutala
 * @version 0.2.0
 */
export default async (params: { email: string }) => {
  const ids = await list(params);

  if (!ids.length) {
    const error = Error();
    error.name = "_user:notFound";
    throw error;
  }

  return ids;
};
