import { IProduct } from '../../../interface/product';
import ProductCard from '../ProductCard';
import { Suspense } from 'react';

export default async function SectionBanner() {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
  const response = await fetch(`${baseUrl}/api/products`, { cache: 'no-store' });
  const { data } = await response.json();
  return (
    <Suspense>
      <section className=" px-4 py-8">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-2xl font-bold text-gray-900">Recomendado para ti</h2>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {data.map((product: IProduct) => (
              <ProductCard product={product} key={product?._id} />
            ))}
          </div>
        </div>
      </section>
    </Suspense>
  );
}
