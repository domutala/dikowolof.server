import get from "./_get";

/**
 * @author domutala
 */
export default async (id: string) => {
  const word = await get(id);

  if (!word) {
    const error = Error();
    error.name = "_word:notFound";
    throw error;
  }

  return word;
};
