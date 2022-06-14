import data from "../../../../data/user";

export default async ({ id, blocked }: { id: string; blocked: boolean }) => {
  let user = await data.getOrFaild(id);
  user = await data.params.blocked.create({ user, blocked });
  return user;
};
