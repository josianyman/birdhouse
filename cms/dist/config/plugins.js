//  path: config/plugins.js
module.exports = ({ env }) => ({
    'users-permissions': {
        config: {
            jwtSecret: env('JWT_SECRET', 'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY2NzA1NDgzMCwiaWF0IjoxNjY3MDU0ODMwfQ.XZ9RZk__B35XMpJVfASFM-XXDHSiCWrkgEL1ZKlzSvQ')
        },
    },
});
