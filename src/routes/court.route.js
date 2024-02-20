import courtController from "../controllers/court.controller.js";

import { Router } from "express";

const courtRouter = Router();

courtRouter.get("/", courtController.findAllCourtsController);
courtRouter.post("/create", courtController.createCourtController);

export default courtRouter;
