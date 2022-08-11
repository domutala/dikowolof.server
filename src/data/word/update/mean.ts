import { getMongoRepository } from "typeorm";
import Word from "../../_entities/Word";
import _get from "../get";
import _getOrFaild from "../getOrFaild";

interface Params {
  value: string;
  user?: string;
  id: string;
}

const test = async (params: Params) => {
  if (!params.value) {
    const error = Error();
    error.name = "_word:update:value:wordIsRequired";
    throw error;
  }

  if (typeof params.value !== "string") {
    const error = Error();
    error.name = "_word:update:value:wordIsRequired";
    throw error;
  }

  const word = await _get({ id: params.id });
  if (!word) {
    const error = Error();
    error.name = "_word:update:value:wordNotFound";
    throw error;
  }

  return word;
};

export default async (params: Params) => {
  const word = await test(params);
  word.params.mean = params.value;

  delete (word as any).updatedAt;
  await getMongoRepository(Word).update(word.id, word);

  return await _getOrFaild({ id: params.id });
};
