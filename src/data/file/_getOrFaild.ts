import get from "./_get";

/**
 * @author domutala
 */
export default async (id: string) => {
  const file = await get(id);

  if (!file) {
    const error = Error();
    error.name = "_file:notFound";
    throw error;
  }

  return file;
};
