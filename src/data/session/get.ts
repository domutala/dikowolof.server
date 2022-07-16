import { getMongoRepository } from "typeorm";
import { ObjectID } from "mongodb";
import Session from "../_entities/Session";
import { MSession } from "@/models/Session";
import toObject from "../toObject";

export interface Params {
  id: string;
}

/**
 * @author domutala
 */
export default async (params: Params) => {
  if (typeof params.id !== "string" || params.id.length !== 24) {
    const error = Error();
    error.name = "_session:invalidId";
    throw error;
  }
  const where: any = { _id: { $eq: ObjectID(params.id) } };
  const session = await getMongoRepository(Session).findOne({ where });

  return toObject<MSession>(session as any);
};
