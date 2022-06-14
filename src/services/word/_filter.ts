import _filter from "../../data/word/_filter";

export default async (params: { [key: string]: any }) => {
  const word = await _filter(params);
  return word;
};
