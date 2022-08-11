import * as express from "express";

import isSessionHaveUser from "../../_functions/middlewares/_isSessionHaveUser";

import add from "./_add";
import get from "./_get";
import list from "./_list";

const router = express.Router();

router.post("/add", isSessionHaveUser, add);
router.post("/get", get);
router.post("/list", list);

export default router;
