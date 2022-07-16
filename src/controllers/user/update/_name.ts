import { Request, Response } from "express";
import sender from "../../_functions/sender";
import _name from "@/services/user/update/name";

export default async (req: Request, res: Response) => {
  try {
    const user = await _name({
      name: req.body.name,
      id: req.session?.params.user?.id as string,
    });

    sender(req, res, { value: user });
  } catch (error: any) {
    sender(req, res, { error });
  }
};
