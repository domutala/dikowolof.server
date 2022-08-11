import _get, { Params } from "@/data/word/mean/get";

/**
 * @author domutala
 */
export default async (params: Params) => {
  const mean = await _get(params);
  return mean;
};
