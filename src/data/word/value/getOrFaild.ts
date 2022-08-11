import get, { Params } from "./get";

/**
 * @author domutala
 */
export default async (params: Params) => {
  const value = await get(params);

  if (!value) {
    const error = Error();
    error.name = "_value:notFound";
    throw error;
  }

  return value;
};
