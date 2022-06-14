import get from "./_getOrFaild";

/**
 * @author domutala
 */
export default async (id: string) => {
  const user = await get(id);
  await user.remove();

  return user;
};
