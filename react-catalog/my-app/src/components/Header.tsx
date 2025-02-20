import { Outlet, Link } from 'react-router-dom';
import './Header.css';
export function Header() {
  return (
    <>
      <nav className="nav-styles">
        <Link to="/about" className="about-style text-white">
          About
        </Link>
        <Link to="/" className="catalog-style text-white">
          Catalog
        </Link>
      </nav>
      <Outlet />
    </>
  );
}
