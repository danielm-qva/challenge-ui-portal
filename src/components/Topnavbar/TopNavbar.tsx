import { Menu } from 'lucide-react';
import Localization from '@/components/Localization/Localization';
import MenuCategory from '@/components/MenuCategory/MenuCategory';
import HeaderUserSection from '@/components/Avatar/Avatar';
import PageWidthContainer from '@/components/Layout/PageWidthContainer';
import Link from 'next/link';

export default async function Navbar() {
  return (
    <>
      <nav className="w-full border-b border-gray-200 bg-white">
        <PageWidthContainer>
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 md:hidden">
                <button className="p-1">
                  <Menu aria-label="Icons Menu" className="h-6 w-6 text-gray-700" />
                </button>
                <Link href={'/'}>
                  <h1 className="text-xl font-bold text-gray-900">Daniel Mastrapa</h1>
                </Link>
              </div>

              <div className="hidden flex-shrink-0 md:flex">
                <Link href={'/'}>
                  <h1 className="text-2xl font-bold text-gray-900">Daniel Mastrapa</h1>
                </Link>
              </div>

              <div className="hidden max-w-4xl flex-1 items-center gap-4 md:flex">
                {/* Location selector */}
                <Localization />
                <div className="relative max-w-lg flex-1">
                  {/* Category selector */}
                  <MenuCategory />
                  <input
                    type="text"
                    placeholder="Busca productos, categorías o marcas..."
                    className="w-full rounded-md border border-gray-300 py-2 pl-40 pr-4 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>
              <HeaderUserSection />
            </div>

            <div className="mt-3 md:hidden">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Busca productos, categorías o marcas..."
                  className="w-full rounded-md border border-gray-300 bg-gray-50 py-3 pl-4 pr-12 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
          </div>
        </PageWidthContainer>
      </nav>

      <div className="hidden bg-[var(--color-primary)] text-white md:block">
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
