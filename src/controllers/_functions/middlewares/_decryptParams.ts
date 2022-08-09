import { NextFunction, Request, Response } from "express";
import rsa from "@/utils/rsa";
import sender from "../sender";

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    // skip if req start with servile
    if (req.url.startsWith("/servile")) return next();

    if (req.body && req.body.params) {
      const params: { [key: string]: any } = JSON.parse(
        rsa.decrypter({ data: req.body.params })
      );

      for (const key of Object.keys(params)) {
        req.query[key] = params[key];
      }

      delete req.body.params;
    }

    next();
  } catch (error: any) {
    sender(req, res, { error });
  }
};
