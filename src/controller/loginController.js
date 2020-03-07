import routes from "../routes"; //추후 라우터 이동
import passport from "passport";
import googlePassport from "passport-google-oauth20";
import { googleClientInfo, checkEmailAddress } from "../localMiddleware";
import User from "../model/user";

const GoogleStrategy = googlePassport.Strategy; //구글전략

//접속토큰, 재접속토큰 저장할것인지? 세션으로 둘것인지? 활용방안은?
const findUser = (accessToken, refreshToken, profile, done) => {
  if (checkEmailAddress(profile._json.domain) > -1) {
    try {
      const searchUser = User.findOne({
        google_id: profile.id
      }); // scan
      if (searchUser) {
        return done(null, searchUser); //기존 유저
      } else {
        const google_user = new User({
          name: profile.name.familyName,
          google_id: profile.id,
          email: profile.emails[0].value
        });
        google_user.save((err, output) => {
          return done(null, output); //신규가입
        });
      }
    } catch (error) {
      console.log(error);
      return done(null, false);
    }
  }

  return done(null, false); //검색 실패
};

export const googleLogin = (req, res) => {
  const googleMiddleware = new GoogleStrategy(googleClientInfo, findUser);
  passport.use(googleMiddleware);
};
