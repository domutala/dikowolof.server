import * as express from "express";
import middlewares from "./_functions/middlewares";

import session from "./session";
import user from "./user";
import word from "./word";

export const init = async (App: express.Express) => {
  const router = express.Router();

  router.use(middlewares.decryptHeaders);
  router.use(middlewares.decryptParams);
  router.use(middlewares.decryptBody);
  router.use(middlewares.token);

  router.use("/session", session);
  router.use("/user", user);
  router.use("/word", word);

  App.use(router);
};
