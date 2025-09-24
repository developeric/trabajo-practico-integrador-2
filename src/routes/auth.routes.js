import { Router } from "express";
import { Register, Login, Logout } from "../controllers/auth.controller.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
export const routerAuth = Router();

//Register
routerAuth.post("/auth/register", Register);
//Login
routerAuth.post("/auth/login", Login);
//Logout
routerAuth.post("/auth", authMiddleware, Logout);

//Profiles
