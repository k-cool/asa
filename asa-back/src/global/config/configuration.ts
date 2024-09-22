import { ENV_TYPE } from '../constant/enum.const';

export default function configure() {
  return {
    server: {
      type: process.env.NODE_ENV || ENV_TYPE.DEVELPMENT,
      port: parseInt(process.env.PORT, 10) || 8000,
    },
    db: {
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      host: process.env.MYSQL_HOST,
      port: parseInt(process.env.MYSQL_PORT, 10) || 3306,
      database: process.env.MYSQL_DATABASE,
    },
  };
}

export type ServerConfig = ReturnType<typeof configure>['server'];
export type DbConfig = ReturnType<typeof configure>['db'];
