import * as moment from "moment";
import { Request, Response } from "express";

import sender from "../_functions/sender";
import _get from "../../services/word/_get";

export default async (req: Request, res: Response) => {
  try {
    let word: any = await _get({ id: req.query.id as string });

    if (word) {
      if (req.query.updatedAt) {
        const last = moment(req.query.updatedAt as string);
        if (last.isValid()) {
          if (moment(word.updatedAt).isSame(last)) {
            word = true;
          }
        }
      }
    }

    sender(req, res, { value: word });
  } catch (error: any) {
    sender(req, res, { error });
  }
};
