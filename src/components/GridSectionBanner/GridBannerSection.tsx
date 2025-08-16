import Image from "next/image";
import {Suspense} from "react";

export function PromotionalGrid() {
    return (
        <Suspense>
            <div className="w-full  p-4">
                <div className="hidden md:grid md:grid-cols-3 md:grid-rows-2 gap-4 h-[400px]">
                    <div
                        className="col-span-2 row-span-2 rounded-2xl p-8 relative overflow-hidden bg-cover bg-center bg-no-repeat">
                        <Image
                            src="/images/banner1.webp"
                            alt="Banner"
                            fill
                            priority
                            className="object-cover"
                        />
                        <div className="relative z-10"></div>
                    </div>
                    {/* Top right section - Kids products */}
                    <div
                        className="bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-2xl p-6 relative overflow-hidden">
                        <div className="text-white">
                            <h3 className="text-lg font-bold mb-2 leading-tight">
                                Cuida a los
                                <br/>
                                pequeños
                                <br/>
                                de casa con
                                <br/>
                                amor
                            </h3>
                        </div>

                        {/* Family image placeholder */}
                        <div className="absolute right-2 top-2 bottom-2">
                            {/*<img*/}
                            {/*    src="/happy-family-medicine.png"*/}
                            {/*    alt="Familia feliz con productos para niños"*/}
                            {/*    className="w-full h-full object-cover rounded-lg"*/}
                            {/*/>*/}
                        </div>
                    </div>

                    {/* Bottom right section - Best prices */}
                    <div
                        className="bg-gradient-to-br from-blue-100 to-blue-300 rounded-2xl p-6 relative overflow-hidden">
                        <div className="text-blue-900">
                            <h3 className="text-xl font-bold mb-1">¡Salud al</h3>
                            <h3 className="text-xl font-bold mb-2">Mejor Precio!</h3>
                            <p className="text-sm mb-3">
                                Medicamentos,
                                <br/>
                                vitaminas y más.
                            </p>
                            <button className="text-sm underline font-medium hover:no-underline transition-all">Comprar
                                ya
                            </button>
                        </div>

                        {/* Medicine products image placeholder */}
                        <div className="absolute right-2 top-2 bottom-2">
                            {/*<img*/}
                            {/*    src="/placeholder-514bj.png"*/}
                            {/*    alt="Medicamentos y vitaminas"*/}
                            {/*    className="w-full h-full object-contain"*/}
                            {/*/>*/}
                        </div>
                    </div>
                </div>

                {/* Mobile Layout - Stacked vertically */}
                <div className="md:hidden space-y-4">
                    {/* Main section */}
                    <div className="bg-gradient-to-br from-blue-200 via-blue-300 to-blue-500 rounded-2xl p-6 relative overflow-hidden min-h-[300px]">

                    </div>

                    {/* Kids section */}
                    <div
                        className="bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-2xl p-6 relative overflow-hidden min-h-[200px]">
                        <div className="flex justify-between items-start">
                            <div className="text-white">
                                <h3 className="text-lg font-bold leading-tight">Cuida a los pequeños de casa con
                                    amor</h3>
                            </div>
                            {/*<img*/}
                            {/*    src="/diverse-family.png"*/}
                            {/*    alt="Familia con niños"*/}
                            {/*    className="w-20 h-20 object-cover rounded-lg"*/}
                            {/*/>*/}
                        </div>
                    </div>

                    {/* Best prices section */}
                    <div
                        className="bg-gradient-to-br from-blue-100 to-blue-300 rounded-2xl p-6 relative overflow-hidden min-h-[180px]">
                        <div className="flex justify-between items-start">
                            <div className="text-blue-900">
                                <h3 className="text-lg font-bold mb-1">¡Salud al Mejor Precio!</h3>
                                <p className="text-sm mb-3">Medicamentos, vitaminas y más.</p>
                                <button
                                    className="text-sm underline font-medium hover:no-underline transition-all">Comprar
                                    ya
                                </button>
                            </div>
                            {/*<img src="/medicine-bottles-vitamins.png" alt="Medicamentos y vitaminas"*/}
                            {/*     className="w-16 h-16 object-contain"/>*/}
                        </div>
                    </div>
                </div>
            </div>
        </Suspense>
    )
}
