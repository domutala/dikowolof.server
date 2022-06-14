import data from "../../../../data/user";

export default async ({ id, file }: { id: string; file: string }) => {
  let user = await data.getOrFaild(id);
  user = await data.params.avatar.create({ user, file });
  return user;
};
