import { Router } from "express";
export const routerUser = Router();
import { updateUser,getUser,getUserByID,deleteUser } from "../controllers/user.controller.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { AdminMiddleware } from "../middlewares/adminMiddleware.js";

routerUser.use(authMiddleware,AdminMiddleware)
//
routerUser.get("/users",getUser);
routerUser.put("/users/:id", updateUser);
routerUser.get("/users/:id", getUserByID);
routerUser.delete("/users/:id", deleteUser);

