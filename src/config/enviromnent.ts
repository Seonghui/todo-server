const environment = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 8080,
  HOST: process.env.HOST || '0.0.0.0',
  MYSQL_PORT: process.env.MYSQL_PORT || 3306,
  MYSQL_HOST: process.env.MYSQL_HOST || 'localhost',
  MYSQL_USER: process.env.MYSQL_USER || 'root',
  MYSQL_PASS: process.env.MYSQL_PASS || 'password',
  MYSQL_DB: process.env.MYSQL_DB || 'todo',
};

export default environment;
