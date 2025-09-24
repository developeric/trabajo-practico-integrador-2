import { Router } from "express";
import { createComment, deleteComment, getComment, getCommentByID, updateComment } from "../controllers/comment.controller.js";
export const routerComment = Router();

routerComment.post("/comment",createComment)
routerComment.get("/comment",getComment)
routerComment.put("/comment/:id",updateComment)
routerComment.get("/comment/:id",getCommentByID)
routerComment.delete("/comment/:id",deleteComment)