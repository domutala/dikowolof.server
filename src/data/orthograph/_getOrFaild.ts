import get from "./_get";

/**
 * @author domutala
 */
export default async (id: string) => {
  const orthograph = await get(id);

  if (!orthograph) {
    const error = Error();
    error.name = "_orthograph:notFound";
    throw error;
  }

  return orthograph;
};
