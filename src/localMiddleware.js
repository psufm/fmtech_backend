import routes from "./routes";
import ip from "ip";

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

export const googleClientInfo = {
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: `${IP}:${process.env.PORT}/auth/google/callback`
};

export const checkEmailAddress = address => {
  return address.findIndex(name => {
    name === process.env.MAIL;
  });
};
