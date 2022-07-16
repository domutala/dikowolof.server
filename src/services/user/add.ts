import _add, { Params as P } from "@/data/user/add";

type Params = P;

/**
 * créer un nouvel utilisateur
 * @author domutala
 */
export default async (params: Params) => {
  const user = await _add(params);
  return user;
};
