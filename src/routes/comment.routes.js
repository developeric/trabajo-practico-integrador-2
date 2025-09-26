import { Router } from "express";
import { createComment, deleteComment, getComment, getCommentByID, updateComment } from "../controllers/comment.controller.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { ownerOrAdmin } from "../middlewares/ownerOrAdminMiddleware.js";
export const routerComment = Router();

routerComment.use(authMiddleware)
routerComment.post("/comments/article/:articleId",createComment)
routerComment.get("/comments",getComment)
routerComment.put("/comments/:id",updateComment)
routerComment.get("/comments/:id",ownerOrAdmin,getCommentByID)
routerComment.delete("/comments/:id",ownerOrAdmin,deleteComment)