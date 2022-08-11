import { Request, Response } from "express";
import sender from "../../_functions/sender";
import _list from "@/services/word/mean/list";

export default async (req: Request, res: Response) => {
  try {
    const ids = await _list({ ...(req.query as any) });
    sender(req, res, { value: ids });
  } catch (error: any) {
    sender(req, res, { error });
  }
};
