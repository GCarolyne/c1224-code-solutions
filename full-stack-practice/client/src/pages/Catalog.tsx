import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { type Product, toDollars } from '../lib';

export function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch('/api/catalog');
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const json = (await response.json()) as Product[];
        setProducts(json);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    getData();
  }, []);

  return (
    <div className="container">
      <h1>Catalog</h1>
      <hr className="py-1" />
      <div className="flex flex-wrap">
        {products?.map((product) => (
          <div
            key={product.productId}
            className="w-full md:w-1/2 lg:w-1/3 px-4">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

type CardProps = {
  product: Product;
};
function ProductCard({ product }: CardProps) {
  const { productId, name, price, imageUrl, shortDescription } = product;
  return (
    <Link
      to={`details/${productId}`}
      className="block cursor-pointer text-gray-900 rounded border border-gray-300 mb-4 shadow-sm hover:text-inherit">
      <img src={imageUrl} className="object-contain h-72 w-full" alt={name} />
      <div className="flex-auto p-6">
        <h5 className="font-bold mb-3">{name}</h5>
        <p className="mb-0 text-gray-600">{toDollars(price)}</p>
        <p className="h-20 mb-0 overflow-hidden">{shortDescription}</p>
      </div>
    </Link>
  );
}
