import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Product } from '@/types/product';

interface ProductDetailModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductDetailModal({ product, isOpen, onClose }: ProductDetailModalProps) {
  if (!product) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{product.title}</DialogTitle>
          <DialogDescription>{product.description}</DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <Image
              src={product.thumbnail}
              alt={product.title}
              width={400}
              height={300}
              className="w-full h-64 object-cover rounded-lg"
            />
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {product.images.slice(1, 5).map((image, index) => (
                  <Image
                    key={index}
                    src={image}
                    alt={`${product.title} ${index + 1}`}
                    width={100}
                    height={100}
                    className="w-full h-20 object-cover rounded cursor-pointer"
                  />
                ))}
              </div>
            )}
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Price</h3>
              <p className="text-2xl font-bold text-green-600">${product.price}</p>
              {product.discountPercentage > 0 && (
                <p className="text-sm text-gray-500">
                  Discount: {product.discountPercentage}%
                </p>
              )}
            </div>
            <div>
              <h3 className="text-lg font-semibold">Rating</h3>
              <p className="text-yellow-500">
                {'★'.repeat(Math.round(product.rating))} ({product.rating})
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Stock</h3>
              <p className={product.stock > 0 ? 'text-green-600' : 'text-red-600'}>
                {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Category</h3>
              <p className="capitalize">{product.category}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Brand</h3>
              <p>{product.brand}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Warranty</h3>
              <p>{product.warrantyInformation}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Shipping</h3>
              <p>{product.shippingInformation}</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}