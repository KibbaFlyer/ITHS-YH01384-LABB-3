import { NextResponse } from "next/server";
import { boredObj } from "@/app/bored/page";

export async function GET() {
  try {
    // Denna API ligger nere för tillfället, därför har jag kommenterat ut anropet och skapar en egen "fake"
    //const response = await fetch("https://www.boredapi.com/api/activity", { cache: 'no-store' });
    //const data = await response.json();
    const obj: boredObj = { "activity": "Pushups", "type":"Excercise","participants": Math.floor(Math.random() * 100), "price": "free","link": "https://www.google.com"}
    return NextResponse.json(obj);
  } catch (err) {
    return new NextResponse("An error occurred while fetching the data.", {
      status: 500,
    });
  }
}
