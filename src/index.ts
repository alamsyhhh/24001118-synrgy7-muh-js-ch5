import express, { Express } from 'express';
import { carRoutes } from './routes/carsRoutes';
import { knexInstance } from '../config/config';
import { Model } from 'objection';
import errorHandlingMiddleware from './middlewares/errorUploadHandlingMiddleware';

Model.knex(knexInstance);

const PORT = 9000;
const app: Express = express();

const cv1 = '/api/v1/cms';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(`${cv1}`, carRoutes, errorHandlingMiddleware);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
