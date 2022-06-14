import * as express from "express";
import middlewares from "../_functions/middlewares";

import get from "./_get";
import remove from "./_remove";
import create from "./_create";

const router = express.Router();

router.post("/get", get);
router.post("/create", middlewares.isLogin, create);
router.post("/remove", remove);

export default router;
