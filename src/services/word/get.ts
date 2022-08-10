import _get, { Params } from "../../data/word/get";

/**
 * @author domutala
 */
export default async (params: Params) => {
  const word = await _get(params);

  return word;
};
