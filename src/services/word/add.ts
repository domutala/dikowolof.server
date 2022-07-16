import _add from "@/data/word/add";

interface Params {
  user: string;
  value: string;
}

export default async (params: Params) => {
  const word = await _add({
    user: params.user,
    value: params.value,
  });

  return word;
};
