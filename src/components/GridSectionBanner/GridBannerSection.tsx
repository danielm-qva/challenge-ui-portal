import Image from "next/image";
import {Suspense} from "react";

export function PromotionalGrid() {
    return (
        <Suspense>
            <div className="w-full p-4">
              {/* Desktop Layout - Stacked vertically */}
                <div className="hidden md:grid md:grid-cols-3 md:grid-rows-2 gap-4 h-[400px]">
                    <div
                        className="col-span-2 row-span-2 rounded-2xl p-8 relative overflow-hidden bg-cover bg-center bg-no-repeat">
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
                    <div className="bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-2xl p-6 relative overflow-hidden">
                      <Image
                        src="/images/banner/desktop/banner2D.webp"
                        alt="Banner2"
                        fill
                        priority
                        className="object-cover"
                      />
                    </div>

                    <div className="bg-gradient-to-br from-blue-100 to-blue-300 rounded-2xl p-6 relative overflow-hidden">
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
                <div className="md:hidden space-y-4">
                    {/* Main section */}
                    <div className="bg-gradient-to-br from-blue-200 via-blue-300 to-blue-500 rounded-2xl p-6 relative overflow-hidden min-h-[300px]">
                      <Image
                        src="/images/banner/mobile/banner1M.webp"
                        alt="Banner1M"
                        fill
                        priority
                        className="object-cover"
                      />
                    </div>

                    <div className="bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-2xl p-6 relative overflow-hidden min-h-[200px]">
                      <Image
                        src="/images/banner/mobile/banner2M.webp"
                        alt="Banner2m"
                        fill
                        priority
                        className="object-cover"
                      />
                    </div>

                    <div className="bg-gradient-to-br from-blue-100 to-blue-300 rounded-2xl p-6 relative overflow-hidden min-h-[180px]">
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
    )
}
