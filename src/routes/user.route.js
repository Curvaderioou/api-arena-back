import userController from "../controllers/user.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

import { Router } from "express";

const userRouter = Router();

userRouter.post("/create", userController.createUserController);

userRouter.use(authMiddleware);
userRouter.get("/", userController.findAllUserController);

userRouter.get("/findById/:id?", userController.findUserByIdController);

export default userRouter;
