module.exports = {
    adminAuth: {
        type:"strategy",
        strategy: {
            name: "keycloak",
            label: 'Sign in',
            icon:"fa-sign-in",
            strategy: require("passport-openidconnect").Strategy,
            options: {
                issuer: 'https://' + process.env['AUTH0_DOMAIN'] + '/',
                authorizationURL: 'https://' + process.env['AUTH0_DOMAIN'] + '/authorize',
                tokenURL: 'https://' + process.env['AUTH0_DOMAIN'] + '/oauth/token',
                userInfoURL: 'https://' + process.env['AUTH0_DOMAIN'] + '/userinfo',
                clientID: process.env['AUTH0_CLIENT_ID'],
                clientSecret: process.env['AUTH0_CLIENT_SECRET'],
                callbackURL: '/oauth2/redirect',
                scope: [ 'profile' ],
                verify: function(issuer, profile, cb) {
                    return cb(null, profile);
                }
            },
        },
        users: [
           { username: "knolleary",permissions: ["*"]}
        ]
    }
}