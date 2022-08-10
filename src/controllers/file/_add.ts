import { Request, Response } from "express";
import * as jwtoken from "jsonwebtoken";
import sender from "../_functions/sender";
import rsa from "@/utils/rsa";

export default async (req: Request, res: Response) => {
  try {
    const token = jwtoken.sign(
      { add: true },
      Buffer.from(rsa.get().private_key, "base64"),
      { header: { typ: "JWT", alg: "HS256" } }
    );

    sender(req, res, { value: token });
  } catch (error: any) {
    sender(req, res, { error });
  }
};
