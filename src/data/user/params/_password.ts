import rsa from "../../../utils/_rsa";
import User from "../../_entities/User";

const format = async (password: string) => password;

const test = async (password?: string, passwordConfirmation?: string) => {
  if (!password) {
    const error = Error();
    error.name = "_user:passwordIsRequired";
    throw error;
  }

  if (typeof password !== "string") {
    const error = Error();
    error.name = "_user:invalidPassword";
    throw error;
  }

  if (!password.length) {
    const error = Error();
    error.name = "_user:invalidPassword";
    throw error;
  }

  if (password !== passwordConfirmation) {
    const error = Error();
    error.name = "_user:passwordsNotMatched";
    throw error;
  }

  return true;
};

const create = async ({
  user,
  password,
  passwordConfirmation,
}: {
  user: User;
  password: string;
  passwordConfirmation: string;
}) => {
  await test(password, passwordConfirmation);

  password = JSON.stringify(rsa.encrypter({ data: password }));
  user.params.password = password;

  await user.save();

  return user;
};

export default { create, test, format };
