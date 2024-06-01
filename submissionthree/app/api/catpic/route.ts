import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch("https://cataas.com/cat");
    const blob = await response.blob();
    const imageUrl = URL.createObjectURL(blob);
    return new Response(imageUrl);
  } catch (err) {
    console.log(err);
  }
}
