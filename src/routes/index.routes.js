import { Router } from "express";
import { routerArticle } from "./article.routes";
import { routerAuth } from "./auth.routes";
import { routerComment } from "./comment.routes";
import { routerTag } from "./tag.routes";
import { routerUser } from "./user.routes";

export const routes = Router();

routes.use(routerArticle);
routes.use(routerAuth);
routes.use(routerComment);
routes.use(routerTag);
routes.use(routerUser);
