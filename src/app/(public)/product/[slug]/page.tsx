import Image from 'next/image';
import { products } from '../../../../../mock/products';
import { IProduct } from '../../../../../interface/product';
import { PropsProducts } from '@/type';

export async function generateStaticParams() {
  return products?.slice(0, 5)?.map((item: IProduct) => ({ id: item._id?.toString() }));
}

export default async function ProductDetailComponent({ params }: PropsProducts) {
  const { slug } = await params;

  const productOne = products?.find((item: IProduct) => item.slug === slug);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="space-y-4">
            <div className=" rounded-2xl bg-white p-8 shadow-sm">
              <Image
                src={productOne?.image.url || '/placeholder.svg'}
                alt={productOne?.name || 'Product Image'}
                width={400}
                height={400}
                className="h-full w-full object-contain"
                priority
              />
            </div>
          </div>
          <div className="space-y-4">
            <div className="rounded-xl bg-yellow-50 p-6">
              <h3 className="mb-2 text-lg font-semibold text-yellow-800">Nombre del Producto</h3>
              <p className="text-3xl font-bold text-yellow-400">{productOne?.name}</p>
            </div>
            <div className="rounded-xl bg-yellow-50 p-6">
              <h3 className="mb-2 text-lg font-semibold text-yellow-800">
                Descripcion del Producto
              </h3>
              <p className="text-3xl font-bold text-yellow-400">{productOne?.description}</p>
            </div>
            <div className="rounded-xl bg-yellow-50 p-6">
              <h3 className="mb-2 text-lg font-semibold text-yellow-800">Nombre del Producto</h3>
              <p className="text-3xl font-bold text-yellow-400">{productOne?.name}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
