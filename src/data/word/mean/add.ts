import IMean from "@/models/Mean";
import toObject from "../../toObject";
import Mean from "../../_entities/Mean";
import _getWord from "@/data/word/get";
import _updateWordMean from "@/data/word/update/mean";

export interface Params {
  value: string;
  user?: string;
  word: string;
}

const test = async (params: Params) => {
  if (!params.value) {
    const error = Error();
    error.name = "_mean:add:valueIsRequired";
    throw error;
  }

  if (typeof params.value !== "string") {
    const error = Error();
    error.name = "_mean:add:valueIsRequired";
    throw error;
  }

  const word = await _getWord({ id: params.word });
  if (!word) {
    const error = Error();
    error.name = "_mean:add:wordNotFound";
    throw error;
  }

  return word;
};

export default async (params: Params) => {
  const word = await test(params);

  const mean = new Mean();
  mean.params = {
    value: params.value,
    addedBy: params.user,
    note: 0,
    word: params.word,
  };

  await mean.save();

  if (!word.params.mean) {
    _updateWordMean({
      id: params.word,
      value: params.value,
      user: params.user,
    });
  }

  return toObject<IMean>(mean as any) as IMean;
};
