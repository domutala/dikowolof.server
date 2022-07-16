import get, { Params } from "./get";

/**
 * @author domutala
 * @description trouver une sssion
 * @version 0.2.0
 */
export default async (params: Params) => {
  const session = await get(params);

  if (!session) {
    const error = Error();
    error.name = "_session:notFound";
    throw error;
  }

  return session;
};
