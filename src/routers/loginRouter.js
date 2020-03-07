import express from "express";
import routes from "../routes";
import { googleLogin, loginCallback } from "../controller/loginController";

const loginRouter = express.Router();

loginRouter.get(routes.google, googleLogin);
loginRouter.get(routes.callback, loginCallback);

export default loginRouter;
