import { Router } from 'express';
import mysqlConnObj from '@/src/config/mysql';

const router = Router();
const mysqlConn = mysqlConnObj.init();
mysqlConnObj.open(mysqlConn);

interface Result {
  status?: number;
  data?: any;
}

router.get('/', (req, res) => {
  const result: Result = {};
  mysqlConn.query('select * from item', (err, rows) => {
    if (err) throw err;
    if (rows.length) {
      result.status = 200;
      result.data = rows;
    } else {
      result.status = 404;
    }
    res.json(result);
  });
});

router.get('/:uid', (req, res) => {
  const { uid } = req.params;
  const result: Result = {};
  mysqlConn.query('select * from item where uid =?', [uid], (err, rows) => {
    if (err) throw err;
    if (rows[0]) {
      result.status = 200;
      result.data = rows;
    } else {
      result.status = 404;
    }
    res.json(result);
  });
});

router.post('/', (req, res) => {
  const { content, status, date } = req.body;
  const sql = { content, status, date };
  mysqlConn.query('insert into item set ?', sql, (err) => {
    if (err) throw err;
    return res.json({ result: 200 });
  });
});

router.put('/:uid', (req, res) => {
  const { content, status, date } = req.body;
  const { uid } = req.params;
  const result: Result = {};
  mysqlConn.query('update item set content =?, status =?, date =? where uid =?', [content, status, date, uid], (err, rows) => {
    if (err) throw err;
    if (rows.affectedRows > 0) {
      result.status = 200;
    } else {
      result.status = 404;
    }
    return res.json(result);
  });
});

router.delete('/:uid', (req, res) => {
  const { uid } = req.params;
  const result: Result = {};
  mysqlConn.query('delete from item where uid = ? ', [uid], (err, rows) => {
    if (err) throw err;
    if (rows.affectedRows > 0) {
      result.status = 200;
    } else {
      result.status = 404;
    }
    res.json(result);
  });
});

export default router;
