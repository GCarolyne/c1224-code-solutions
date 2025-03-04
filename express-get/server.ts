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

app.get('/api/countries', async (req, res, next) => {
  try {
    const sql = `
select
"countries"."name" as "country-name","countries"."countryId" as "countryId",
count (*) as "cities"
from
"cities"
join "countries" using ("countryId")
group by "countries"."name","countries"."countryId"

`;
    const result = await db.query(sql);
    const countries = result.rows;
    if (!countries) {
      throw new ClientError(404, `country was not found.`);
    }
    res.json(countries);
  } catch (err) {
    next(err);
  }
});

app.get('/api/cities/:cityId', async (req, res, next) => {
  try {
    const { cityId } = req.params;

    if (cityId === undefined)
      throw new ClientError(404, 'the city id was not found.');
    if (!cityId)
      throw new ClientError(
        400,
        'the city id needs to be an integer bad request.'
      );
    const sql = `
    select "cities"."cityId" as "cityId",
            "cities"."name" as "name",
            "countries"."name" as "country"
    from "cities"
    join "countries" on "cities"."countryId" = "countries"."countryId"
    where "cities"."cityId" = $1
    `;
    const result = await db.query(sql, [+cityId]);
    const cities = result.rows[0];
    if (!cities) throw new ClientError(404, 'cities was not found.');
    res.json(cities);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
