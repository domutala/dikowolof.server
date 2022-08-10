import * as jwtoken from "jsonwebtoken";
import rsa from "@/utils/rsa";
import _get from "../../data/user/get";

interface Params {
  id?: string;
  uid?: string;
}

/**
 * @author domutala
 */
export default async (params: Params) => {
  const user = await _get(params);

  if (user && user.params.avatar) {
    user.params.avatar = jwtoken.sign(
      { id: user.params.avatar },
      Buffer.from(rsa.get().private_key, "base64"),
      { header: { typ: "JWT", alg: "HS256" }, expiresIn: "24h" }
    );
  }

  return user;
};
