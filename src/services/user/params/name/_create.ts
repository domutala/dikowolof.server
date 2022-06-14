import data from "../../../../data/user";

export default async ({ id, name }: { id: string; name: string }) => {
  let user = await data.getOrFaild(id);
  user = await data.params.name.create({ user, name });
  return user;
};
