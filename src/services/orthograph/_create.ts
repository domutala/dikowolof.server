import _create from "../../data/orthograph/_create";

export default async (params: { [key: string]: any }) => {
  const orthograph = await _create(params as any);
  return orthograph;
};
