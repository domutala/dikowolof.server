import { getMongoRepository } from "typeorm";
import Session from "../../_entities/Session";
import get from "../getOrFaild";
import _userGet from "@/data/user/getOrFaild";
import { MSession } from "@/models/Session";

export interface Params {
  id: string;
  user: string;
}

const test = async (params: { user: string; session: MSession }) => {
  await _userGet({ id: params.user });

  if (params.session.params.user) {
    const error = Error();
    error.name = "_session:haveAlreadyUser";
    throw error;
  }

  return true;
};

/**
 * @author domutala
 */
export default async (params: Params) => {
  const session = await get({ id: params.id });
  await test({ ...params, session });

  session.params.user = { id: params.user };
  await getMongoRepository(Session).update(session.id, session);

  return await get({ id: params.id });
};
