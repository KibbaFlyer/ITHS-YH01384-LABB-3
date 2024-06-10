
export async function POST(request: Request) {
  if (request.method === "POST") {
    const { artist, title } = await request.json();

    if (!artist || !title) {
      return new Response(JSON.stringify({ error: "Missing required 'artist' or 'title' field." }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    const result = await fetch(
      `https://api.lyrics.ovh/v1/${encodeURIComponent(
        artist
      )}/${encodeURIComponent(title)}`
    );
    const jsonResult = await result.json();
    return new Response(JSON.stringify(jsonResult));
  }
}
