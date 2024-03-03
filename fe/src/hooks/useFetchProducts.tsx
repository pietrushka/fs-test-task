import { useState, useEffect } from 'react';
import { IProduct } from '../interfaces/product';

export default function useFetchProducts() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // TODO use env variable
        const response = await fetch('http://localhost:3000/product/all');

        if (response.status !== 200) {
          throw new Error('Fetching error');
        }
        const products = await response.json();
        setProducts(products);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
}
