import Session from "../src/data/_entities/Session";
import User from "../src/data/_entities/User";

declare class ISession extends Session {
  // _user?: User;
  user?: User;
}

declare global {
  namespace Express {
    interface Request {
      session?: ISession;
      public_key: string;
      ftoken?: {
        session: string;
        file: string;
      };
    }
  }
}
