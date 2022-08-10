import * as express from "express";

import isSessionHaveUser from "../_functions/middlewares/_isSessionHaveUser";
import isSessionValid from "../_functions/middlewares/_isSessionValid";

import add from "./_add";
import data from "./_data";

const router = express.Router();

router.use(isSessionValid);
router.post("/add", isSessionHaveUser, add);
router.post("/data", data);

export default router;
