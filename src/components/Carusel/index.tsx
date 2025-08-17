import { Suspense } from 'react';
import ProductCarousel from '@/components/Carusel/ProductCarousel';

export async function Carousel() {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
  const response = await fetch(`${baseUrl}/api/products`, { cache: 'no-store' });
  const { data } = await response.json();

  if (!data?.length) return null;

  const carouselProducts = [...data];

  return (
    <Suspense
      fallback={
        <div className="mx-auto w-full max-w-sm rounded-md border border-blue-300 p-4">
          <div className="flex animate-pulse space-x-4">
            <div className="size-10 rounded-full bg-gray-200"></div>
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 rounded bg-gray-200"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-2 h-2 rounded bg-gray-200"></div>
                  <div className="col-span-1 h-2 rounded bg-gray-200"></div>
                </div>
                <div className="h-2 rounded bg-gray-200"></div>
              </div>
            </div>
          </div>
        </div>
      }
    >
      <div className={'px-4 py-8'}>
        <h2 className="mb-8 text-[20px] text-gray-900">Lo más vendido</h2>
        <ProductCarousel products={carouselProducts} />
      </div>
    </Suspense>
  );
}
