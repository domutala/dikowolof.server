import _get from "../../data/word/_get";

export default async ({ id }: { id: string }) => {
  const word = await _get(id);
  if (word) delete (word as any).params;

  return word;
};
