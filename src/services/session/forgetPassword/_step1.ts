import * as jwtoken from "jsonwebtoken";

import utils from "../../../utils";
import _user from "../../../data/user";

export default async ({ email }: { email: string }) => {
  const id = await _user.listOrFaild({ email });
  const user = await _user.getOrFaild(id[0]);

  const code = utils.token.generate_1({ length: 6 });
  const token = jwtoken.sign(
    { code, user: user.id },
    Buffer.from(utils.rsa.get().private_key, "base64"),
    { header: { typ: "JWT", alg: "HS256" }, expiresIn: "1h" }
  );

  console.log(code);

  return token;
};
