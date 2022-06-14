import { Request, Response } from "express";

import sender from "../../../_functions/sender";
import _create from "../../../../services/user/params/password/_create";

export default async (req: Request, res: Response) => {
  try {
    await _create({
      id: req.query.id as string,
      password: req.body.password,
      passwordConfirmation: req.body.passwordConfirmation,
    });

    sender(req, res, { value: true });
  } catch (error: any) {
    sender(req, res, { error });
  }
};
