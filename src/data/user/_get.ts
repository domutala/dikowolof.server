import { getMongoRepository } from "typeorm";
import { ObjectID } from "mongodb";

import User from "../_entities/User";

/**
 * Trouver un utilisateur
 * @author domutala
 * @version 0.2.0
 */
export default async (id?: string) => {
  // vérifier si les données sont correctes
  if (typeof id !== "string" || id.length !== 24) {
    const error = Error();
    error.name = "_user:invalidData";
    throw error;
  }

  const where = { _id: { $eq: ObjectID(id) } };
  const user = await getMongoRepository(User).findOne({ where });

  return user;
};
