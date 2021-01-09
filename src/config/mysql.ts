import mysql, { Connection } from 'mysql';
import dotEnvFlow from 'dotenv-flow';
import enviromnent from '@/src/config/enviromnent';

dotEnvFlow.config();

const mysqlConnection = {
  init: function (): Connection {
    return mysql?.createConnection({
      host: enviromnent.MYSQL_HOST,
      port: enviromnent.MYSQL_PORT as number,
      user: enviromnent.MYSQL_USER,
      password: enviromnent.MYSQL_PASS,
      database: enviromnent.MYSQL_DB,
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
