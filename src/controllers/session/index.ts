import * as express from "express";

import isSessionHaveUser from "../_functions/middlewares/_isSessionHaveUser";
import isSessionValid from "../_functions/middlewares/_isSessionValid";

import init from "./_init";
import login from "./_login";
import logout from "./_logout";

const router = express.Router();

router.post("/init", init);
router.post("/login", [isSessionValid], login);
router.post("/logout", [isSessionValid, isSessionHaveUser], logout);

export default router;
