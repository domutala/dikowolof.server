import { getMongoRepository } from "typeorm";
import Word from "../_entities/Word";

export interface Params {
  value?: string;
  user?: string;
  page?: number;
  perPage?: number;
}

export default async (params: Params) => {
  if (!params.perPage) params.perPage = 30;

  let _ids: string[] = [];
  const aggreagate: any[] = [];

  const $match: any = {};
  const $and: any[] = [];
  const $or: any[] = [];

  if (params.value) {
    $or.push({ "params.value": new RegExp(params.value, "gim") });
    $or.push({ "params.mean": new RegExp(params.value, "gim") });
  }

  if (params.user) {
    $and.push({ "params.addedBy": { $eq: params.user } });
  }

  if ($and.length) $match.$and = $and;
  if ($or.length) $match.$or = $or;

  const startAt = (params.page || 0) * params.perPage;

  aggreagate.push(
    ...[
      { $match },
      { $skip: startAt },
      { $limit: startAt + params.perPage },
      { $sort: { "params.value": 1 } },
      { $group: { _id: null, array: { $push: { $toString: "$_id" } } } },
      { $project: { array: true, _id: false } },
    ]
  );

  const a = await getMongoRepository(Word).aggregate(aggreagate).toArray();

  if (a.length && a[0].array) _ids = a[0].array;

  return _ids;
};
