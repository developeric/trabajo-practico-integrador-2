import { Router } from "express";
import { createTag } from "../controllers/tag.controller.js";
export const routerTag = Router();

routerTag.post("/tag", createTag);
