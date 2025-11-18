import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = React.memo<ProductCardProps>(({ product }) => {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={300}
          height={200}
          className="w-full h-48 object-cover rounded-t-lg"
          loading="eager"
        />
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