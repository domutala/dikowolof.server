import { getMongoRepository } from "typeorm";
import User from "../_entities/User";

/**
 * @author domutala
 * @version 0.2.0
 */
export default async ({ email }: { email: string }) => {
  let ids: string[] = [];

  const aggreagate: any[] = [];
  const $match: any = {};
  const $or: any[] = [];

  if (email) $or.push({ "params.email": new RegExp(email, "gim") });

  if ($or.length) $match.$or = $or;

  aggreagate.push(
    ...[
      { $match },
      { $sort: { "params.name": 1 } },
      { $group: { _id: null, array: { $push: { $toString: "$_id" } } } },
      { $project: { array: true, _id: false } },
    ]
  );

  const a = await getMongoRepository(User).aggregate(aggreagate).toArray();
  if (a.length && a[0].array) ids = a[0].array;

  return ids;
};
