import express from "express";
import routes from "../routes";
import { home } from "../controller/globalController";
import { authenticateUser } from "../localMiddleware";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.index, authenticateUser, index);

export default globalRouter;
