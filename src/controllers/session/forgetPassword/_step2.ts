import { Request, Response } from "express";

import sender from "../../_functions/sender";
import services from "../../../services/session/forgetPassword";

export default async (req: Request, res: Response) => {
  try {
    const token = await services.step2({
      token: req.body.token,
      code: req.body.code,
    });

    sender(req, res, { value: { token } });
  } catch (error: any) {
    sender(req, res, { error });
  }
};
