import passport from "passport";
import strategy from "../passport/googleStrategy";

strategy(passport);

export default passport;
