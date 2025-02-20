import { Link } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router';
import { GiFastBackwardButton } from 'react-icons/gi';
import { Product, readProduct, toDollars } from '../lib';

import { useEffect, useState } from 'react';

export function ProductDetails() {
  const [item, setItem] = useState<Product>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();
  const { productId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    async function loadItem(productId: number) {
      try {
        const item = await readProduct(productId);
        setItem(item);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    if (productId) {
      setIsLoading(true);
      loadItem(+productId);
    }
  }, [productId]);

  if (isLoading) return <div>Loading...</div>;
  if (error || !item) {
    return (
      <div>
        Error Loading Item {productId}:{''}
        {error instanceof Error ? error.message : 'Unknown error'}
      </div>
    );
  }

  function handleAlert() {
    alert('Your item was added');
    navigate('/');
  }
  return (
    <>
      <div className="row">
        <div className="product-details-card">
          <Link to="/">
            <GiFastBackwardButton />
          </Link>
          <ProductDet item={item} />
        </div>
      </div>
      <button onClick={handleAlert}>Add to Cart</button>
    </>
  );
}

type Props = {
  item: Product;
};

function ProductDet({ item }: Props) {
  return (
    <>
      <img src={item.imageUrl} alt="Image of Product" />;<h1>{item.name}</h1>
      <h2>{toDollars(item.price)}</h2>
      <p>{item.shortDescription}</p>
      <p>{item.longDescription}</p>
    </>
  );
}
