import { Product } from './product';

export interface ProductState {
  products: Product[];
  allProducts: Product[];
  loading: boolean;
  error: string | null;
  hasMore: boolean;
  skip: number;
  searchQuery: string;
  selectedProduct: Product | null;
}

export type ProductAction =
  | { type: 'FETCH_START' }
  | { type: 'FETCH_SUCCESS'; payload: Product[] }
  | { type: 'FETCH_ERROR'; payload: string }
  | { type: 'SET_SEARCH'; payload: string }
  | { type: 'SET_FILTERED_PRODUCTS'; payload: { products: Product[]; hasMore: boolean; skip: number } }
  | { type: 'SET_SELECTED_PRODUCT'; payload: Product | null };

export interface ProductContextType {
  products: Product[];
  loading: boolean;
  error: string | null;
  hasMore: boolean;
  fetchMoreProducts: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedProduct: Product | null;
  setSelectedProduct: (product: Product | null) => void;
}