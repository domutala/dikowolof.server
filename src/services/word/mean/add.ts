import _add, { Params } from "@/data/word/mean/add";

export default async (params: Params) => {
  const mean = await _add({
    user: params.user,
    value: params.value,
    word: params.word,
  });

  return mean;
};
