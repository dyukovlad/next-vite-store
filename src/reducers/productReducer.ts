import { ProductState, ProductAction } from '@/types/productContext';

export const initialState: ProductState = {
  products: [],
  allProducts: [],
  loading: false,
  error: null,
  hasMore: true,
  skip: 0,
  searchQuery: '',
  selectedProduct: null,
};

export function productReducer(
  state: ProductState,
  action: ProductAction
): ProductState {
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
    case 'SET_FILTERED_PRODUCTS':
      return {
        ...state,
        products: action.payload.products,
        hasMore: action.payload.hasMore,
        skip: action.payload.skip,
      };
    case 'APPEND_PRODUCTS':
      return {
        ...state,
        products: [...state.products, ...action.payload.products],
        hasMore: action.payload.hasMore,
        skip: action.payload.skip,
      };
    case 'SET_SELECTED_PRODUCT':
      return { ...state, selectedProduct: action.payload };
    default:
      return state;
  }
}
