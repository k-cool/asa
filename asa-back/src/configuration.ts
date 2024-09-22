export default function configure() {
  return {
    server: {
      port: parseInt(process.env.PORT, 10) || 8000,
    },
    db: {
      username: process.env.MYSQL_USER_NAME,
      password: process.env.MYSQL_PASSWORD,
      host: process.env.MYSQL_HOST,
      port: parseInt(process.env.MYSQL_PORT, 10) || 3306,
      database: process.env.MYSQL_DATABASE,
    },
  };
}

export type ServerConfig = ReturnType<typeof configure>['server'];
export type DbConfig = ReturnType<typeof configure>['db'];
