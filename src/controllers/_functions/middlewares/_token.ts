import { NextFunction, Request, Response } from "express";
import * as jwtoken from "jsonwebtoken";

import _sessionGet from "../../../services/session/get";
import _userGet from "../../../services/user/get";
import rsa from "@/utils/rsa";
import sender from "../sender";

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    // skip if req start with servile
    if (req.url.startsWith("/servile")) return next();

    let token = req.headers.token as string;
    if (token && token.split(" ")[0] === "Bearer") token = token.split(" ")[1];

    if (token) {
      const sess = jwtoken.verify(
        token,
        Buffer.from(rsa.get().private_key, "base64")
      ) as any;

      req.session = (await _sessionGet({ id: sess.id })) as any;

      if (req.session) {
        if (req.session.user) {
          req.session.user = await _userGet(req.session.user);
        }
      }
    }

    next();
  } catch (error: any) {
    return sender(req, res, { error });
  }
};
