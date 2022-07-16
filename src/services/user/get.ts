import _get from "../../data/user/get";

interface Params {
  id?: string;
  uid?: string;
}

/**
 * créer un nouvel utilisateur
 * @author domutala
 */
export default async (params: Params) => {
  const user = await _get(params);

  return user;
};
