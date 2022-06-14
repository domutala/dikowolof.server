import { NextFunction, Request, Response } from "express";
import utils from "../../../utils";
import sender from "../sender";

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    let body: { [key: string]: any } = {};

    if (req.body && req.body.body) {
      body = JSON.parse(utils.rsa.decrypter({ data: req.body.body }));
    }

    body.publicKey = req.body.publicKey;
    req.body = body;

    next();
  } catch (error: any) {
    sender(req, res, { error });
  }
};
