import { Red_Hat_Display } from "next/font/google";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import GridBackground from "@/components/GridBackground";

const redHatDisplay = Red_Hat_Display({
  variable: "--font-red-hat-display",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={`${redHatDisplay.className} relative min-h-screen font-[family-name:var(--font-red-hat-display)]`}>
      <GridBackground />
      
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header />
      </div>
      
      {/* Main Content */}
      <main className="relative z-10 pt-24">
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
}
