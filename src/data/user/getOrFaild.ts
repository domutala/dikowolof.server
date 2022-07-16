import get, { Params } from "./get";

/**
 * @author domutala
 * @description trouver une sssion
 * @version 0.2.0
 */
export default async (params: Params) => {
  const user = await get(params);

  if (!user) {
    const error = Error();
    error.name = "_user:notFound";
    throw error;
  }

  return user;
};
