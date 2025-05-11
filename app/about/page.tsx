import Hero from "@/components/homepage/Hero";
import MileStone from "@/components/about/MileStone";
import About from "@/components/about/About";
import CoreValues from "@/components/about/CoreValues";
import Team from "@/components/about/Team";
import CallToAction from "@/components/about/CallToAction";
import Contact from "@/components/about/Contact";
import GetStarted from "@/components/about/GetStarted";

const AboutPage = () => {
  return (
    <>
      <Hero />
      <MileStone />
      <About />
      <CoreValues />
      <Team />
      <CallToAction />
      <Contact />
      <GetStarted />
    </>
  );
};

export default AboutPage;
