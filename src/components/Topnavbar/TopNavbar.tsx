import {Menu} from 'lucide-react';
import Localization from "@/components/Localization/Localization";
import MenuCategory from "@/components/MenuCategory/MenuCategory";
import HeaderUserSection from "@/components/Avatar/Avatar";
import PageWidthContainer from "@/components/Layout/PageWidthContainer";

export default async function Navbar() {
    return (
        <>
            <nav className="w-full border-b border-gray-200 bg-white">
                <div className="container mx-auto px-4 py-3">
                    <div className="flex items-center justify-between gap-4">
                        {/* Mobile: Hamburger menu + Logo */}
                        <div className="flex items-center gap-3 md:hidden">
                            <button className="p-1">
                                <Menu className="h-6 w-6 text-gray-700"/>
                            </button>
                            <h1 className="text-xl font-bold text-gray-900">Daniel Mastrapa</h1>
                        </div>

                        {/* Desktop: Logo */}
                        <div className="hidden md:flex flex-shrink-0">
                            <h1 className="text-2xl font-bold text-gray-900">Daniel Mastrapa</h1>
                        </div>

                        {/* Desktop: Center section with location, categories, and search */}
                        <div className="hidden md:flex items-center gap-4 flex-1 max-w-4xl">
                            {/* Location selector */}
                            <Localization/>
                            <div className="relative max-w-lg flex-1">
                                {/* Category selector */}
                                <MenuCategory/>
                                <input
                                    type="text"
                                    placeholder="Busca productos, categorías o marcas..."
                                    className="w-full rounded-md border border-gray-300 py-2 pl-40 pr-4 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>
                        </div>

                        {/* Location icon + User avatar */}
                        <HeaderUserSection/>
                    </div>

                    <div className="mt-3 md:hidden">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Busca productos, categorías o marcas..."
                                className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm bg-gray-50"
                            />
                        </div>
                    </div>
                </div>

                {/* Bottom navigation */}
            </nav>

                <div className="hidden md:block bg-[var(--color-primary)] text-white">
                    <PageWidthContainer>
                    <div className="container mx-auto px-4">
                        <div className="flex items-center space-x-8">
                            <a
                                href="#"
                                className="py-3 text-sm font-medium transition-colors hover:text-indigo-200"
                            >
                                Catálogo
                            </a>
                            <a
                                href="#"
                                className="py-3 text-sm font-medium transition-colors hover:text-indigo-200"
                            >
                                Quiénes somos
                            </a>
                            <a
                                href="#"
                                className="py-3 text-sm font-medium transition-colors hover:text-indigo-200"
                            >
                                Entregas
                            </a>
                            <a
                                href="#"
                                className="py-3 text-sm font-medium transition-colors hover:text-indigo-200"
                            >
                                Pagos
                            </a>
                            <a
                                href="#"
                                className="py-3 text-sm font-medium transition-colors hover:text-indigo-200"
                            >
                                Preguntas frecuentes
                            </a>
                        </div>
                    </div>
                    </PageWidthContainer>
                </div>


        </>
    );
}
