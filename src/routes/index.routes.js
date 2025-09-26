import { Router } from "express";
import { routerArticle } from "./article.routes.js";
import { routerAuth } from "./auth.routes.js";
import { routerComment } from "./comment.routes.js";
import { routerTag } from "./tag.routes.js";
import { routerUser } from "./user.routes.js";

export const routes = Router();

routes.use(routerAuth);
routes.use(routerArticle);
routes.use(routerComment);
routes.use(routerTag);
routes.use(routerUser);
