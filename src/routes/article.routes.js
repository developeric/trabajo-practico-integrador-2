import { Router } from "express";
import { createArticle, deleteArticle, getArticle, getArticleByID, updateArticle } from "../controllers/article.controller.js";
export const routerArticle = Router();

routerArticle.post("/article",createArticle)
routerArticle.get("/article",getArticle)
routerArticle.put("/article/:id",updateArticle)
routerArticle.get("/article/:id",getArticleByID)
routerArticle.delete("/article/:id",deleteArticle)
