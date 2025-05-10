import Image from "next/image";
import AppLayout from "@/layout/AppLayout";

const AboutUs = () => {
  return (
    <AppLayout className="lg:flex-row lg:justify-between">
      <div className="flex flex-col sm:w-[629px] items-start gap-[24px]">
        <h1 className="text-white text-[24px] sm:text-[36px] font-bold leading-[36px] sm:leading-[44px] tracking-[-0.48px] sm:tracking-[-0.72px]">
          How EMOS Technologies Drives Startup and Business Growth with
          Cutting-Edge Software Solutions?
        </h1>
        <p className="text-[#A3A3A3] text-[16px] sm:text-[20px] font-medium leading-[28px] tracking-[-0.32px] sm:tracking-[-0.4px]">
          At EMOS Technologies, we specialize in delivering cutting-edge
          software solutions tailored to the unique needs of startups and
          businesses. From web and mobile app development to AI-powered
          innovations, our expert team ensures seamless, scalable, and
          high-performing digital products. We empower businesses with
          innovative technology, helping them streamline operations, enhance
          user experiences, and achieve long-term growth in an ever-evolving
          digital landscape.
        </p>
        <div className="flex py-[10px] pr-[16px] justify-center items-center gap-[8px] rounded-[4px] cursor-pointer">
          <div className="text-[#00BDAD] text-[14px] font-medium leading-[20px]">
            EXPLORE OUR MISSION
          </div>
          <div className="w-[24px] h-[24px] flex justify-center items-center">
            <Image
              src="/about/right-arrow.svg"
              alt="right-arrow"
              width={10}
              height={8}
            />
          </div>
        </div>
      </div>

      <div className="w-full sm:w-[591px] h-[301px] sm:h-[474px] relative">
        <Image
          src="/about/about.png"
          alt="about"
          fill
          className="object-contain rounded-[5px] w-full h-full"
        />
      </div>
    </AppLayout>
  );
};

export default AboutUs;
