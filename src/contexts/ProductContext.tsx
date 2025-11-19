import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useCallback,
} from 'react';
import { Product } from '@/types/product';
import { staticProducts } from '@/data/staticProducts';
import {
  ProductState,
  ProductAction,
  ProductContextType,
  ProductProviderProps,
} from '@/types/product';

const initialState: ProductState = {
  products: [],
  allProducts: [],
  loading: false,
  error: null,
  hasMore: true,
  skip: 0,
  searchQuery: '',
  selectedProduct: null,
};

const productReducer = (
  state: ProductState,
  action: ProductAction
): ProductState => {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, loading: true, error: null };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        loading: false,
        allProducts: action.payload,
        products: action.payload.slice(0, 10),
        hasMore: action.payload.length > 10,
        skip: 10,
      };
    case 'FETCH_ERROR':
      return { ...state, loading: false, error: action.payload };
    case 'SET_SEARCH':
      return { ...state, searchQuery: action.payload };
    case 'SET_SELECTED_PRODUCT':
      return { ...state, selectedProduct: action.payload };
    case 'SET_FILTERED_PRODUCTS':
      return {
        ...state,
        products: action.payload.products,
        hasMore: action.payload.hasMore,
        skip: action.payload.skip,
      };
    default:
      return state;
  }
};

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
  const limit = 10;

  const fetchAllProducts = useCallback(async () => {
    dispatch({ type: 'FETCH_START' });
    try {
      const response = await fetch('https://dummyjson.com/products?limit=100');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      dispatch({ type: 'FETCH_SUCCESS', payload: data.products });
    } catch (err) {
      console.warn('Failed to fetch from API, using static data:', err);
      // Fallback to static data
      dispatch({ type: 'FETCH_SUCCESS', payload: staticProducts });
    }
  }, []);

  const updateFilteredProducts = (query: string, additionalSkip = 0) => {
    const filtered = state.allProducts.filter(
      (product) =>
        product.title.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())
    );
    const start = additionalSkip;
    const end = start + limit;
    const products = filtered.slice(start, end);
    const hasMore = end < filtered.length;
    dispatch({
      type: 'SET_FILTERED_PRODUCTS',
      payload: {
        products:
          additionalSkip === 0 ? products : [...state.products, ...products],
        hasMore,
        skip: end,
      },
    });
  };

  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  useEffect(() => {
    updateFilteredProducts(state.searchQuery, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.searchQuery]);

  const fetchMoreProducts = useCallback(() => {
    if (!state.loading && state.hasMore) {
      updateFilteredProducts(state.searchQuery, state.skip);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.loading, state.hasMore, state.skip, state.searchQuery]);

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
