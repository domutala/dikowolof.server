import { getMongoRepository } from "typeorm";
import { ObjectID } from "mongodb";
import Session from "../_entities/Session";

/**
 * @author domutala
 * @description trouver une sssion
 * @version 0.2.0
 */
export default async (id: string) => {
  if (typeof id !== "string" || id.length !== 24) {
    const error = Error();
    error.name = "_session:invalidId";
    throw error;
  }

  const where: any = { _id: { $eq: ObjectID(id) } };
  const session = await getMongoRepository(Session).findOne({ where });

  return session;
};
