import * as express from "express";
import _isSessionValid from "@/controllers/_functions/middlewares/_isSessionValid";

import update from "./update";
import getmine from "./_getmine";

const router = express.Router();

router.use("/update", [_isSessionValid], update);
router.post("/getmine", [_isSessionValid], getmine);

export default router;
