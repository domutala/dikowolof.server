import { getMongoRepository } from "typeorm";
import Value from "../../_entities/Value";

export interface Params {
  word: string;
}

export default async (params: Params) => {
  if (typeof params.word !== "string" || params.word.length !== 24) {
    const error = Error();
    error.name = "_value:list:invalidParams";
    throw error;
  }

  let _ids: string[] = [];
  const aggreagate: any[] = [];

  const $match: any = {};
  const $and: any[] = [];
  const $or: any[] = [];

  $and.push({ "params.word": { $eq: params.word } });

  if ($and.length) $match.$and = $and;
  if ($or.length) $match.$or = $or;

  aggreagate.push(
    ...[
      { $match },
      { $sort: { "params.note": 1, "params.value": 1 } },
      { $group: { _id: null, array: { $push: { $toString: "$_id" } } } },
      { $project: { array: true, _id: false } },
    ]
  );

  const a = await getMongoRepository(Value).aggregate(aggreagate).toArray();
  if (a.length && a[0].array) _ids = a[0].array;

  return _ids;
};
