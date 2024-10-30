import Image from "next/image";
import HomeSection from "./components/HomeSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from "@vercel/analytics/react"


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <SpeedInsights />
      <Analytics />
      <Navbar />
      <div className="mt-24 container mx-auto px-12 min-h-screen">
        <main className="flex-grow">
            <section><HomeSection /></section>
        </main>
      </div>
      <Footer />
    </main>

  );
}
