const passport = require('passport');
const GoogleStrategy = require('passport-facebook').Strategy;

const GOOGLE_CLIENT_ID = "406676264209542";
const GOOGLE_CLIENT_SECRET = "cc33af3440cc71be8d92eec948159e37";

passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:5000/auth/facebook/callback",
  profileFields: ['id', 'displayName', 'gender', 'picture.type(large)', 'email'],
},
function(request, accessToken, refreshToken, profile, done) {
  console.log(request);  
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
