import { NextResponse, type NextRequest } from 'next/server';
import { pinata } from '@/utils/config';

export async function POST(req: NextRequest) {
  try {
    const data = await req.formData();
    const file: File | null = data.get('file') as unknown as File;
    const { cid } = await pinata.upload.public.file(file);
    const url = await pinata.gateways.public.convert(cid);
    return NextResponse.json(url, { status: 200 });
  } catch (error) {
    console.error('Error uploading file', error);
    return NextResponse.json(
      { error: 'Error uploading file' },
      { status: 500 }
    );
  }
}
