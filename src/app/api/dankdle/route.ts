import HolyTime from 'holy-time';
import { NextResponse } from 'next/server';

export const revalidate = HolyTime.Units.DAY;

export async function GET() {
  const response = await fetch(`https://dankmemer.lol/api/bot/items`);
  const data = await response.json();

  return NextResponse.json(data);
}
