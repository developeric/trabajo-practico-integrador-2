import { Router } from "express";
import { Register, Login, Logout } from "../controllers/auth.controller.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { updateUserWithProfile, userWithProfile } from "../controllers/user.controller.js";
//
export const routerAuth = Router();

//Register
routerAuth.post("/auth/register", Register);
//Login
routerAuth.post("/auth/login", Login);
//Logout
routerAuth.post("/auth/logout", authMiddleware, Logout);
//Get Profile
routerAuth.get("/auth/profile",authMiddleware,userWithProfile)
//Update Profile
routerAuth.put("/auth/profile",authMiddleware,updateUserWithProfile)
