import { getMongoRepository } from "typeorm";
import { ObjectID } from "mongodb";

import Word from "../_entities/Word";

/**
 * @author domutala
 */
export default async (id: string) => {
  if (!id || typeof id !== "string" || id.length !== 24) {
    const error = Error();
    error.name = "_word:invalidData";
    throw error;
  }

  const where = { _id: { $eq: ObjectID(id) } };
  const word = await getMongoRepository(Word).findOne({ where });

  return word;
};
