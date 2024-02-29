import { Router } from "express";
import reserveRouter from "./reserve.route.js";
import courtRouter from "./court.route.js";
import userRouter from "./user.route.js";
import authRouter from "./auth.route.js";
import archiveRouter from "./archive.route.js";

const router = Router();
// teste
router.use("/reserve", reserveRouter);
router.use("/court", courtRouter);
router.use("/user", userRouter);
router.use("/archive", archiveRouter);
router.use("/auth", authRouter);

export default router;
