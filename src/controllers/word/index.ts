import * as express from "express";
import middlewares from "../_functions/middlewares";

import get from "./_get";
import filter from "./_filter";
import add from "./_add";

const router = express.Router();

router.post("/get", get);
router.post("/filter", filter);
router.post("/add", middlewares.isLogin, add);

export default router;
