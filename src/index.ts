import dotEnvFlow from 'dotenv-flow';
import express from 'express';
import bodyParser from 'body-parser';
import router from '@/src/router';
import env from '@/src/config/enviromnent';

dotEnvFlow.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

console.log(`NODE_ENV=${env.NODE_ENV}`);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

app.use(router);
