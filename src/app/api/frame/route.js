export default async function handler(req, res) {
  if (req.method === "POST") {
    console.log(req.body);

    res.setHeader("Content-Type", "text/html");
    res.status(200).send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>wow this is peace</title>
          <meta property="og:title" content="grass is ische assayener">
          <meta property="og:image" content="https://utfs.io/f/09f67b6b-28f6-409e-81e1-80ec2f75f95e-1mpody.png">
          <meta name="fc:frame" content="vNext">
          <meta name="fc:frame:image" content="https://utfs.io/f/09f67b6b-28f6-409e-81e1-80ec2f75f95e-1mpody.png">
          <meta name="fc:frame:post_url" content="https://touchsomegrass-one.vercel.app/">
          <meta name="fc:frame:button:1" content="Have a nice day ">
        </head>
        <body>
          <p>grass is good, I love here</p>
        </body>
      </html>
    `);
  }
}
