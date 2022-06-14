import utils from "../../../utils";
import User from "../../_entities/User";
import list from "../_list";

const format = async (email: string) => email;

const test = async (email: string, user?: string) => {
  if (!email) {
    const error = Error();
    error.name = "_user:emailIsRequired";
    throw error;
  }

  if (!utils.regex.mail(email)) {
    const error = Error();
    error.name = "_user:invalidEmail";
    throw error;
  }

  if (user) {
    const users = await list({ email });
    if (users.length && !users.includes(user)) {
      const error = Error();
      error.name = "_user:emailAreadyUsed";
      throw error;
    }
  }

  return true;
};

const create = async ({ user, email }: { user: User; email: string }) => {
  await test(email);

  user.params.email = email;

  await user.save();

  return user;
};

export default { create, test, format };
