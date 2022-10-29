module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd9c80a55f0ce6a9d93b4dda11d5e548f'),
  },
});
