import get, { Params } from "./get";

/**
 * @author domutala
 */
export default async (params: Params) => {
  const word = await get(params);

  if (!word) {
    const error = Error();
    error.name = "_word:notFound";
    throw error;
  }

  return word;
};
