import express from 'express';
import pg from 'pg';
import { ClientError, errorMiddleware } from './lib/index.js';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/pagila',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

const app = express();
app.use(express.json());
// Endpoint for testing
app.get('/api/actors/:actorId', async (req, res, next) => {
  try {
    const { actorId } = req.params;
    if (!Number.isInteger(+actorId)) {
      throw new ClientError(400, `Non-integer actorId: ${actorId}`);
    }
    const sql = `
      select * from "actors"
      where "actorId" = $1;
    `;
    const params = [actorId];
    const result = await db.query(sql, params);
    const actor = result.rows[0];
    if (!actor) throw new ClientError(404, `actor ${actorId} not found`);
    res.json(actor);
  } catch (err) {
    next(err);
  }
});

app.post('/api/actors', async (req, res, next) => {
  const { firstName, lastName } = req.body;
  if (firstName === undefined) {
    throw new ClientError(404, 'first name not found.');
  }
  if (lastName === undefined) {
    throw new ClientError(404, 'last name not found.');
  }
  try {
    const sql = `
    insert into "actors" ("firstName","lastName")
    values ($1,$2)
    returning *
    `;
    const result = await db.query(sql, [firstName, lastName]);
    const actors = result.rows[0];
    res.status(201).json(actors);
  } catch (err) {
    next(err);
  }
});

app.put('/api/actors/:actorId', async (req, res, next) => {
  const { firstName, lastName } = req.body;
  const { actorId } = req.params;
  try {
    const sql = `
  update "actors"
  set "firstName" = $1,
  "lastName" = $2
  where "actorId" = $3
  returning *
  `;
    if (actorId === undefined)
      throw new ClientError(404, 'actorId does not exisit.');
    const result = await db.query(sql, [firstName, lastName, actorId]);
    const actorsEdit = result.rows[0];
    res.status(200).json(actorsEdit);
  } catch (err) {
    next(err);
  }
});

app.delete('/api/actors/:actorId', async (req, res, next) => {
  const { actorId } = req.params;
  try {
    const sql = `
    delete
    from "actors"
    where "actorId" = $1
    returning *
    `;
    if (actorId === undefined)
      throw new ClientError(404, 'the actor id was not found');
    const result = await db.query(sql, [actorId]);
    const deleted = result.rows[0];
    res.status(204).json(deleted);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
