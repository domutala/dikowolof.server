import { Request, Response } from "express";

import sender from "../../_functions/sender";
import services from "../../../services/session/forgetPassword";

export default async (req: Request, res: Response) => {
  try {
    await services.step3({
      token: req.body.token,
      password: req.body.password,
      passwordConfirmation: req.body.passwordConfirmation,
    });

    sender(req, res, { value: true });
  } catch (error: any) {
    sender(req, res, { error });
  }
};
