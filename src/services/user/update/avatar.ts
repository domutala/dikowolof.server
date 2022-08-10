import _avatar from "@/data/user/update/avatar";
import _get from "../get";

interface Params {
  id: string;
  file: string;
}

/**
 * @author domutala
 */
export default async (params: Params) => {
  await _avatar(params);
  return await _get({ id: params.id });
};
