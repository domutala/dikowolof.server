import * as express from "express";

import name from "./_name";
import avatar from "./_avatar";

const router = express.Router();

router.post("/name", name);
router.post("/avatar", avatar);

export default router;
