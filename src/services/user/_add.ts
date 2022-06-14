import data from "../../data/user";

export default async ({ name, email }: { name: string; email: string }) => {
  await data.params.name.test(name);
  await data.params.name.test(email);

  let user = await data.add();
  user = await data.params.name.create({ user, name });
  user = await data.params.email.create({ user, email });

  return user;
};
