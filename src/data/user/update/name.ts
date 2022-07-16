import { getMongoRepository } from "typeorm";
import User from "../../_entities/User";
import _get from "../getOrFaild";

interface Params {
  id: string;
  name: string;
}

const test = async (params: Params) => {
  if (typeof params.name !== "string") {
    const error = Error();
    error.name = "_user:update:nameIsInvalid";
    throw error;
  }

  return true;
};

/**
 * @author domutala
 */
export default async (params: Params) => {
  await test(params);

  const user = await _get({ id: params.id });
  user.params.name = params.name;

  delete (user as any).updatedAt;
  await getMongoRepository(User).update(user.id, user);

  return await _get({ id: params.id });
};
