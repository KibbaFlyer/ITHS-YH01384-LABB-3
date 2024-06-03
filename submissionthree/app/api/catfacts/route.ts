import { NextResponse } from "next/server";
export async function GET() {
  try {
    // Här har jag lagt till en no-store för att se till att den inte cachar svaret. 
    // Jag vill ha olika svar varje gång fetch kallas
    const response = await fetch(`https://catfact.ninja/fact`, { cache: 'no-store' });
    const data = await response.json();
    console.log(data);
    return NextResponse.json(data);
  } catch (err) {
    console.log(err);
  }
}
