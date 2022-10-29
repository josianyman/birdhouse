module.exports = ({ env }) => ({
    auth: {
        secret: env('ADMIN_JWT_SECRET', 'd9c80a55f0ce6a9d93b4dda11d5e548f'),
    },
    apiToken: {
        salt: env('API_TOKEN_SALT', '695ddccd97fe8d79858dc485b67d69145afa78e87c1451b27cc7a'),
    },
});
