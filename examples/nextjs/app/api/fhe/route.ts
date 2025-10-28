import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    message: 'FHE API endpoint',
    status: 'ready',
    version: '1.0.0'
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Handle FHE operations
    return NextResponse.json({
      success: true,
      data: body
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Invalid request' },
      { status: 400 }
    );
  }
}
