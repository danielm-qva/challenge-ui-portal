import { NextResponse } from 'next/server';
import { categoriesData } from '../../../../../mock/categories';

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const filtered = categoriesData.find((item) => item.id.toString() === id);

  return NextResponse.json({
    data: filtered,
    status: 200
  });
}
