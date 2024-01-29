import Image from "next/image";

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params

  const fcMetadata = {
    "fc:frame": "vNext",
    "fc:frame:post_url": `https://rizzcheck.xyz`,
    "fc:frame:image": `https://utfs.io/f/de30555a-de08-4403-9e16-0f9cbec82588-idppxz.avif`,
    "fc:frame:author": "boredhead",
    "fc:frame:button": "Touch Grass",
  };

  return {
    title: "touch some Grass",
    openGraph: {
      title: "touch some Grass",
      images:
        "https://utfs.io/f/de30555a-de08-4403-9e16-0f9cbec82588-idppxz.avif",
    },
    other: {
      ...fcMetadata,
    },
    metadataBase: new URL("https://touchsomegrass.vercel.app"),
  };
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Touch some grass
    </main>
  );
}
