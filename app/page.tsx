import AboutUs from "@/components/homepage/AboutUs";
import Hero from "@/components/ui/Hero";
import Services from "@/components/homepage/Services";
import WorldWide from "@/components/homepage/WorldWide";
import CallToAction from "@/components/homepage/CallToAction";
import Industries from "@/components/homepage/Industries";
import Clients from "@/components/homepage/Clients";
import Development from "@/components/homepage/Development";
import Process from "@/components/homepage/Process";
import Discover from "@/components/homepage/Discover";
import ContactUs from "@/components/homepage/ContactUs";
import Faqs from "@/components/homepage/Faqs";
import GetStarted from "@/components/homepage/GetStarted";

const HomePage = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <Services />
      <WorldWide />
      <CallToAction />
      <Industries />
      <Clients />
      <Development />
      <Process />
      <Discover />
      <ContactUs />
      <Faqs />
      <GetStarted />
    </>
  );
};

export default HomePage;
