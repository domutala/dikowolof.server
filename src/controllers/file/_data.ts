import { Request, Response } from "express";
import * as jwtoken from "jsonwebtoken";
import _get from "@/servile/src/services/get";
import sender from "../_functions/sender";
import rsa from "@/utils/rsa";

export default async (req: Request, res: Response) => {
  try {
    const file = await _get({ id: req.query.id as string });
    if (file) {
      delete (file as any).params.data;

      const token = jwtoken.sign(
        { id: file?.id },
        Buffer.from(rsa.get().private_key, "base64"),
        { header: { typ: "JWT", alg: "HS256" }, expiresIn: "24h" }
      );

      sender(req, res, { value: { ...file, token } });
    }

    sender(req, res, { value: null });
  } catch (error: any) {
    sender(req, res, { error });
  }
};
