import { Request, Response } from "express";

import sender from "../../../_functions/sender";
import _create from "../../../../services/user/params/name/_create";
import get from "./_get";

export default async (req: Request, res: Response) => {
  try {
    await _create({ id: req.query.id as string, name: req.body.name });
    get(req, res);
  } catch (error: any) {
    sender(req, res, { error });
  }
};
