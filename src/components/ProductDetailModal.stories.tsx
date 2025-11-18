import type { Meta, StoryObj } from '@storybook/react';
import { ProductDetailModal } from './ProductDetailModal';

const meta: Meta<typeof ProductDetailModal> = {
  title: 'Components/ProductDetailModal',
  component: ProductDetailModal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleProduct = {
  id: 1,
  title: 'Wireless Headphones',
  description: 'High-quality wireless headphones with noise cancellation and premium sound quality.',
  category: 'electronics',
  price: 99.99,
  discountPercentage: 10,
  rating: 4.5,
  stock: 50,
  tags: ['electronics', 'audio'],
  brand: 'AudioTech',
  sku: 'ATH-WH-001',
  weight: 0.3,
  dimensions: { width: 20, height: 18, depth: 8 },
  warrantyInformation: '1 year warranty',
  shippingInformation: 'Ships in 2-3 business days',
  availabilityStatus: 'In Stock',
  reviews: [
    {
      rating: 5,
      comment: 'Excellent sound quality!',
      date: '2024-01-15T10:00:00.000Z',
      reviewerName: 'John Doe',
      reviewerEmail: 'john@example.com',
    },
  ],
  returnPolicy: '30 days return policy',
  minimumOrderQuantity: 1,
  meta: {
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z',
    barcode: '1234567890123',
    qrCode: 'https://example.com/qr',
  },
  images: [
    'https://cdn.dummyjson.com/product-images/electronics/headphones/1.webp',
    'https://cdn.dummyjson.com/product-images/electronics/headphones/2.webp',
  ],
  thumbnail: 'https://cdn.dummyjson.com/product-images/electronics/headphones/thumbnail.webp',
};

export const Default: Story = {
  args: {
    product: sampleProduct,
    isOpen: true,
    onClose: () => {},
  },
};

export const Closed: Story = {
  args: {
    product: sampleProduct,
    isOpen: false,
    onClose: () => {},
  },
};