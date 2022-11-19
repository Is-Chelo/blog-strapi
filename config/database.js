module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'containers-us-west-124.railway.app'),
      port: env.int('DATABASE_PORT', 7184),
      database: env('DATABASE_NAME', 'railway'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', '4hFTJmWwxKFHoFYqVgcC'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});

// DATABASE_HOST=containers-us-west-124.railway.app
// DATABASE_PORT=7184
// DATABASE_NAME=railway
// DATABASE_USERNAME=root
// DATABASE_PASSWORD=4hFTJmWwxKFHoFYqVgcC