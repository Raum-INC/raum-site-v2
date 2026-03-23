import FAQ from "../components/home/faq";
import HostCTA from "../components/host/hostCTA";
import HostHero from "../components/host/hostHero";
import { HowItWorks } from "../components/host/howToHost";
import { SustainableGoals } from "../components/host/SustainableGoals";
import { WhyRaumHost } from "../components/host/WhyHost";
import Footer from "../layout/footer";
import { Navbar } from "../layout/navbar";

const Host = () => {
  return (
    <main>
      <Navbar theme="light" />
      <HostHero />
      <WhyRaumHost />
      <HowItWorks />
      <SustainableGoals />
      <FAQ />
      <HostCTA />
      <Footer />
    </main>
  );
};

export default Host;
