import { NextResponse } from "next/server";
export async function GET() {
  try {
    const response = await fetch(
      "https://api.coindesk.com/v1/bpi/currentprice.json"
    );
    const data = await response.json();
    return NextResponse.json(data);
  } catch (err) {
    console.log(err);
  }
}