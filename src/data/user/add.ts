import MUser from "@/models/User";
import User from "../_entities/User";
import _get from "./get";
import _getOrFaild from "./getOrFaild";

export interface Params {
  name: string;
  uid: string;
}

const test = async (params: Params) => {
  if (typeof params.name !== "string") {
    const error = Error();
    error.name = "_user_add:phoneIsInvalid";
    throw error;
  }

  return true;
};

/**
 * @author domutala
 */
export default async (params: Params) => {
  await test(params);

  let user: MUser;

  const u = await _get({ uid: params.uid });
  if (u) user = u;
  else {
    const u = new User();
    u.params = { name: params.name, uid: params.uid };
    await u.save();

    user = await _getOrFaild({ uid: u.params.uid });
  }

  return user;
};
