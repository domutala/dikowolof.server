import { NextFunction, Request, Response } from "express";
import rsa from "@/utils/rsa";
import sender from "../sender";

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    let body: { [key: string]: any } = {};

    if (req.body && req.body.body) {
      body = JSON.parse(rsa.decrypter({ data: req.body.body }));
    }

    if (body === null) body = {};
    if (req.url === "/session/init") body.publicKey = req.body.publicKey;
    req.body = body;

    next();
  } catch (error: any) {
    sender(req, res, { error });
  }
};
