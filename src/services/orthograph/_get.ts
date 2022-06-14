import _get from "../../data/orthograph/_get";

export default async ({ id }: { id: string }) => {
  const orthograph = await _get(id);
  return orthograph;
};
