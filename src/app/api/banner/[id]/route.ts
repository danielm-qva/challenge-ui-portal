import { NextResponse } from 'next/server';
import { banner, keys } from '../../../../../mock/banner';

type Props = {
  params: Promise<{ id: keys }>;
};

export async function GET(req: Request, { params }: Props) {
  const { id } = await params;
  return NextResponse.json({
    data: banner?.[id ?? 'banner1'],
    status: 200
  });
}
