import Banner from '@/components/Banner/Banner';
import { IBanner } from '../../../interface/banner';

export async function GridBanner() {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
  const response = await fetch(`${baseUrl}/api/banner`, { cache: 'no-store' });
  const { data } = await response.json();

  return (
    <div className="grid grid-cols-1 gap-4 px-4 py-8 md:grid-cols-3 lg:gap-6">
      {data?.map((item: IBanner, index: number) => (
        <Banner banner={item} key={index} className={''} />
      ))}
    </div>
  );
}
