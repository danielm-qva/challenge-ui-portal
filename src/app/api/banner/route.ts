import { NextResponse } from 'next/server';
import { banner } from '../../../../mock/banner';

export async function GET() {
  return NextResponse.json({
    data: banner,
    status: 200
  });
}
