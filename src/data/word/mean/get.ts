import { getMongoRepository } from "typeorm";
import { ObjectID } from "mongodb";
import Mean from "../../_entities/Mean";
import MMean from "../../../models/Mean";
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
    error.name = "_mean:invalidParams";
    throw error;
  }

  if (typeof params.id !== "string" || params.id.length !== 24) {
    const error = Error();
    error.name = "_mean:invalidParams";
    throw error;
  }

  const mean = await getMongoRepository(Mean).findOne({
    where: { _id: { $eq: ObjectID(params.id) } },
  });

  return toObject<MMean>(mean as any);
};
