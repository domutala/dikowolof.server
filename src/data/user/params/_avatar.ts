import User from "../../_entities/User";
import get from "../../file/_getOrFaild";

const format = async (avatar: string) => avatar || [];

const test = async (file: string) => {
  await get(file);
  return true;
};

const create = async ({ user, file }: { user: User; file: string }) => {
  await test(file);

  user.params.avatar = file;
  await user.save();

  return user;
};

export default { create, test, format };
