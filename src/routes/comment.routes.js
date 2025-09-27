import { Router } from "express";
import { createComment, deleteComment, getComment, getCommentByID, getCommentsMy, getCommentWithAuthor, updateComment } from "../controllers/comment.controller.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { ownerOrAdmin } from "../middlewares/ownerOrAdminMiddleware.js";
export const routerComment = Router();

routerComment.use(authMiddleware)
//
routerComment.post("/comments",createComment)
//
routerComment.get("/comments/article/:articleId",getCommentWithAuthor)
//
routerComment.get("/comments/my",getCommentsMy)
//
routerComment.put("/comments/:id",updateComment)
routerComment.delete("/comments/:id",ownerOrAdmin,deleteComment)