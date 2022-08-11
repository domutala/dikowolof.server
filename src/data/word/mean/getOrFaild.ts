import get, { Params } from "./get";

/**
 * @author domutala
 */
export default async (params: Params) => {
  const mean = await get(params);

  if (!mean) {
    const error = Error();
    error.name = "_mean:notFound";
    throw error;
  }

  return mean;
};
