import { NextResponse } from 'next/server';
import { products } from '../../../../mock/products';
import { getRandomUnique } from '@/lib/utils';

export async function GET() {
  return NextResponse.json({ data: getRandomUnique(products, 10), size: products?.length });
}
