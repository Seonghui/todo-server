import dotEnvFlow from 'dotenv-flow';
import express from 'express';
import bodyParser from 'body-parser';
import router from '@/src/router';
import env from '@/src/config/enviromnent';

dotEnvFlow.config();

const app = express();
const PORT = Number(process.env.PORT) || 8080;
const HOST = process.env.HOST || '0.0.0.0';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

console.debug(env);

app.listen(PORT, HOST, () => {
  console.debug(`Server is running on port ${HOST}:${PORT}.`);
});

app.use(router);
