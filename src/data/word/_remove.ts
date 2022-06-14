import get from "./_getOrFaild";

/**
 * @author domutala
 */
export default async (id: string) => {
  const word = await get(id);
  await word.remove();

  return word;
};
