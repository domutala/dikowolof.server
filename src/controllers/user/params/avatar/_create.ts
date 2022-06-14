import { Request, Response } from "express";

import sender from "../../../_functions/sender";
import _create from "../../../../services/user/params/avatar/_create";
import get from "./_get";

export default async (req: Request, res: Response) => {
  try {
    const user = await _create({
      id: req.query.id as string,
      file: req.body.file,
    });

    req.query.id = user.id.toString();
    get(req, res);
  } catch (error: any) {
    sender(req, res, { error });
  }
};
