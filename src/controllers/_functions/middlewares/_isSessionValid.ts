import { NextFunction, Request, Response } from "express";
import sender from "../sender";

export default async (req: Request, res: Response, next: NextFunction) => {
  // skip if req start with servile
  if (req.url.startsWith("/servile")) return next();

  if (!req.session) {
    return sender(req, res, { error: { text: "_session:required" } });
  }

  if (req.session.params.close) {
    return sender(req, res, { error: { text: "_session:closed" } });
  }

  if (req.session.user) {
    return sender(req, res, { error: { text: "_session:notConnected" } });
  }

  return next();
};
