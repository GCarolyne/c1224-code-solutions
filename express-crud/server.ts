import express from 'express';
import pg from 'pg';
import { ClientError, errorMiddleware } from './lib/index.js';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

const app = express();

app.use(express.json());

app.get('/api/grades', async (req, res, next) => {
  try {
    const { grades } = req.body;
    if (!grades) throw new ClientError(400, 'please provide grades');
    const sql = `
select *
from "grades"
where "grades" = $1
`;
    const result = await db.query(sql, [grades]);
    const gradesRow = result.rows;
    res.status(200).json(gradesRow);
    if (!gradesRow === undefined) {
      return [];
    }
  } catch (err) {
    next(err);
  }
});

app.get('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { grades, gradeId } = req.body;
    if (gradeId === undefined)
      throw new ClientError(404, 'no grade id found. ');
    if (grades === undefined) throw new ClientError(404, 'no grades found. ');
    const sql = `
  select "grades"."gradeId"
  from "grades"
  where "gradeId" = $2,
  "grades" = $1`;
    const result = await db.query(sql, [grades, gradeId]);
    if (!result) throw new ClientError(500, 'query failed');
    const oneGrade = result.rows[0];
    res.status(200).json(oneGrade);
  } catch (err) {
    next(err);
  }
});

app.post('/api/grades', async (req, res, next) => {
  const { name, course, score } = req.body;
  if (name === undefined) {
    throw new ClientError(400, 'invalid name');
  }
  if (course === undefined) {
    throw new ClientError(400, 'invalid course');
  }
  if (score === undefined) {
    throw new ClientError(400, 'invalid score');
  }
  try {
    const sql = `
    insert into "grades" ("name","course","score")
    values ($1,$2,$3)
    returning *
    `;
    const result = await db.query(sql, [name, course, score]);
    const grade = result.rows[0];
    res.status(201).json(grade);
  } catch (err) {
    next(err);
  }
});

app.put('/api/grades/:gradeId', async (req, res, next) => {
  const { name, course, score } = req.body;
  const { gradeId } = req.params;
  if (name === undefined) throw new ClientError(400, 'please provide name.');
  if (course === undefined)
    throw new ClientError(400, 'please provide course.');
  if (score === undefined) throw new ClientError(400, 'please provide score.');
  if (gradeId === undefined)
    throw new ClientError(400, 'please provide gradeId.');
  try {
    const sql = `
  update "grades"
  set "name" = $1,
  "course" = $2
  "score" = $3
  where "gradeId" = $4
  returning *
  `;
    const result = await db.query(sql, [name, course, score, gradeId]);
    const gradeEdit = result.rows[0];
    if (gradeEdit === undefined)
      throw new ClientError(404, 'could not find actor Id in database.');
    res.status(200).json(gradeEdit);
  } catch (err) {
    next(err);
  }
});

app.delete('/api/grades/:gradeId', async (req, res, next) => {
  const { gradeId } = req.params;
  if (gradeId === undefined)
    throw new ClientError(400, 'the grade id was not found');
  try {
    const sql = `
    delete
    from "grades"
    where "gradeId" = $1
    returning *
    `;
    const result = await db.query(sql, [gradeId]);
    const deleted = result.rows[0];
    if (deleted === undefined)
      throw new ClientError(404, 'did not delete from database.');
    res.status(204).json(deleted);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
