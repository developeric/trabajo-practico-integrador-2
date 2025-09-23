import { Router } from "express";
import { createArticle } from "../controllers/article.controller.js";
export const routerArticle = Router();

routerArticle.post("/article", createArticle);
