import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Values } from "@/components/sections/Values";
import { CuratedSelection } from "@/components/sections/CuratedSelection";
import { Testimonials } from "@/components/sections/Testimonials";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-accent/30 selection:text-accent-foreground">
      <Navbar />
      <Hero />
      <Values />
      <CuratedSelection />
      <Testimonials />
      <Footer />
    </main>
  );
}
