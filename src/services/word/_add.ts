import _add from "../../data/word/_add";

export default async (params: { [key: string]: any }) => {
  const word = await _add(params as any);
  return word;
};
