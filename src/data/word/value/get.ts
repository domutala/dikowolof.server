import { getMongoRepository } from "typeorm";
import { ObjectID } from "mongodb";
import Value from "../../_entities/Value";
import MValue from "../../../models/Value";
import toObject from "../../toObject";

export interface Params {
  id: string;
}

/**
 * @author domutala
 */
export default async (params: Params) => {
  if (!Object.keys(params).length) {
    const error = Error();
    error.name = "_value:invalidParams";
    throw error;
  }

  if (typeof params.id !== "string" || params.id.length !== 24) {
    const error = Error();
    error.name = "_value:invalidParams";
    throw error;
  }

  const value = await getMongoRepository(Value).findOne({
    where: { _id: { $eq: ObjectID(params.id) } },
  });

  return toObject<MValue>(value as any);
};
