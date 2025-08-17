import { NextResponse } from 'next/server';
import { banner, keys } from '../../../../../mock/banner';

export async function GET(req: Request, { params }: { params: { id: keys } }) {
  const { id } = params;
  return NextResponse.json({
    data: banner?.[id ?? 'banner1'],
    status: 200
  });
}
