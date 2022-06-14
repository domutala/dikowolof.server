import * as express from "express";

import name from "./name";
import avatar from "./avatar";
import password from "./password";

const router = express.Router();

router.use("/name", name);
router.use("/avatar", avatar);
router.use("/password", password);

export default router;
