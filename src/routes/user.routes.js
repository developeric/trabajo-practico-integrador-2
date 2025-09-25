import { Router } from "express";
export const routerUser = Router();
import { updateUser,getUser,getUserByID,deleteUser } from "../controllers/user.controller.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { adminMiddleware } from "../middlewares/adminMiddleware.js";

routerUser.use(authMiddleware,adminMiddleware)
//
//Get All Users
routerUser.get("/users",getUser);
//Update User
routerUser.put("/users/:id", updateUser);
//Get User by ID
routerUser.get("/users/:id", getUserByID);
//Delete User
routerUser.delete("/users/:id", deleteUser);

//FindUserWithArticlesAndComments