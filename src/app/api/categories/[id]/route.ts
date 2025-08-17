import { NextResponse } from 'next/server';
import { categoriesData } from '../../../../../mock/categories';
import { PropsParams } from '@/type';

export async function GET(req: Request, { params }: PropsParams) {
  const { id } = await params;
  const filtered = categoriesData.find((item) => item.id.toString() === id);
  return NextResponse.json({
    data: filtered,
    status: 200
  });
}
