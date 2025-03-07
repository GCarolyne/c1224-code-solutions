import { Link, Outlet } from 'react-router-dom';
import { Product } from '../lib';

type Props = {
  products: Product[];
};
export function Header({ products }: Props) {
  return (
    <div>
      <nav className="px-4 text-white bg-gray-900">
        <ul>
          {products.map((product) => (
            <li key={product.productId} className="inline-block py-2 px-4">
              <Link to="/" className="text-white">
                {product.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
