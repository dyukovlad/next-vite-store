import { useCallback } from 'react';
import { Product } from '@/types/product';
import { staticProducts } from '@/data/staticProducts';

export const useProductData = () => {
  const fetchAllProducts = useCallback(async (): Promise<Product[]> => {
    try {
      const response = await fetch('https://dummyjson.com/products?limit=100');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      return data.products;
    } catch (err) {
      console.warn('Failed to fetch from API, using static data:', err);
      return staticProducts;
    }
  }, []);

  const updateFilteredProducts = useCallback(
    (allProducts: Product[], query: string, additionalSkip = 0) => {
      const filtered = allProducts.filter(
        (product) =>
          product.title.toLowerCase().includes(query.toLowerCase()) ||
          product.description.toLowerCase().includes(query.toLowerCase())
      );
      const limit = 10;
      const start = additionalSkip;
      const end = start + limit;
      const products = filtered.slice(start, end);
      const hasMore = end < filtered.length;
      return {
        products,
        hasMore,
        skip: end,
      };
    },
    []
  );

  return {
    fetchAllProducts,
    updateFilteredProducts,
  };
};
