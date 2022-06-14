import { getMongoRepository } from "typeorm";
import { ObjectID } from "mongodb";

import Orthograph from "../_entities/Orthograph";

/**
 * @author domutala
 */
export default async (id: string) => {
  if (!id || typeof id !== "string" || id.length !== 24) {
    const error = Error();
    error.name = "_orthograph:invalidData";
    throw error;
  }

  const where = { _id: { $eq: ObjectID(id) } };
  const orthograph = await getMongoRepository(Orthograph).findOne({ where });

  return orthograph;
};
