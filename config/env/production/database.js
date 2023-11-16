module.exports = ({ env }) => ({
  connection: {
    client: "mysql2",
    connection: {
      host: env("DATABASE_HOST", "localhost"),
      port: env.int("DATABASE_PORT", 3306),
      database: env("DATABASE_NAME", "blogdata"),
      user: env("DATABASE_USERNAME", "test12"),
      password: env("DATABASE_PASSWORD", "Test@123"),
      ssl: {
        rejectUnauthorized: false,
      },
    },
    debug: false,
  },
});
