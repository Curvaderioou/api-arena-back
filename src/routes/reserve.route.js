import reserveController from "../controllers/reserve.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

import { Router } from "express";

const reserveRouter = Router();

reserveRouter.get("/", reserveController.findAllReservesController);
reserveRouter.get("/date", reserveController.findAllReservesOnDateController);
reserveRouter.get(
  "/search",
  reserveController.searchReservesByClientController
);

reserveRouter.use(authMiddleware);

reserveRouter.post("/create", reserveController.createReserveController);
reserveRouter.get("/:id", reserveController.findReserveByIdController);
reserveRouter.get(
  "/byCourtId/:id",
  reserveController.findReserveByCourtIdController
);
reserveRouter.patch("/update/:id", reserveController.updateReserveController);
reserveRouter.delete("/delete/:id", reserveController.deleteReserveController);

export default reserveRouter;
