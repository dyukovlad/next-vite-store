import { ReactNode } from 'react';
import { APP_TITLE, CONTAINER_CLASSES } from '@/constants';

interface CatalogLayoutProps {
  children: ReactNode;
}

export function CatalogLayout({ children }: CatalogLayoutProps) {
  return (
    <div className={CONTAINER_CLASSES}>
      <h1 className="text-3xl font-bold mb-8">{APP_TITLE}</h1>
      {children}
    </div>
  );
}