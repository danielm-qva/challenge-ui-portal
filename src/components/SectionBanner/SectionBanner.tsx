import { IProduct } from '../../../interface/product';
import ProductCard from '../ProductCard/product-card';
import { Suspense } from 'react';
import ProductCarousel from '@/components/Carusel/ProductCarousel';

// const ProductCarousel = dynamic(() => import('@/components/Carusel/ProductCarousel'), {
//   ssr: false,
//   loading: () => <p>Cargando...</p>
// });

export default async function SectionBanner() {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
  const response = await fetch(`${baseUrl}/api/products`);
  const { data } = await response.json();

  return (
    <section className="px-4 py-8">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-2xl font-bold text-gray-900">Recomendado para ti</h2>

        {/* Desktop grid */}
        <div className="hidden grid-cols-2 gap-6 sm:grid-cols-2 md:grid lg:grid-cols-4 xl:grid-cols-5">
          {data.map((product: IProduct, idx: number) => (
            <ProductCard product={product} key={idx} />
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="block md:hidden">
          <Suspense fallback={<p>Cargando productos...</p>}>
            <ProductCarousel products={data} />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
