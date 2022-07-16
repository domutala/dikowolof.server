import * as express from "express";

import init from "./_init";
import login from "./_login";
import logout from "./_logout";

const router = express.Router();

router.post("/init", init);
router.post("/login", login);
router.post("/logout", logout);

export default router;
