import courtController from "../controllers/court.controller.js";

import { Router } from "express";
import authMiddleware from "../middlewares/auth.middleware.js";

const courtRouter = Router();

courtRouter.use(authMiddleware);

courtRouter.get("/", courtController.findAllCourtsController);
courtRouter.post("/create", courtController.createCourtController);

export default courtRouter;
