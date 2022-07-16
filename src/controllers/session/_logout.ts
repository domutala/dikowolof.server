import { Request, Response } from "express";
import sender from "../_functions/sender";
import _logout from "@/services/session/logout";

export default async (req: Request, res: Response) => {
  try {
    await _logout({ session: req.session as any });
    sender(req, res, { value: true });
  } catch (error: any) {
    sender(req, res, { error });
  }
};
