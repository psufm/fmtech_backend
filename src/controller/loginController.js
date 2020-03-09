import routes from "../routes"; //추후 라우터 이동
import { googleClientInfo, findUser } from "../localMiddleware";

//접속토큰, 재접속토큰 저장할것인지? 세션으로 둘것인지? 활용방안은?

export const googleLogin = (req, res) => {
  console.log("finish login passport");
  passport.authenticate(
    "google",
    {
      scope: ["https://www.googleapis.com/auth/userinfo.email"]
    },
    function(err, user, info) {
      if (err) throw err;
    }
  )(req, res);
};

export const loginCallback = (req, res) => {
  passport.authenticate("google", {
    failureRedirect: "/login",
    successRedirect: "/"
  });
};
