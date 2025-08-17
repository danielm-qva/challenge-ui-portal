import { ICategory } from '@/type';
import { notFound } from 'next/navigation';

export const revalidate = 3600;

export async function generateStaticParams() {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
  const categories = await fetch(`${baseUrl}/api/categories`, { cache: 'no-store' }).then((res) =>
    res.json()
  );

  return categories?.data?.slice(0, 5).map((cat: ICategory) => ({ id: cat.id?.toString() }));
}

export default async function CategoryPage({ params }: { params: { id: string } }) {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
  const category = await fetch(`${baseUrl}/api/categories/${params.id}`, {
    next: { revalidate: 3600 }
  }).then((res) => res.json());

  if (!category?.data) return notFound();

  return (
    <div className="w-full bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-xl bg-yellow-50 p-6">
            <h3 className="mb-2 text-lg font-semibold text-yellow-800">ID de Categoría</h3>
            <p className="text-3xl font-bold text-yellow-600">{category?.data?.id}</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-6">
            <h3 className="mb-2 text-lg font-semibold text-yellow-800">Nombre de Categoría</h3>
            <p className="text-3xl font-bold text-yellow-600">{category?.data?.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
