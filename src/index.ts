import dotEnvFlow from 'dotenv-flow';
import express from 'express';
import bodyParser from 'body-parser';
import router from '@/src/router';

dotEnvFlow.config();

const { APP_PORT, NODE_ENV } = process.env;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(APP_PORT, () => {
  console.log(`This is ${NODE_ENV} environment.\nServer is running on port ${APP_PORT}.`);
});

app.use(router);
