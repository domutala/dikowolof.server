import Orthograph from "../_entities/Orthograph";
import _get from "./_get";
import _getWord from "../word/_getOrFaild";

/**
 * @author domutala
 * @description ajouter un nouvel object
 */

const test = (value?: string) => {
  if (!value || !value.length) return false;

  const r = /.{1,}/gm;
  const test = r.test(value);
  if (!test) return false;

  const r0 = /(^ )/gm;
  const test0 = r0.test(value);
  if (test0) return false;

  const r2 = /\n/gim;
  const test2 = r2.test(value);
  if (test2) return false;

  return true;
};

export default async ({
  id,
  word,
  user,
  value,
}: {
  id: string;
  word: string;
  user: string;
  value: string;
}) => {
  value = value.trim();

  if (!test(value)) {
    const error = Error();
    error.name = "_orthograph:invalidOrthograph";
    throw error;
  }

  await _getWord(word);

  let orthograph: Orthograph | undefined;

  if (id) orthograph = await _get(id);
  if (!orthograph) orthograph = new Orthograph();

  orthograph.word = word;
  orthograph.user = user;
  orthograph.value = value;

  await orthograph.save();

  return orthograph;
};
