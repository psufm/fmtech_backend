import express from "express";
import routes from "../routes";
import { googleLogin } from "../controller/loginController";

const globalRouter = express.Router();

globalRouter.get(routes.google, googleLogin);

export default globalRouter;
