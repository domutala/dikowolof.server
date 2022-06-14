import Word from "../_entities/Word";

/**
 * @author domutala
 * @description ajouter un nouvel object
 */
export default async ({ user }: { user: string }) => {
  const word = new Word();
  word.user = user;
  await word.save();

  return word;
};
