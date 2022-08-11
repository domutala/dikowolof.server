import { Request, Response } from "express";
import sender from "../../_functions/sender";
import _add from "@/services/word/mean/add";

export default async (req: Request, res: Response) => {
  try {
    const mean = await _add({
      ...req.body,
      user: req.session?.params.user?.id as string,
    });

    sender(req, res, { value: mean });
  } catch (error: any) {
    sender(req, res, { error });
  }
};
