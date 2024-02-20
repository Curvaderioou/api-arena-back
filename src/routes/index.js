import { Router } from "express";
import reserveRouter from "./reserve.route.js";
import courtRouter from "./court.route.js";

const router = Router();

router.use("/reserve", reserveRouter);
router.use("/court", courtRouter);

export default router;
