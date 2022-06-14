import Session from "../../data/_entities/Session";
import data from "../../data/session";

export default async ({ session }: { session?: Session }) => {
  if (session) await data.update({ id: session.id.toString(), expired: true });
  return true;
};
