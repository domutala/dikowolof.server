import { Request, Response } from "express";
import sender from "../../_functions/sender";
import _avatar from "@/services/user/update/avatar";

export default async (req: Request, res: Response) => {
  try {
    const user = await _avatar({
      file: req.body.file,
      id: req.session?.params.user?.id as string,
    });

    sender(req, res, { value: user });
  } catch (error: any) {
    sender(req, res, { error });
  }
};
