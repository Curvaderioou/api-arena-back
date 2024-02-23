import { Router } from "express";
import reserveRouter from "./reserve.route.js";
import courtRouter from "./court.route.js";
import userRouter from "./user.route.js";
import authRouter from "./auth.route.js";

const router = Router();

router.use("/reserve", reserveRouter);
router.use("/court", courtRouter);
router.use("/user", userRouter);
router.use("/auth", authRouter);

export default router;
