import { HeroSection } from "@/components/sections/HeroSection";
import { VideoShowcase } from "@/components/sections/VideoShowcase";
import { PrizeShowcase } from "@/components/sections/PrizeShowcase";
import { TestimonialsSection } from "@/components/sections/TestimonialSection";
import FAQSection from "@/components/FAQSection";
import InstagramResults from "@/components/sections/InstagramResults";
// import MasterClassSection from "@/components/sections/MasterclassSection";

export default function Home() {
  return (
    <main>
       
      <HeroSection />
     {/* <MasterClassSection /> */}
      <PrizeShowcase />
      <TestimonialsSection />
      {/* <InstagramResults /> */}
      {/* <VideoShowcase /> */}
      <FAQSection />
    </main>
  );
}
