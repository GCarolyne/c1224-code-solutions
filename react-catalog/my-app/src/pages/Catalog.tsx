import './Catalog.css';
import { useState, useEffect } from 'react';
import { readCatalog, Product } from '../lib';
import { Link } from 'react-router-dom';

export function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<unknown>();
  console.log('product', products);
  useEffect(() => {
    async function loadItems() {
      try {
        const products = await readCatalog();
        setProducts(products);
      } catch (error) {
        setError(error);
      }
    }
    loadItems();
  });
  if (error) {
    return <div>Error Loading Item</div>;
  }
  return (
    <>
      <h1 className="catalog-h1">Catalog</h1>
      <ul className="product-list column-one-third">
        {products.map((item) => (
          <div key={item.productId} className="product-card">
            <ProductCard item={item} />
          </div>
        ))}
      </ul>
    </>
  );
}

type ProProps = {
  item: Product;
};

export function ProductCard({ item }: ProProps) {
  const itemId = item.productId;
  return (
    <>
      <Link to={`/details/${itemId}`} className="product-card">
        <img src={item.imageUrl} />
        <h2>{item.name}</h2>
        <h3>{item.price}</h3>
        <p>{item.shortDescription}</p>
      </Link>
    </>
  );
}
