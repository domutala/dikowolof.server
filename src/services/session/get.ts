import _get from "../../data/session/get";

interface Params {
  id: string;
}

/**
 * créer un nouvel utilisateur
 * @author domutala
 */
export default async (params: Params) => {
  const session = await _get(params);
  return session;
};
