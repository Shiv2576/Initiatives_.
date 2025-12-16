// app/page.tsx
import CTABanner from "@/components/cta-banner";
import FAQ from "@/components/faq";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import { Navbar } from "@/components/navbar";
import Pricing from "@/components/pricing";
import Testimonials from "@/components/testimonials";
import Background from "@/components/Background";
import Ghost from "@/components/ghost";

export default function Home() {
  return (
    <>
      {/* 1. Far background (e.g., gradient, particles, etc.) */}
      <Background />
      <Navbar />

      {/* 2. Navbar — must be above background, below ghost */}

      {/* 3. Main scrollable content */}
      <main className="pt-16 xs:pt-20 sm:pt-24">
        <Hero />
        <Features />
        <Testimonials />
        <CTABanner />
        <Footer />
      </main>

      {/* 4. Ghost — always on top, non-interactive */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          pointerEvents: "none",
          zIndex: 2147483647, // max z-index to guarantee on top
          // Optional: prevent ghost from being selected
          userSelect: "none",
          // Improve performance
          willChange: "transform",
        }}
      >
        <Ghost />
      </div>
    </>
  );
}
