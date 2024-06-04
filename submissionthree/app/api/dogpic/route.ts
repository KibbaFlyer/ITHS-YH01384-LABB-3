import { NextResponse } from "next/server";
export async function GET() {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/image/random", { cache: 'no-store' });
    const data = await response.json();
    return NextResponse.json(data);
  } catch (err) {
    console.log(err);
  }
}
