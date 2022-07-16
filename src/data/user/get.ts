import { getMongoRepository } from "typeorm";
import { ObjectID } from "mongodb";
import User from "../_entities/User";
import MUser from "../../models/User";
import toObject from "../toObject";

export interface Params {
  id?: string;
  uid?: string;
}

/**
 * @author domutala
 */
export default async (params: Params) => {
  if (!Object.keys(params).length) {
    const error = Error();
    error.name = "_user:invalidParams";
    throw error;
  }

  if (params.id && (typeof params.id !== "string" || params.id.length !== 24)) {
    const error = Error();
    error.name = "_user:invalidParams";
    throw error;
  }

  const where: any = { $or: [] };

  if (params.id) where.$or.push({ _id: { $eq: ObjectID(params.id) } });
  if (params.uid) where.$or.push({ "params.uid": { $eq: params.uid } });

  const user = await getMongoRepository(User).findOne({ where });

  return toObject<MUser>(user as any);
};
