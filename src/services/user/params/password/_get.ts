import data from "../../../../data/user";

export default async ({ id }: { id: string }) => {
  const user = await data.getOrFaild(id);

  return {
    value: user.params.password,
    format: await data.params.password.format(user.params.password),
  };
};
