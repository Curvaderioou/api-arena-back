import archiveController from "../controllers/archive.controller.js";

import { Router } from "express";
import authMiddleware from "../middlewares/auth.middleware.js";

const archiveRouter = Router();
archiveRouter.use(authMiddleware);
archiveRouter.get("/", archiveController.findAllArchivesController);
archiveRouter.post("/create", archiveController.createArchiveController);

export default archiveRouter;
