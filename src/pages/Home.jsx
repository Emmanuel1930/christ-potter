import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import ServiceStrip from "../components/sections/ServiceStrip";
import Mission from "../components/sections/Mission";
import EventBanner from "../components/sections/EventBanner";
import Ministries from "../components/sections/Ministries";
import Pastor from "../components/sections/Pastor";
import Visit from "../components/sections/Visit";
import CtaBand from "../components/sections/CtaBand";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <ServiceStrip />
        <Mission />
        <EventBanner />
        <Ministries />
        <Pastor />
        <Visit />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
