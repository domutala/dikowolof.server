import _add, { Params } from "@/data/word/value/add";

export default async (params: Params) => {
  const value = await _add({
    user: params.user,
    value: params.value,
    word: params.word,
  });

  return value;
};
