import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export const ProductCardSkeleton = () => {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <div className="w-full h-48 bg-gray-200 animate-pulse rounded-t-lg"></div>
      </CardHeader>
      <CardContent>
        <div className="h-6 bg-gray-200 animate-pulse mb-2"></div>
        <div className="h-4 bg-gray-200 animate-pulse mb-4"></div>
        <div className="h-6 bg-gray-200 animate-pulse w-1/4"></div>
      </CardContent>
    </Card>
  );
};