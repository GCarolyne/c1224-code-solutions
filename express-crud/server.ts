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
    const sql = `
select *
from "grades"
`;
    const result = await db.query(sql);
    const gradesRow = result.rows;
    res.status(200).json(gradesRow);
  } catch (err) {
    next(err);
  }
});

app.get('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    validateGradeId(gradeId);

    const sql = `
  select *
  from "grades"
  where "gradeId" = $1`;
    const result = await db.query(sql, [gradeId]);
    const oneGrade = result.rows[0];
    if (!oneGrade) throw new ClientError(404, 'grade id no found');
    res.status(200).json(oneGrade);
  } catch (err) {
    next(err);
  }
});

app.post('/api/grades', async (req, res, next) => {
  try {
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
    if (!Number.isInteger(+score) || score < 0 || score > 100) {
      throw new ClientError(400, 'invalid score number');
    }

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
  try {
    const { name, course, score } = req.body;
    const { gradeId } = req.params;
    if (name === undefined) throw new ClientError(400, 'please provide name.');
    if (course === undefined)
      throw new ClientError(400, 'please provide course.');
    if (!Number.isInteger(score) || score < 0 || score > 100) {
      throw new ClientError(400, 'invalid score number');
    }
    validateGradeId(gradeId);

    const sql = `
  update "grades"
  set "name" = $1,
  "course" = $2,
  "score" = $3
  where "gradeId" = $4
  returning *
  `;
    const result = await db.query(sql, [name, course, score, gradeId]);
    const gradeEdit = result.rows[0];
    if (gradeEdit === undefined)
      throw new ClientError(404, 'could not find gradeId in database.');
    res.status(200).json(gradeEdit);
  } catch (err) {
    next(err);
  }
});

app.delete('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    validateGradeId(gradeId);

    const sql = `
    delete
    from "grades"
    where "gradeId" = $1
    returning *
    `;
    const result = await db.query(sql, [gradeId]);
    const deleted = result.rows[0];
    if (deleted === undefined)
      throw new ClientError(404, 'gradeId is not in database.');
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});

/**
 * checks that the grade id is valid. throw if not.This is recommended to do if any code should be duplicate.
 */
function validateGradeId(gradeId: string): void {
  if (!Number.isInteger(+gradeId))
    throw new ClientError(404, 'the grade Id is not an integer. ');
}
