import { ReactNode } from 'react';

interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Array<{
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
  }>;
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
  images: string[];
  thumbnail: string;
}

interface ProductState {
  products: Product[];
  allProducts: Product[];
  loading: boolean;
  error: string | null;
  hasMore: boolean;
  skip: number;
  searchQuery: string;
  selectedProduct: Product | null;
}

type ProductAction =
  | { type: 'FETCH_START' }
  | { type: 'FETCH_SUCCESS'; payload: Product[] }
  | { type: 'FETCH_ERROR'; payload: string }
  | { type: 'SET_SEARCH'; payload: string }
  | {
      type: 'SET_FILTERED_PRODUCTS';
      payload: { products: Product[]; hasMore: boolean; skip: number };
    }
  | { type: 'SET_SELECTED_PRODUCT'; payload: Product | null };

interface ProductContextType {
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

interface ProductProviderProps {
  children: ReactNode;
}

export type {
  Product,
  ProductState,
  ProductAction,
  ProductContextType,
  ProductProviderProps,
};
