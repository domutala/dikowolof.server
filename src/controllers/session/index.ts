import * as express from "express";

import init from "./_init";
import login from "./_login";
import forgetPassword from "./forgetPassword";

const router = express.Router();

router.post("/init", init);
router.post("/login", login);
router.use("/forgetpassword", forgetPassword);

export default router;
