import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={`${geistSans.className} ${geistMono.className}`}>
      <div className="flex flex-col gap-6 pl-16 py-8">
        <h1 className="text-3xl font-semibold text-gray-900">
          Welcome to REALSEO
        </h1>
        <p className="text-lg text-gray-600">
          The power behind your online presence. Get started building your SEO-optimized website today.
        </p>
      </div>
    </div>
  );
}
