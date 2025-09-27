import { Router } from "express";
import { createArticle, deleteArticle, getArticle, getArticleByID, getArticleWithUser, updateArticle } from "../controllers/article.controller.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { ownerOrAdmin } from "../middlewares/ownerOrAdminMiddleware.js";
import { createArticleValidation,deleteArticleValidation,getArticleByIdValidation,updateArticleValidation } from "../middlewares/validations/article.validator.js";
import { aplicarValidaciones } from "../middlewares/validator.js";

export const routerArticle = Router();

routerArticle.use(authMiddleware)

routerArticle.post("/articles",createArticleValidation,aplicarValidaciones,createArticle)
routerArticle.get("/articles",getArticle)
//ArticleWithLogUser
routerArticle.get("/articles/my",getArticleWithUser,getArticle)
routerArticle.put("/articles/:id",ownerOrAdmin,updateArticleValidation,aplicarValidaciones,updateArticle)
routerArticle.get("/articles/:id",getArticleByIdValidation,aplicarValidaciones,getArticleByID)
routerArticle.delete("/articles/:id",ownerOrAdmin,deleteArticleValidation,aplicarValidaciones,deleteArticle)
