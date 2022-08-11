import { Request, Response } from "express";
import sender from "../../_functions/sender";
import _add from "@/services/word/value/add";

export default async (req: Request, res: Response) => {
  try {
    const value = await _add({
      ...req.body,
      user: req.session?.params.user?.id as string,
    });

    sender(req, res, { value });
  } catch (error: any) {
    sender(req, res, { error });
  }
};
