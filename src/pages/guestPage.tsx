import HeroSection from "../components/guest/hero";
import FeaturedProperties from "../components/guest/featuredProperties";
import { Navbar } from "../layout/navbar";
import PopularLocations from "../components/guest/popularLocations";
import TrustRaum from "../components/guest/trustRaum";
import AdvanceBooking from "../components/guest/advancedBooking";
import { StepsToBook } from "../components/guest/bokingSteps";
import Footer from "../layout/footer";
import FAQ from "../components/home/faq";
import { Download } from "../components/guest/download";

const GuestPage = () => {
  return (
    <main className="bg-[#151419]">
      <Navbar theme="light" />
      <HeroSection />
      <FeaturedProperties />
      <PopularLocations />
      <TrustRaum />
      <AdvanceBooking />
      <StepsToBook />
      <Download />
      <FAQ />
      <Footer />
    </main>
  );
};

export default GuestPage;
