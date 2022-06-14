import { NextFunction, Request, Response } from "express";
import utils from "../../../utils";
import sender from "../sender";

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (req.body && req.body.headers) {
      const headers: { [key: string]: any } = JSON.parse(
        utils.rsa.decrypter({ data: req.body.headers })
      );

      for (const key of Object.keys(headers)) {
        req.headers[key] = headers[key];
      }

      delete req.body.headers;
    }

    next();
  } catch (error: any) {
    sender(req, res, { error });
  }
};
