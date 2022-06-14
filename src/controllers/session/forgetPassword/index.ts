import * as express from "express";

import step1 from "./_step1";
import step2 from "./_step2";
import step3 from "./_step3";

const router = express.Router();

router.post("/step1", step1);
router.post("/step2", step2);
router.post("/step3", step3);

export default router;
