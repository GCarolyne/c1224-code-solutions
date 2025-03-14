import './App.css';
import { Header } from './components/Header';
import './index.css';
import { About } from './pages/About';
import { Catalog } from './pages/Catalog';
import { Routes, Route } from 'react-router-dom';
import { ProductDetails } from './pages/ProductDetails';
import { NotFound } from './pages/NotFound';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Catalog />} />
        <Route path="about" element={<About />} />
        <Route path="details/:productId" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
