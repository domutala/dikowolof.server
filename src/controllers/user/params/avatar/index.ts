import * as express from "express";

import * as middlewares from "../_middlewares";
import create from "./_create";
import get from "./_get";

const router = express.Router();

router.post("/get", get);
router.post("/create", middlewares.cani, create);

export default router;
