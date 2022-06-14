import * as moment from "moment";
import { Request, Response } from "express";

import sender from "../_functions/sender";
import _get from "../../services/orthograph/_get";

export default async (req: Request, res: Response) => {
  try {
    let orthograph: any = await _get({ id: req.query.id as string });

    if (orthograph) {
      if (req.query.updatedAt) {
        const last = moment(req.query.updatedAt as string);
        if (last.isValid()) {
          if (moment(orthograph.updatedAt).isSame(last)) {
            orthograph = true;
          }
        }
      }
    }

    sender(req, res, { value: orthograph });
  } catch (error: any) {
    sender(req, res, { error });
  }
};
