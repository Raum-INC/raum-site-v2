import Footer from "../layout/footer";
import { DiscoverStay } from "../components/home/discoverStay";
import DownloadApps from "../components/home/downloadApps";
import FAQ from "../components/home/faq";
import { ShortletsFeatures } from "../components/home/shortletFeatures";
import { RaumStandard } from "../components/home/standards";
import { TurnPropertyCTA } from "../components/home/turnYourProperty";
import { AboutRaum } from "../components/home/aboutRaum";
import OurServices from "../components/home/ourServices";
import HeroSection from "../components/home/hero";
import { Navbar } from "../layout/navbar";

export default function HomePage() {
  return (
    <main className="bg-[#151419]">
      <Navbar />
      <HeroSection />
      <RaumStandard />
      <OurServices />
      <TurnPropertyCTA />
      <DiscoverStay />
      <ShortletsFeatures />
      <AboutRaum />
      <DownloadApps />
      <FAQ />
      <Footer />
    </main>
  );
}
