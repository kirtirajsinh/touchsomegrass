import Image from "next/image";

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params

  const fcMetadata = {
    "fc:frame": "vNext",
    "fc:frame:post_url": `https://touchsomegrass-one.vercel.app/`,
    "fc:frame:image": `https://utfs.io/f/67e1b776-f49d-41c8-b2f9-b10447bc9a38-avx0bg.webp`,
    "fc:frame:author": "boredhead",
    "fc:frame:button:1": "Touch Grass",
  };

  return {
    title: "touch some Grass",
    openGraph: {
      title: "touch some Grass",
      images:
        "https://utfs.io/f/67e1b776-f49d-41c8-b2f9-b10447bc9a38-avx0bg.webp",
    },
    other: {
      ...fcMetadata,
    },
    metadataBase: new URL("https://touchsomegrass-one.vercel.app/"),
  };
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Touch some grass
    </main>
  );
}
