import { ICategory, PropsParams } from '@/type';
import { notFound } from 'next/navigation';
import { categoriesData } from '../../../../../mock/categories';

export const revalidate = 3600;

export async function generateStaticParams() {
  return categoriesData?.slice(0, 3).map((cat: ICategory) => ({ id: cat.id?.toString() }));
}

export default async function CategoryPage({ params }: PropsParams) {
  // const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
  const { id } = await params;
  const category = categoriesData.find((cat) => cat.id.toString() === id);
  // const category = await fetch(`${baseUrl}/api/categories/${id}`).then((res) => res.json());

  if (!category) return notFound();

  return (
    <div className="w-full bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-xl bg-yellow-50 p-6">
            <h3 className="mb-2 text-lg font-semibold text-yellow-800">ID de Categoría</h3>
            <p className="text-3xl font-bold text-yellow-600">{category?.id}</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-6">
            <h3 className="mb-2 text-lg font-semibold text-yellow-800">Nombre de Categoría</h3>
            <p className="text-3xl font-bold text-yellow-600">{category?.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
