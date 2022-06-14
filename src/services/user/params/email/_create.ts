import data from "../../../../data/user";

export default async ({ id, email }: { id: string; email: string }) => {
  let user = await data.getOrFaild(id);
  user = await data.params.email.create({ user, email });
  return user;
};
