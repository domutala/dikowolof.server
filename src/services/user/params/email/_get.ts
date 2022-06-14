import data from "../../../../data/user";

export default async ({ id }: { id: string }) => {
  const user = await data.getOrFaild(id);

  return {
    value: user.params.email,
    format: await data.params.email.format(user.params.email),
  };
};
