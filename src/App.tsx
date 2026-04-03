import { Routes, Route } from "react-router-dom";
import Home from "./pages/homePage";
import About from "./pages/aboutUsPage";
import { ContactUs } from "./pages/contactUsPage";
import GuestPage from "./pages/guestPage";
import InvestPage from "./pages/investPage";
import HostPage from "./pages/hostPage";
import EarnMoreModal from "./components/earnModal";

export default function App() {
  return (
    <>
      <EarnMoreModal />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/guest" element={<GuestPage />} />
        <Route path="/invest" element={<InvestPage />} />
        <Route path="/host" element={<HostPage />} />
      </Routes>
    </>
  );
}
