import { Router } from "express";
import { createComment } from "../controllers/comment.controller.js";
export const routerComment = Router();

routerComment.post("/comment",createComment)