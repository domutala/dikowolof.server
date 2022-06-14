import * as express from "express";

import * as middlewares from "../_middlewares";
import create from "./_create";

const router = express.Router();

router.post("/create", middlewares.forPassword, create);

export default router;
