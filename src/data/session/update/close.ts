import { getMongoRepository } from "typeorm";
import Session from "../../_entities/Session";
import get from "../getOrFaild";

export interface Params {
  id: string;
  close: boolean;
}

const test = (params: Params) => {
  if (typeof params.close !== "boolean") {
    const error = Error();
    error.name = "_session_update:closeIsInvalid";
    throw error;
  }

  return true;
};

/**
 * @author domutala
 */
export default async (params: Params) => {
  test(params);
  const session = await get({ id: params.id });
  session.params.close = params.close;

  await getMongoRepository(Session).update(session.id, session);

  return await get({ id: params.id });
};
