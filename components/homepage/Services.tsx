import Image from "next/image";
import React from "react";
import SectionHeader from "../ui/SectionHeader";
import AppLayout from "@/layout/AppLayout";

const services = [
  {
    title: "Web App Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut ligula odio. Quisque hendrerit risus quis gravida feugiat. Integer venenatis augue.",
  },
  {
    title: "Mobile App Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut ligula odio. Quisque hendrerit risus quis gravida feugiat. Integer venenatis augue.",
  },
  {
    title: "UI/UX Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut ligula odio. Quisque hendrerit risus quis gravida feugiat. Integer venenatis augue.",
  },
  {
    title: "AI Automation",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut ligula odio. Quisque hendrerit risus quis gravida feugiat. Integer venenatis augue.",
  },
];

const Services = () => {
  return (
    <AppLayout>
      <SectionHeader
        title="Why Choose EMOS Technologies for Innovative Software Development Services"
        description="EMOS Technologies offers custom software, mobile app development, and cloud services tailored for businesses, ensuring scalable, secure, and innovative solutions in today's digital era."
        maxWidth="max-w-[1123px]"
      />

      <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[24px] sm:gap-[28px]">
        {services.map((service, index) => (
          <div
            key={index}
            className="px-[20px] sm:px-[24px] py-[37px] sm:min-h-[296px] md:min-h-[388px] rounded-[9px] border border-[#9B9BA1] bg-[#008E82]"
          >
            <div className="flex flex-col items-start gap-[8px] sm:gap-[18px]">
              <div className="flex flex-col items-start gap-[21px]">
                <div className="relative w-[30px] h-[30px] sm:w-[53px] sm:h-[53px]">
                  <Image
                    src="/services/web-dev.svg"
                    alt="web-dev"
                    fill
                    className="object-contain"
                  />
                </div>
                <h1 className="text-white text-[20px] lg:text-[24px] font-semibold leading-[32px] tracking-[-0.4px] lg:tracking-[-0.48px]">
                  {service.title}
                </h1>
              </div>
              <div className="flex flex-col items-start">
                <p className="text-[#E5E5E5] text-[16px] md:text-[18px] font-medium leading-[28px] w-full">
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </AppLayout>
  );
};

export default Services;
