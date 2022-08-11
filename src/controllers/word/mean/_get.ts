import { Request, Response } from "express";
import sender from "../../_functions/sender";
import _get from "@/services/word/mean/get";

export default async (req: Request, res: Response) => {
  try {
    const mean = await _get({ id: req.query.id as string });
    sender(req, res, { value: mean });
  } catch (error: any) {
    sender(req, res, { error });
  }
};
