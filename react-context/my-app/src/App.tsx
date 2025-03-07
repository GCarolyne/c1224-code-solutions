import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { About } from './pages/About';
import { Catalog } from './pages/Catalog';
import { NotFound } from './pages/NotFound';
import { ProductDetails } from './pages/ProductDetails';
import { CartContext } from './components/CartContext';
import { useState } from 'react';
import { Product } from './lib';

export function App() {
  const [cart, setCart] = useState<Product[]>([]);
  const addToCart = (item: Product) => {
    setCart([...cart, item]);
  };
  const cartContextValue = {
    cart: cart,
    addToCart: addToCart,
  };
  return (
    <CartContext.Provider value={cartContextValue}>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Catalog />} />
          <Route path="details/:productId" element={<ProductDetails />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </CartContext.Provider>
  );
}

//Context value is kept in state and the functions inside of the cart value manipulate the state.
// const newCart = [...cart,product] this creates a new instance of the array. the spread operator.
