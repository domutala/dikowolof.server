import * as express from "express";

import isSessionHaveUser from "../_functions/middlewares/_isSessionHaveUser";
import isSessionValid from "../_functions/middlewares/_isSessionValid";

import add from "./_add";
import filter from "./_filter";
import get from "./_get";

const router = express.Router();

router.use(isSessionValid);
router.post("/add", isSessionHaveUser, add);
router.post("/filter", filter);
router.post("/get", get);

export default router;
