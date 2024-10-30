import Image from "next/image";
import SourcesSection from "/app/components/SourcesSection";
import Navbar from "/app/components/Navbar";
import PlaylistsSection from "/app/components/PlaylistsSection";
import ReviewsSection from "/app/components/ReviewsSection";
import Footer from "/app/components/Footer";

export default function Home() {
  return (
    <>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <div className="flex-grow mt-24 container mx-auto mb-20 px-12 py-4">
        <section id="sources" className="scroll-mt-24"><SourcesSection/></section>
      </div>
      <Footer  />
    </main>
    </>
  );
}