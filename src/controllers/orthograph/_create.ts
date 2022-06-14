import { Request, Response } from "express";

import sender from "../_functions/sender";
import _get from "../../services/orthograph/_get";
import _create from "../../services/orthograph/_create";

export default async (req: Request, res: Response) => {
  try {
    if (req.query.id) {
      const orthograph = await _get({ id: req.query.id as string });

      if (orthograph && orthograph.user !== req.session?.userId) {
        return sender(req, res, {
          error: { text: "_orthograph:notAuthorizedToUpdate" },
        });
      }
    }

    const orthograph = await _create({
      ...req.body,
      id: req.query.id as string,
      user: req.session?.userId,
    });

    sender(req, res, { value: orthograph });
  } catch (error: any) {
    sender(req, res, { error });
  }
};
