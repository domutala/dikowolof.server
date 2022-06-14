import get from "./_getOrFaild";

/**
 * @author domutala
 */
export default async (id: string) => {
  const orthograph = await get(id);
  await orthograph.remove();

  return orthograph;
};
