import { Request, Response } from "express";
import sender from "../_functions/sender";
import services from "../../services/session";

export default async (req: Request, res: Response) => {
  try {
    await services.login({
      session: req.session as any,
      email: req.body.email,
      password: req.body.password,
    });

    sender(req, res, { value: true });
  } catch (error: any) {
    sender(req, res, { error });
  }
};
