import * as express from "express";

import isSessionHaveUser from "../_functions/middlewares/_isSessionHaveUser";
import isSessionValid from "../_functions/middlewares/_isSessionValid";

import update from "./update";
import getmine from "./_getmine";
import get from "./_get";

const router = express.Router();

router.use(isSessionValid);

router.use("/update", [isSessionHaveUser], update);
router.post("/getmine", [isSessionHaveUser], getmine);
router.post("/get", get);

export default router;
