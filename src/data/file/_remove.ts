import get from "./_getOrFaild";

/**
 * @author domutala
 */
export default async (id: string) => {
  const file = await get(id);

  await file.remove();

  return file;
};
