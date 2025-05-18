import Industry from "@/components/services/mobile/Industry";
import About from "@/components/services/mobile/About";
import Hero from "@/components/services/mobile/Hero";
import Process from "@/components/services/mobile/Process";
import CallToAction from "@/components/homepage/CallToAction";
import ContactUs from "@/components/services/mobile/Contact";
import GetStarted from "@/components/homepage/GetStarted";

const MobileAppDevelopment = () => {
  return (
    <>
      <Hero />
      <Industry />
      {/* <About /> */}
      <Process />
      <CallToAction />
      <ContactUs />
      <GetStarted />
    </>
  );
};

export default MobileAppDevelopment;
