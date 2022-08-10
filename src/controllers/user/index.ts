import * as express from "express";
import _isSessionValid from "@/controllers/_functions/middlewares/_isSessionValid";

import update from "./update";
import getmine from "./_getmine";
import get from "./_get";

const router = express.Router();

router.use("/update", [_isSessionValid], update);
router.post("/getmine", [_isSessionValid], getmine);
router.post("/get", get);

export default router;
