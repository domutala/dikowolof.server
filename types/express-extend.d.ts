import { EFile } from "@/models/File";
import { ISession } from "../src/models/Session";

declare global {
  namespace Express {
    interface Request {
      session?: ISession;
      public_key: string;
      ftoken?: {
        session: string;
        file: string;
      };

      nfiles?: Array<EFile>;
    }
  }
}
