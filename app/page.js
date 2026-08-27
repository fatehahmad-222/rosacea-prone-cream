import Navbar from "./components/Navbar";
import Marquee from "./components/Marquee";
import Hero from "./components/Hero";
import ProblemStrip from "./components/ProblemStrip";
import VideoSection from "./components/VideoSection";
import PoweredBy from "./components/PoweredBy";
import BenefitsBand from "./components/BenefitsBand";
import StatsBand from "./components/StatsBand";
import Ingredients from "./components/Ingredients";
import BeforeAfter from "./components/BeforeAfter";
import VisibleDailyCare from "./components/VisibleDailyCare";
import HowToUse from "./components/HowToUse";
import WhyChoose from "./components/WhyChoose";
import ImageSection from "./components/ImageSection";
import FAQ from "./components/FAQ";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Reviews  from "./components/Reviews";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Navbar />
      <Marquee />
      <main className="flex-1">
        <Hero />
        <ProblemStrip />
        <VideoSection />
        <PoweredBy />
        <BenefitsBand />
        <StatsBand />
        <Ingredients />
        <BeforeAfter />
        <Reviews />
        <VisibleDailyCare />
        <HowToUse />
        <WhyChoose />
        <ImageSection />
        <FAQ />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
