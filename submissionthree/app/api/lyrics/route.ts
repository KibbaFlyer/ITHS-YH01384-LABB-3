import { NextResponse } from "next/server";
export async function GET(artist: string, title: string) {
  try {
    const response = await fetch(
      `https://api.lyrics.ovh/v1/${artist}/${title}`
    );
    const data = await response.json();
    return NextResponse.json(data);
  } catch (err) {
    console.log(err);
  }
}
