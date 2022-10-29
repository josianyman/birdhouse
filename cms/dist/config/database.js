module.exports = ({ env }) => ({
    connection: {
        client: 'postgres',
        connection: {
            host: env('DB_HOST', 'localhost'),
            port: env('DB_PORT', 5432),
            database: env('DB_DATABASE', 'falco'),
            schema: env('DB_SHEMA', 'public'),
            user: env('DB_USERNAME', 'falco'),
            password: env('DB_PASSWORD', 'gt4He05edq3XaoY'),
        },
        useNullAsDefault: false,
    },
});
