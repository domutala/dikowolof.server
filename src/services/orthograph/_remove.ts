import _remove from "../../data/orthograph/_remove";

export default async ({ id }: { id: string }) => {
  const orthograph = await _remove(id);
  return orthograph;
};
