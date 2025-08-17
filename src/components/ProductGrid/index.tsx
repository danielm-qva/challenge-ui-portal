import ProductCard from '@/components/ProductCard/product-card';
import { IProduct } from '../../../interface/product';
import Banner from '@/components/Banner/Banner';
import { Suspense } from 'react';
import ProductCardSkeleton from '@/components/ProductCard/product-skeleton';

const SkeletonProduct = () => {
  return (
    <>
      {Array.from({ length: 5 }).map((_, index) => (
        <ProductCardSkeleton key={index} />
      ))}
    </>
  );
};

export async function AsymmetricProductGrid() {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
  const products = await fetch(`${baseUrl}/api/products`, { cache: 'no-store' });
  const banners = await fetch(`${baseUrl}/api/banner/banner2`, { cache: 'no-store' });
  const { data } = await products.json();
  const { data: banner } = await banners.json();

  return (
    <Suspense fallback={<SkeletonProduct />}>
      <section className="w-full  px-4 py-8">
        <div className=" grid grid-cols-2 gap-4 md:grid-cols-6">
          <div className="relative col-span-2 row-span-1 overflow-hidden rounded-2xl">
            <Banner banner={banner[0]} className={'h-full w-full'} />
          </div>
          {data.map((product: IProduct, t: number) => (
            <div key={product._id} className="col-span-1">
              <ProductCard product={product} key={t} />
            </div>
          ))}
        </div>
      </section>
    </Suspense>
  );
}
