import _name from "@/data/user/update/name";

interface Params {
  id: string;
  name: string;
}

/**
 * @author domutala
 */
export default async (params: Params) => {
  const user = await _name(params);
  return user;
};
