import { HeroSection } from "@/components/sections/HeroSection";
import { VideoShowcase } from "@/components/sections/VideoShowcase";
import { PrizeShowcase } from "@/components/sections/PrizeShowcase";
import { TestimonialsSection } from "@/components/sections/TestimonialSection";
import FAQSection from "@/components/FAQSection";
import InstagramResults from "@/components/sections/InstagramResults";
import MasterClassSection from "@/components/sections/MasterClassSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PrizeShowcase />
      <InstagramResults />
      {/* <VideoShowcase /> */}
      <TestimonialsSection />
      <MasterClassSection />
      <FAQSection />
    </main>
  );
}
