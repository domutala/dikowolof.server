export declare global {
  namespace Express {
    interface Request {
      serviletoken?: {
        add?: boolean;
        id?: string;
        type?: string[];
        extras?: any;
      };
    }
  }
}
