import * as express from "express";

import add from "./_add";
import filter from "./_filter";
import get from "./_get";

const router = express.Router();

router.post("/add", add);
router.post("/filter", filter);
router.post("/get", get);

export default router;
