import { HeroSection } from "@/components/sections/HeroSection";
import { VideoShowcase } from "@/components/sections/VideoShowcase";
import { PrizeShowcase } from "@/components/sections/PrizeShowcase";
import { TestimonialsSection } from "@/components/sections/TestimonialSection";
import FAQSection from "@/components/FAQSection";
export default function Home() {
  return (
    <main>
      <HeroSection />
      <PrizeShowcase />
      <VideoShowcase />
      <TestimonialsSection />
      <FAQSection />
    </main>
  );
}
