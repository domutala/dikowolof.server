import { NextFunction, Request, Response } from "express";
import sender from "../../_functions/sender";

export const cani = async (req: Request, res: Response, next: NextFunction) => {
  if (req.query.id !== req.session?.userId) {
    return sender(req, res, {
      error: { text: "_user:notAuthorized" },
    });
  }

  return next();
};

export const forPassword = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.query.id !== req.session?.userId) {
    return sender(req, res, {
      error: { text: "_user:notAuthorized" },
    });
  }

  return next();
};
