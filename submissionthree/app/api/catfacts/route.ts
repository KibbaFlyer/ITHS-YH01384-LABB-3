import { NextResponse } from "next/server";
export async function GET() {
  try {
    // Här har jag lagt till en "Math Random" för att se till att den inte cachar svaret. Jag vill ha olika svar varje gång den körs
    const response = await fetch(`https://catfact.ninja/fact?random=${Math.random()}`);
    const data = await response.json();
    console.log(data);
    return NextResponse.json(data);
  } catch (err) {
    console.log(err);
  }
}
