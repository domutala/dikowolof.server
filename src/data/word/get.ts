import { getMongoRepository } from "typeorm";
import { ObjectID } from "mongodb";
import Word from "../_entities/Word";
import MWord from "../../models/Word";
import toObject from "../toObject";

export interface Params {
  id: string;
}

/**
 * @author domutala
 */
export default async (params: Params) => {
  if (!Object.keys(params).length) {
    const error = Error();
    error.name = "_word:invalidParams";
    throw error;
  }

  if (typeof params.id !== "string" || params.id.length !== 24) {
    const error = Error();
    error.name = "_word:invalidParams";
    throw error;
  }

  const word = await getMongoRepository(Word).findOne({
    where: { _id: { $eq: ObjectID(params.id) } },
  });

  return toObject<MWord>(word as any);
};
