import * as express from "express";
import _isSessionValid from "@/controllers/_functions/middlewares/_isSessionValid";
import add from "./_add";
import data from "./_data";

const router = express.Router();

router.use(_isSessionValid);
router.post("/add", add);
router.post("/data", data);

export default router;
