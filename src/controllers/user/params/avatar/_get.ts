import { Request, Response } from "express";

import sender from "../../../_functions/sender";
import _get from "../../../../services/user/params/avatar/_get";

export default async (req: Request, res: Response) => {
  try {
    const user = await _get({ id: req.query.id as string });

    sender(req, res, { value: user });
  } catch (error: any) {
    sender(req, res, { error });
  }
};
