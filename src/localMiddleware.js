import routes from "./routes";
import ip from "ip";
import dotenv from "dotenv";

dotenv.config();

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "FM TECHNOLOGY";
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: true,
    id: 1
  };
  next();
};

export const IP = ip.address();

export const authenticateUser = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(301).redirect("/");
  }
};
