import { NextFunction, Request, Response } from "express";

import sender from "../sender";
import testSession from "./testSession";

export default async (req: Request, res: Response, client: NextFunction) => {
  let token = req.headers.token as string;
  if (!token) token = req.query.token as string;
  if (token && token.split(" ")[0] === "Bearer") token = token.split(" ")[1];

  try {
    const session = await testSession(req.session);
    if (typeof session === "string") {
      return sender(req, res, { error: { text: session } });
    }

    req.session = session;
  } catch (error) {
    return sender(req, res, { error: { text: "_session:invalid" } });
  }

  return client();
};
