import * as express from "express";

import name from "./_name";

const router = express.Router();

router.post("/name", name);

export default router;
