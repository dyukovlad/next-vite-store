import { ReactNode } from 'react';

interface CatalogLayoutProps {
  children: ReactNode;
}

export function CatalogLayout({ children }: CatalogLayoutProps) {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Product Catalog</h1>
      {children}
    </div>
  );
}