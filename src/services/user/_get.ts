import data from "../../data/user";

export default async ({ id }: { id: string }) => {
  const user = await data.get(id);
  if (user) delete user.params.password;

  return user;
};
