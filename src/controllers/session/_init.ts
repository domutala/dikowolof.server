import * as jwtoken from "jsonwebtoken";
import { Request, Response } from "express";

import sender from "../_functions/sender";
import _init from "../../services/session/init";
import rsa from "@/utils/rsa";

export default async (req: Request, res: Response) => {
  try {
    const client_publicKey = req.body.publicKey as string;
    const session = await _init({ clientPublicKey: client_publicKey });

    const token = jwtoken.sign(
      { id: session.id },
      Buffer.from(rsa.get().private_key, "base64"),
      { header: { typ: "JWT", alg: "HS256" } }
    );

    req.session = session as any;
    const response = { token, publicKey: rsa.get().public_key };

    sender(req, res, { value: response });
  } catch (error: any) {
    sender(req, res, { error });
  }
};
