import * as jwtoken from "jsonwebtoken";

import _user from "../../../data/user";
import utils from "../../../utils";

export default async ({
  token,
  password,
  passwordConfirmation,
}: {
  token: string;
  password: string;
  passwordConfirmation: string;
}) => {
  let v: any;
  try {
    v = jwtoken.verify(
      token,
      Buffer.from(utils.rsa.get().private_key, "base64")
    );
  } catch (err) {
    const error = new Error();
    error.name = "_notValidToken";
    error.message = "token non valide";
    throw error;
  }

  if (!v.confirm) {
    const error = new Error();
    error.name = "_notValidCode";
    error.message = "Le code de validation n'est pas valide";
    throw error;
  }

  let user = await _user.getOrFaild(v.user);
  user = await _user.params.password.create({
    user,
    password,
    passwordConfirmation,
  });

  return user;
};
