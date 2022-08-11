import _list, { Params } from "@/data/word/value/list";

export default async (params: Params) => {
  const ids = await _list(params);
  return ids;
};
