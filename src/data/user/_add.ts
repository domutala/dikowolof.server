import User from "../_entities/User";

/**
 * @author domutala
 * @description ajouter un nouvel user
 */
export default async () => {
  const user = new User();
  user.params = {};

  await user.save();

  return user;
};
