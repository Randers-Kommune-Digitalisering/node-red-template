module.exports = {
    adminAuth: {
        type:"strategy",
        strategy: {
            name: "keycloak",
            label: 'Sign in',
            icon:"fa-lock",
            strategy: require("passport-keycloak-oauth2-oidc").Strategy,
            options: {
                clientID: process.env['OAUTH2_CLIENT_ID'],
                realm: process.env['OAUTH2_REALM'],
                publicClient: "false",
                clientSecret: process.env['OAUTH2_CLIENT_SECRET'],
                sslRequired: "external",
                authServerURL: "https://" + process.env['OAUTH2_DOMAIN'] +"/auth",
                callbackURL: "https://" + process.env['OAUTH2_CALLBACK_DOMAIN'] + "auth/strategy/callback",
                verify: function(accessToken, refreshToken, profile, done) {
                    done(null, profile);
                }
            },
        },
        users: [
           { username: "mmb@kvalitetsit.dk",permissions: ["*"]}
        ]
    }
}