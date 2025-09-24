import { Router } from "express";
import { createTag, deleteTag, getTag, getTagByID, updateTag } from "../controllers/tag.controller.js";
export const routerTag = Router();

routerTag.post("/tag", createTag);
routerTag.get("/tag", getTag);
routerTag.put("/tag/:id", updateTag);
routerTag.get("/tag/:id", getTagByID);
routerTag.delete("/tag/:id", deleteTag);
