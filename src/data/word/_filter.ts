import { getMongoRepository } from "typeorm";
import Word from "../_entities/Word";
/**
 * @author domutala
 */
export default async ({ text }: { text?: string }) => {
  let _ids: string[] = [];
  const aggreagate: any[] = [];

  const $match: any = {};
  const $and: any[] = [];
  const $or: any[] = [];

  if (text) {
    aggreagate.push({
      $lookup: {
        from: "orthograph",
        as: "orthographword",
        let: { id: { $toString: "$_id" } },
        pipeline: [
          {
            $match: {
              $expr: { $eq: ["$$id", "$word"] },
              value: new RegExp(text, "gim"),
            },
          },
        ],
      },
    });

    $match.orthographword = { $ne: [] };
  }

  if ($and.length) $match.$and = $and;
  if ($or.length) $match.$or = $or;

  aggreagate.push(
    ...[
      { $match },
      { $sort: { "orthographword.value": 1 } },
      { $group: { _id: null, array: { $push: { $toString: "$_id" } } } },
      { $project: { array: true, _id: false } },
    ]
  );

  const a = await getMongoRepository(Word).aggregate(aggreagate).toArray();
  if (a.length && a[0].array) _ids = a[0].array;

  return _ids;
};
