import Image from 'next/image';
import { Suspense } from 'react';

export function PromotionalGrid() {
  return (
    <Suspense>
      <div className="w-full p-4">
        {/* Desktop Layout - Stacked vertically */}
        <div className="hidden h-[400px] gap-4 md:grid md:grid-cols-3 md:grid-rows-2">
          <div className="relative col-span-2 row-span-2 overflow-hidden rounded-2xl bg-cover bg-center bg-no-repeat p-8">
            <Image
              src="/images/banner/desktop/banner1.webp"
              alt="Banner"
              fill
              priority
              className="object-cover"
            />
            <div className="relative z-10"></div>
          </div>
          {/* Top right section - Kids products */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-yellow-300 to-yellow-500 p-6">
            <Image
              src="/images/banner/desktop/banner2D.webp"
              alt="Banner2"
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-100 to-blue-300 p-6">
            <Image
              src="/images/banner/desktop/banner3D.webp"
              alt="Banner3"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>

        {/* Mobile Layout - Stacked vertically */}
        <div className="space-y-4 md:hidden">
          {/* Main section */}
          <div className="relative min-h-[300px] overflow-hidden rounded-2xl bg-gradient-to-br from-blue-200 via-blue-300 to-blue-500 p-6">
            <Image
              src="/images/banner/mobile/banner1M.webp"
              alt="Banner1M"
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="relative min-h-[200px] overflow-hidden rounded-2xl bg-gradient-to-br from-yellow-300 to-yellow-500 p-6">
            <Image
              src="/images/banner/mobile/banner2M.webp"
              alt="Banner2m"
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="relative min-h-[180px] overflow-hidden rounded-2xl bg-gradient-to-br from-blue-100 to-blue-300 p-6">
            <Image
              src="/images/banner/mobile/banner3M.webp"
              alt="Banner3M"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </Suspense>
  );
}
