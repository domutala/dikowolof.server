import * as jwtoken from "jsonwebtoken";
import { Request, Response } from "express";

import sender from "../_functions/sender";
import services from "../../services/session";
import utils from "../../utils";

export default async (req: Request, res: Response) => {
  try {
    const client_publicKey = req.body.publicKey as string;

    const session = await services.create({
      publicKey: client_publicKey,
      session: req.session,
    });

    const token = jwtoken.sign(
      { id: session.id },
      Buffer.from(utils.rsa.get().private_key, "base64"),
      { header: { typ: "JWT", alg: "HS256" } }
    );

    req.session = session;

    const response: any = {
      token,
      publicKey: utils.rsa.get().public_key,
    };

    sender(req, res, { value: response });
  } catch (error: any) {
    sender(req, res, { error });
  }
};
