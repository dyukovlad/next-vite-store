import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  ReactNode,
  useCallback,
} from 'react';
import { Product } from '@/types/product';
import { ProductContextType } from '@/types/productContext';
import { initialState, productReducer } from '@/reducers/productReducer';
import { useProductData } from '@/hooks/useProductData';

interface ProductProviderProps {
  children: ReactNode;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const useProduct = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProduct must be used within a ProductProvider');
  }
  return context;
};

export const ProductProvider: React.FC<ProductProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(productReducer, initialState);
  const { fetchAllProducts, updateFilteredProducts } = useProductData();

  const handleFetchAllProducts = useCallback(async () => {
    dispatch({ type: 'FETCH_START' });
    try {
      const products = await fetchAllProducts();
      dispatch({ type: 'FETCH_SUCCESS', payload: products });
    } catch (err) {
      dispatch({
        type: 'FETCH_ERROR',
        payload: err instanceof Error ? err.message : 'An error occurred',
      });
    }
  }, [fetchAllProducts]);

  useEffect(() => {
    handleFetchAllProducts();
  }, [handleFetchAllProducts]);

  useEffect(() => {
    const result = updateFilteredProducts(
      state.allProducts,
      state.searchQuery,
      0
    );
    dispatch({ type: 'SET_FILTERED_PRODUCTS', payload: result });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.searchQuery, state.allProducts]);

  const fetchMoreProducts = useCallback(() => {
    if (!state.loading && state.hasMore) {
      const result = updateFilteredProducts(
        state.allProducts,
        state.searchQuery,
        state.skip
      );
      dispatch({ type: 'SET_FILTERED_PRODUCTS', payload: result });
    }
  }, [
    state.loading,
    state.hasMore,
    state.skip,
    state.searchQuery,
    state.allProducts,
    updateFilteredProducts,
  ]);

  const setSearchQuery = useCallback((query: string) => {
    dispatch({ type: 'SET_SEARCH', payload: query });
  }, []);

  const setSelectedProduct = useCallback((product: Product | null) => {
    dispatch({ type: 'SET_SELECTED_PRODUCT', payload: product });
  }, []);

  const value: ProductContextType = {
    products: state.products,
    loading: state.loading,
    error: state.error,
    hasMore: state.hasMore,
    fetchMoreProducts,
    searchQuery: state.searchQuery,
    setSearchQuery,
    selectedProduct: state.selectedProduct,
    setSelectedProduct,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
