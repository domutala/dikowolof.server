import { Request, Response } from "express";
import sender from "../_functions/sender";
import _get from "@/services/word/get";

export default async (req: Request, res: Response) => {
  try {
    const word = await _get({ id: req.query.id as string });

    sender(req, res, { value: word });
  } catch (error: any) {
    sender(req, res, { error });
  }
};
