import MUser from "@/models/User";
import toObject from "../toObject";
import User from "../_entities/User";
import _get from "./get";

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

  const user = new User();

  const u = await _get({ uid: params.uid });
  if (u) user.params = u.params;

  user.params = { name: params.name, uid: params.uid };

  await user.save();

  return toObject<MUser>(user as any) as MUser;
};
