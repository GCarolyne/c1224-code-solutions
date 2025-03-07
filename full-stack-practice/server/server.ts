import 'dotenv/config';
import pg from 'pg';
import express from 'express';
import { errorMiddleware } from './lib/index.js';

type Product = {
  productId: number;
  name: string;
  price: string;
  imageUrl: string;
  shortDescription: string;
  longDescription: string;
};

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

const app = express();
app.use(express.json());

app.get('/api/catalog', async (req, res, next) => {
  try {
    const sql = `
      select *
        from "products"
        order by "productId"
    `;
    const result = await db.query<Product>(sql);
    console.log(result);
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});

app.get('/api/catalog/:productId', async (req, res, next) => {
  try {
    const productDD = Number(req.params.productId);
    const sql = `
    select *
    from "products"
    where "productId" = $1`;

    const result = await db.query(sql, [productDD]);

    res.json(result.rows[0]);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log(`express server listening on port ${process.env.PORT}`);
});
