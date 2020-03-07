import routes from "./routes";
import ip from "ip";
import User from "./model/user";

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

export const findUser = (accessToken, refreshToken, profile, done) => {
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
