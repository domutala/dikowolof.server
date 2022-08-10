import { getMongoRepository } from "typeorm";
import User from "../../_entities/User";
import _get from "../getOrFaild";
import _getFile from "@/servile/src/data/get";

interface Params {
  id: string;
  file: string;
}

const test = async (params: Params) => {
  const file = await _getFile({ id: params.file });
  if (!file) {
    const error = Error();
    error.name = "_user:update:notFileFound";
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
  delete (user as any).updatedAt;

  user.params.avatar = params.file;

  delete (user as any).updatedAt;
  await getMongoRepository(User).update(user.id, user);

  return await _get({ id: params.id });
};
