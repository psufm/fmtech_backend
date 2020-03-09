import express from "express";
import routes from "../routes";
import { googleLogin, loginCallback } from "../controller/loginController";

const loginRouter = express.Router();

loginRouter.get(routes.callback, loginCallback);
loginRouter.get(routes.google, googleLogin);

export default loginRouter;
