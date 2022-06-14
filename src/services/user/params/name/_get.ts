import data from "../../../../data/user";

export default async ({ id }: { id: string }) => {
  const user = await data.getOrFaild(id);

  return {
    value: user.params.name,
    format: await data.params.name.format(user.params.name),
  };
};
