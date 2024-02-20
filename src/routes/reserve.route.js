import reserveController from "../controllers/reserve.controller.js";

import { Router } from "express";

const reserveRouter = Router();

reserveRouter.post("/create", reserveController.createReserveController);
reserveRouter.get("/", reserveController.findAllReservesController);
reserveRouter.get("/:id", reserveController.findReserveByIdController);
reserveRouter.get(
  "/byCourtId/:id",
  reserveController.findReserveByCourtIdController
);
reserveRouter.patch("/update/:id", reserveController.updateReserveController);

export default reserveRouter;
