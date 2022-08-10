import * as express from "express";
import middlewares from "./_functions/middlewares";
import servile from "@/servile";

import session from "./session";
import word from "./word";
import file from "./file";
import user from "./user";

export const init = async (App: express.Express) => {
  const router = express.Router();

  await servile.init(router);

  router.use(middlewares.decryptHeaders);
  router.use(middlewares.decryptParams);
  router.use(middlewares.decryptBody);
  router.use(middlewares.token);

  router.use("/session", session);
  router.use("/word", word);
  router.use("/user", user);
  router.use("/file", file);

  App.use(router);
};
