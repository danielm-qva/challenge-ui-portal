import { NextResponse } from 'next/server';
import { categoriesData } from '../../../../mock/categories';

export async function GET() {
  return NextResponse.json({ data: categoriesData, size: categoriesData?.length, status: 200 });
}
