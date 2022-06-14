import { Request, Response } from "express";

import sender from "../_functions/sender";
import services from "../../services/user";

export default async (req: Request, res: Response) => {
  try {
    const user = await services.get({ id: req.query.id as string });
    sender(req, res, { value: user });
  } catch (error: any) {
    sender(req, res, { error });
  }
};
