const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;

const GOOGLE_CLIENT_ID = "995780406061-iisfns7eqeun1sk7jgp5k0abt1ln6sun.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:5000/auth/google/callback",
  passReqToCallback: true,
},
function(request, accessToken, refreshToken, profile, done) {
  console.log(accessToken);
  console.log(refreshToken);
  console.log(profile);
  return done(null, profile);
}));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});
