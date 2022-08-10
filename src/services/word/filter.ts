import _filter, { Params as DParams } from "@/data/word/filter";

interface Params extends DParams {
  user: string;
}

export default async (params: Params) => {
  const word = await _filter(params);

  return word;
};
