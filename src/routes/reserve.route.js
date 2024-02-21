import reserveController from "../controllers/reserve.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

import { Router } from "express";

const reserveRouter = Router();

reserveRouter.get("/", reserveController.findAllReservesController);

reserveRouter.use(authMiddleware);

reserveRouter.post("/create", reserveController.createReserveController);
reserveRouter.get("/:id", reserveController.findReserveByIdController);
reserveRouter.get(
  "/byCourtId/:id",
  reserveController.findReserveByCourtIdController
);
reserveRouter.patch("/update/:id", reserveController.updateReserveController);

export default reserveRouter;
