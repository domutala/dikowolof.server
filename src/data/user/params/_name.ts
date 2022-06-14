import User from "../../_entities/User";

const format = async (name: string) => name;

const test = async (name?: string) => {
  if (!name) {
    const error = Error();
    error.name = "_user:nameIsRequired";
    throw error;
  }

  if (typeof name !== "string") {
    const error = Error();
    error.name = "_user:invalidName";
    throw error;
  }

  if (!name.length) {
    const error = Error();
    error.name = "_user:invalidName";
    throw error;
  }

  return true;
};

const create = async ({ user, name }: { user: User; name: string }) => {
  await test(name);

  user.params.name = name;

  await user.save();

  return user;
};

export default { create, test, format };
