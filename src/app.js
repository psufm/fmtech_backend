import "./db";
import "./model/user";
import express from "express";
import bodyParser from "body-parser";
import { localsMiddleware } from "./localMiddleware";
import globalRouter from "./routers/globalRouter";
import loginRouter from "./routers/loginRouter";
import routes from "./routes";
import path from "path";
import passport from "passport";
import session from "express-session";

const app = express();

app.set("view engine", "pug");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    key: "sid",
    secret: "secret",
    saveUninitialized: false,
    resave: true,
    cookie: {
      maxAge: 3000 * 1000
    }
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, "static"))); //express에 static 폴더 내용 올림. 이걸통해 index.html이 참고를~
app.use(localsMiddleware);
app.use(routes.home, globalRouter);
app.use(routes.login, loginRouter);

export default app;
