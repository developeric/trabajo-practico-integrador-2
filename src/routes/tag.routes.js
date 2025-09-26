import { Router } from "express";
import { createTag, deleteTag, getTag, getTagByID, updateTag } from "../controllers/tag.controller.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { adminMiddleware } from "../middlewares/adminMiddleware.js";
export const routerTag = Router();

routerTag.use(authMiddleware)

routerTag.post("/tags", adminMiddleware,createTag);
routerTag.get("/tags", getTag);
routerTag.put("/tags/:id", adminMiddleware,updateTag);
routerTag.get("/tags/:id", getTagByID);
routerTag.delete("/tags/:id",adminMiddleware, deleteTag);
