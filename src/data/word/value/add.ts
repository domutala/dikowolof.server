import IValue from "@/models/Value";
import toObject from "../../toObject";
import Value from "../../_entities/Value";
import _getWord from "@/data/word/get";
import _updateWordValue from "@/data/word/update/value";

export interface Params {
  value: string;
  user?: string;
  word: string;
}

const test = async (params: Params) => {
  if (!params.value) {
    const error = Error();
    error.name = "_value:add:valueIsRequired";
    throw error;
  }

  if (typeof params.value !== "string") {
    const error = Error();
    error.name = "_value:add:valueIsRequired";
    throw error;
  }

  const word = await _getWord({ id: params.word });
  if (!word) {
    const error = Error();
    error.name = "_value:add:wordNotFound";
    throw error;
  }

  return word;
};

export default async (params: Params) => {
  const word = await test(params);

  const value = new Value();
  value.params = {
    value: params.value,
    addedBy: params.user,
    note: 0,
    word: params.word,
  };

  await value.save();

  if (!word.params.value) {
    _updateWordValue({
      id: params.word,
      value: params.value,
      user: params.user,
    });
  }

  return toObject<IValue>(value as any) as IValue;
};
