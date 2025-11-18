'use client';

import InfiniteScroll from 'react-infinite-scroll-component';
import { ProductCard } from '@/components/ProductCard';
import { ProductProvider, useProduct } from '@/contexts/ProductContext';
import { Input } from '@/components/ui/input';
import { CatalogLayout } from '@/components/CatalogLayout';

function CatalogContent() {
  const { products, loading, error, hasMore, fetchMoreProducts, searchQuery, setSearchQuery } = useProduct();

  if (error) {
    return (
      <CatalogLayout>
        <p className="text-red-500">Error: {error}</p>
      </CatalogLayout>
    );
  }

  if (loading && products.length === 0) {
    return (
      <CatalogLayout>
        <p>Loading...</p>
      </CatalogLayout>
    );
  }

  return (
    <CatalogLayout>
      <div className="mb-4">
        <Input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="max-w-sm"
        />
      </div>
      <div id="scrollableDiv" style={{ height: '80vh', overflow: 'auto' }}>
        <InfiniteScroll
          dataLength={products.length}
          next={fetchMoreProducts}
          hasMore={hasMore}
          loader={<h4 className="text-center py-4">Loading...</h4>}
          endMessage={<p className="text-center py-4">No more products</p>}
          scrollableTarget="scrollableDiv"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          {!loading && products.length === 0 && searchQuery && (
            <p className="text-center py-4">No products found for &quot;{searchQuery}&quot;</p>
          )}
        </InfiniteScroll>
      </div>
    </CatalogLayout>
  );
}

export default function Home() {
  return (
    <ProductProvider>
      <CatalogContent />
    </ProductProvider>
  );
}
