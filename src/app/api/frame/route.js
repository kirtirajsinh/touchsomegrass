import { NextResponse } from "next/server";

export async function POST(req) {
  if (req.method === "POST") {
    const body = await req.json();

    console.log(body, "req");

    return new NextResponse(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>wow this is peace</title>
          <meta property="og:title" content="grass is ische assayener">
          <meta property="og:image" content="https://utfs.io/f/cfd59eea-7d31-472f-8b4d-a332ac59ff55-i8rpwi.png">
          <meta name="fc:frame" content="vNext">
          <meta name="fc:frame:image" content="https://utfs.io/f/cfd59eea-7d31-472f-8b4d-a332ac59ff55-i8rpwi.png">
          <meta name="fc:frame:post_url" content="https://touchsomegrass-one.vercel.app/api/frame">
          <meta name="fc:frame:button:1" content="have a nice day ">
        </head>
        <body>
          <p>grass is good, I love here</p>
        </body>
      </html>
    `);
  }
}
