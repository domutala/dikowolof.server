import _list, { Params } from "@/data/word/mean/list";

export default async (params: Params) => {
  const ids = await _list(params);
  return ids;
};
