import googlePassport from "passport-google-oauth20";
import User from "../model/user";
const GoogleStrategy = googlePassport.Strategy; //구글전략

export default googleStrategy = passport => {
  passport.use(new GoogleStrategy(googleClientInfo, findUser));
};

const googleClientInfo = {
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: `/login/google/callback`
};
//${IP}:${process.env.PORT}

const checkEmailAddress = address => {
  return address.findIndex(name => {
    name === process.env.MAIL;
  });
};

const findUser = async (accessToken, refreshToken, profile, done) => {
  console.log("check");
  if (checkEmailAddress(profile._json.domain) > -1) {
    try {
      const searchUser = await User.findOne({
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
        await google_user.save((err, output) => {
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
