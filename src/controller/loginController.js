import routes from "../routes"; //추후 라우터 이동
import passport from "passport";
import googlePassport from "passport-google-oauth20";
import { googleClientInfo } from "../localMiddleware";

const GoogleStrategy = googlePassport.Strategy; //구글전략

//접속토큰, 재접속토큰 저장할것인지? 세션으로 둘것인지? 활용방안은?

export const googleLogin = (req, res) => {
  const googleMiddleware = new GoogleStrategy(googleClientInfo, findUser);
  passport.use(googleMiddleware);
};

export const loginCallback = (req, res) => {
  passport.authenticate(
    `google`,
    {
      failureRedirect: `/`,
      failureFlash: "login error..."
    },
    (req, res) => {
      res.redirect("/index"); //로그인 성공..
    }
  );
};
