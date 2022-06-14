import { Request, Response } from "express";

import sender from "../_functions/sender";
import _remove from "../../services/orthograph/_remove";

export default async (req: Request, res: Response) => {
  try {
    const orthograph = await _remove({ id: req.query.id as string });
    sender(req, res, { value: orthograph });
  } catch (error: any) {
    sender(req, res, { error });
  }
};
