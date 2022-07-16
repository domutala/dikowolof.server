import { NextFunction, Request, Response } from "express";
import rsa from "@/utils/rsa";
import sender from "../sender";

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (req.body && req.body.files) {
      const files: any[] = JSON.parse(rsa.decrypter({ data: req.body.files }));

      if (files) {
        for (const file of files) {
          const re = /(data:[^;]+\/[^;]+;base64[^"]+)/g;

          if (file && re.test(file.data)) {
            if (!req.nfiles) req.nfiles = [];
            req.nfiles.push({
              data: file.data,
              name: file.name,
              type: (file.data as string).split(";")[0].split(":")[1],
            });
          }
        }
      }

      delete req.body.files;
    }

    next();
  } catch (error: any) {
    sender(req, res, { error });
  }
};
