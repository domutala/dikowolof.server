import { NextFunction, Request, Response } from "express";
import * as jwtoken from "jsonwebtoken";

import _sessionGet from "../../../data/session/_get";
import _userGet from "../../../data/user/_get";
import utils from "../../../utils";
import sender from "../sender";

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    let token = req.headers.token as string;
    if (token && token.split(" ")[0] === "Bearer") token = token.split(" ")[1];

    if (token) {
      const sess = jwtoken.verify(
        token,
        Buffer.from(utils.rsa.get().private_key, "base64")
      ) as any;

      req.session = await _sessionGet(sess.id);

      if (req.session) {
        if (req.session.userId) {
          req.session.user = await _userGet(req.session.userId);
        }
      }
    }

    next();
  } catch (error: any) {
    return sender(req, res, { error });
  }

  // const ftoken = req.query.ftoken as string;
  // if (ftoken) {
  //   try {
  //     req.ftoken = jwtoken.verify(
  //       ftoken,
  //       Buffer.from(utils.rsa.get().private_key, "base64")
  //     ) as any;

  //     // eslint-disable-next-line no-empty
  //   } catch (error) {}
  // }
};
