import IWord from "@/models/Word";
import toObject from "../toObject";
import Word from "../_entities/Word";
import _addValue from "./value/add";

interface Params {
  value: string;
  user: string;
}

const test = async (params: Params) => {
  if (!params.value) {
    const error = Error();
    error.name = "_word:add:wordIsRequired";
    throw error;
  }

  if (typeof params.value !== "string") {
    const error = Error();
    error.name = "_word:add:wordIsRequired";
    throw error;
  }

  return true;
};

export default async (params: Params) => {
  await test(params);

  const word = new Word();
  word.params = { value: params.value, addedBy: params.user };

  await word.save();

  await _addValue({
    value: params.value,
    user: params.user,
    word: word.id.toString(),
  });

  return toObject<IWord>(word as any) as IWord;
};
