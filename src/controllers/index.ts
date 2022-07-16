import * as express from "express";
import middlewares from "./_functions/middlewares";

import session from "./session";
import word from "./word";
import user from "./user";

export const init = async (App: express.Express) => {
  const router = express.Router();

  router.use(middlewares.decryptHeaders);
  router.use(middlewares.decryptParams);
  router.use(middlewares.decryptFiles);
  router.use(middlewares.decryptBody);
  router.use(middlewares.token);

  router.use("/session", session);
  router.use("/word", word);
  router.use("/user", user);

  App.use(router);
};
