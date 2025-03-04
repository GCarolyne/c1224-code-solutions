import express from 'express';
import { ClientError, errorMiddleware } from './lib/index.js';
import pg from 'pg';
pg.types.setTypeParser(pg.types.builtins.NUMERIC, parseFloat);

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/pagila',
  ssl: {
    rejectUnauthorized: false,
  },
});

const app = express();

app.get('/api/films', async (req, res, next) => {
  try {
    const sqlFilms = `
  select "replacement_cost" as "replacementCost"
  from "films"`;
    const result = await db.query(sqlFilms);
    console.log(result);
    const film = result.rows;
    res.send(film);
  } catch (err) {
    next(err);
  }
});

app.get('/api/films/:filmId', async (req, res, next) => {
  try {
    const sqlId = `
    select "filmId"
    from "films"
    where "filmId" = $1
    `;
    const result = await db.query(sqlId);
    const film = result.rows[0];
    if (!film) {
      throw new ClientError(404, `filmId was not found`);
    }
    res.send(film);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
