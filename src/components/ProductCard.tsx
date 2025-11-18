import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ImageOff } from 'lucide-react';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
  onClick?: (product: Product) => void;
}

export const ProductCard = React.memo<ProductCardProps>(({ product, onClick }) => {
  const [imageError, setImageError] = React.useState(false);

  const handleClick = () => {
    onClick?.(product);
  };

  return (
    <Card className="w-full max-w-sm cursor-pointer hover:shadow-lg transition-shadow" onClick={handleClick}>
      <CardHeader>
        {imageError ? (
          <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded-t-lg">
            <ImageOff className="w-12 h-12 text-gray-400" />
          </div>
        ) : (
          <Image
            src={product.thumbnail}
            alt={product.title}
            width={300}
            height={200}
            className="w-full h-48 object-cover rounded-t-lg"
            loading="eager"
            onError={() => setImageError(true)}
          />
        )}
      </CardHeader>
      <CardContent>
        <CardTitle>{product.title}</CardTitle>
        <CardDescription>{product.description}</CardDescription>
        <p className="text-lg font-semibold">${product.price}</p>
      </CardContent>
    </Card>
  );
});

ProductCard.displayName = 'ProductCard';