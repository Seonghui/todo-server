import mysql, { Connection } from 'mysql';
import dotEnvFlow from 'dotenv-flow';

dotEnvFlow.config();

const { MYSQL_PORT = '3306' } = process.env;

const mysqlConnection = {
  init: function (): Connection {
    return mysql?.createConnection({
      host: process.env.MYSQL_HOST,
      port: parseInt(MYSQL_PORT),
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASS,
      database: process.env.MYSQL_DB,
    });
  },
  open: function (conn: Connection): void {
    conn?.connect(function (err) {
      if (err) {
        console.error('MySQL connection failed.');
        console.error('Error Code : ' + err.code);
        console.error('Error Message : ' + err.message);
      } else {
        console.log('MySQL connection successful.');
      }
    });
  },
  close: function (conn: Connection): void {
    conn?.end(function (err) {
      if (err) {
        console.error('MySQL Terminate failed.');
        console.error('Error Code : ' + err.code);
        console.error('Error Message : ' + err.message);
      } else {
        console.log('MySQL Terminate connection.');
      }
    });
  },
};

export default mysqlConnection;
