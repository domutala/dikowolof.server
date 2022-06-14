import User from "../../_entities/User";

const format = async (blocked: boolean) => blocked;

const test = async (blocked?: boolean) => {
  if (typeof blocked !== "boolean") {
    const error = Error();
    error.name = "_user:invalidData";
    throw error;
  }

  return true;
};

const create = async ({ user, blocked }: { user: User; blocked: boolean }) => {
  await test(blocked);

  user.params.blocked = blocked;

  await user.save();

  return user;
};

export default { create, test, format };
