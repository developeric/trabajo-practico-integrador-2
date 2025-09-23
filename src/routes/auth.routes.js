import { Router } from "express";
import { Register, Login, Logout } from "../controllers/auth.controller.js";
export const routerAuth = Router()

//Register
routerAuth.use("/auth/register",Register)
//Login
routerAuth.use("/auth/login",Login)
//Logout
routerAuth.use("/auth",Logout)