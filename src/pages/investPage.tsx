import { Navbar } from "../layout/navbar";

import Footer from "../layout/footer";
import { InvestHero } from "../components/invest/heroSection";
import { HowToInvest } from "../components/invest/howToInvest";
import { Testimonials } from "../components/invest/testimonials";
import FAQ from "../components/home/faq";

const InvestPage = () => {
  return (
    <main className="bg-[#151419]">
      <Navbar theme="light" />
      <InvestHero />
      <HowToInvest />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
};

export default InvestPage;
