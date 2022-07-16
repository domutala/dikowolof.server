import { MSession } from "@/models/Session";
import toObject from "../toObject";
import Session from "../_entities/Session";

export default async ({ publicKey }: { publicKey: string }) => {
  if (!publicKey) {
    const error = Error();
    error.name = "_session:publickeyRequired";
    throw error;
  }

  const session = new Session();
  session.params = { keys: { public: publicKey } };
  await session.save();

  return toObject<MSession>(session as any) as MSession;
};
