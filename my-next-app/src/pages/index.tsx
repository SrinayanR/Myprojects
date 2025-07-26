// import Image from "next/image";
// import { Geist, Geist_Mono } from "next/font/google";

import { VideoCard } from "@/components/VideoCard";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export default function Home() {
  return (
    <div>
      <VideoCard
        title="this is harkirat video"
        image="photo.png"
        tumbimg="photo.png"
        name="harkirat"
        views="25k"
        ago="1 day ago"
      ></VideoCard>
    </div>
  );
}
