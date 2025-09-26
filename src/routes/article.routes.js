import { Router } from "express";
import { createArticle, deleteArticle, getArticle, getArticleByID, getArticleWithUser, updateArticle } from "../controllers/article.controller.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { ownerOrAdmin } from "../middlewares/ownerOrAdminMiddleware.js";
export const routerArticle = Router();

routerArticle.use(authMiddleware)

routerArticle.post("/articles",createArticle)
routerArticle.get("/articles",getArticle)
//ArticleWithLogUser
routerArticle.get("/articles/my",getArticleWithUser,getArticle)
routerArticle.put("/articles/:id",ownerOrAdmin,updateArticle)
routerArticle.get("/articles/:id",getArticleByID)
routerArticle.delete("/articles/:id",ownerOrAdmin,deleteArticle)
