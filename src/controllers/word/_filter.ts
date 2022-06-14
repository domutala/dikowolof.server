import { Request, Response } from "express";

import sender from "../_functions/sender";
import _filter from "../../services/word/_filter";

export default async (req: Request, res: Response) => {
  try {
    const word = await _filter(req.query);
    sender(req, res, { value: word });
  } catch (error: any) {
    sender(req, res, { error });
  }
};
