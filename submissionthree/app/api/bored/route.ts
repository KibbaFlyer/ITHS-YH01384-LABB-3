import { NextResponse } from "next/server";
export async function GET() {
  try {
    const response = await fetch("https://www.boredapi.com/api/activity");
    const data = await response.json();
    return NextResponse.json(data);
  } catch (err) {
    console.log(err);
  }
}
