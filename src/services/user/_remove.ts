import _remove from "../../data/user/_remove";

export default async ({ id }: { id: string }) => {
  const user = await _remove(id);
  return user;
};
