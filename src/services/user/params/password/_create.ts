import data from "../../../../data/user";

export default async ({
  id,
  password,
  passwordConfirmation,
}: {
  id: string;
  password: string;
  passwordConfirmation: string;
}) => {
  let user = await data.getOrFaild(id);
  user = await data.params.password.create({
    user,
    password,
    passwordConfirmation,
  });
  return user;
};
