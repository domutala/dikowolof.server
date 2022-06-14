import * as express from "express";

import get from "./_get";
import params from "./params";

const router = express.Router();

router.post("/get", get);
router.use("/params", params);

export default router;
