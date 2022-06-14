import data from "../../../../data/user";

export default async ({ id }: { id: string }) => {
  const user = await data.getOrFaild(id);

  return {
    value: user.params.avatar,
    format: await data.params.avatar.format(user.params.avatar),
  };
};
