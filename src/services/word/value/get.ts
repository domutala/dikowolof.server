import _get, { Params } from "@/data/word/value/get";

/**
 * @author domutala
 */
export default async (params: Params) => {
  const value = await _get(params);
  return value;
};
