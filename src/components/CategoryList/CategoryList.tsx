import CardCategory from '@/components/CategoryList/card-categori';
import { ICategory } from '@/type';
import { Pill, Syringe, Activity } from 'lucide-react'; // ejemplo de íconos

export const iconMap: Record<number, React.ReactNode> = {
  1: <Pill className="h-6 w-6" />,
  2: <Syringe className="h-6 w-6" />,
  3: <Activity className="h-6 w-6" />
};

export default async function MedicationsList() {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
  const ress = await fetch(`${baseUrl}/api/categories`, { cache: 'no-store' });
  const { data } = await ress.json();

  return (
    <div className="w-full px-4 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-800 md:text-3xl">
            {'Obtén todo, justo aquí'}
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-8">
        {data?.map((cat: ICategory, index: number) => (
          <CardCategory category={{ ...cat, icons: iconMap[cat.id] }} key={index} />
        ))}
      </div>
    </div>
  );
}
