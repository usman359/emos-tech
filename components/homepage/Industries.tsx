import Image from "next/image";
import React from "react";
import SectionHeader from "../ui/SectionHeader";
import AppLayout from "@/layout/AppLayout";

const industries = [
  {
    icon: "/industries/financial.svg",
    title: "Financial Intelligence",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula eros eu ex pretium, quis sagittis tortor volutpat. Proin vitae lectus at ante lacinia fringilla. In hac habitasse platea dictumst.",
  },
  {
    icon: "/industries/cloud.svg",
    title: "Cloud & AI Intelligence",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula eros eu ex pretium, quis sagittis tortor volutpat. Proin vitae lectus at ante lacinia fringilla. In hac habitasse platea dictumst.",
  },
  {
    icon: "/industries/eCommerce.svg",
    title: "eCommerce Intelligence",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula eros eu ex pretium, quis sagittis tortor volutpat. Proin vitae lectus at ante lacinia fringilla. In hac habitasse platea dictumst.",
  },
  {
    icon: "/industries/customer.svg",
    title: "Customer Intelligence",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula eros eu ex pretium, quis sagittis tortor volutpat. Proin vitae lectus at ante lacinia fringilla. In hac habitasse platea dictumst.",
  },
  {
    icon: "/industries/healthcare.svg",
    title: "Healthcare Intelligence",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula eros eu ex pretium, quis sagittis tortor volutpat. Proin vitae lectus at ante lacinia fringilla. In hac habitasse platea dictumst.",
  },
  {
    icon: "/industries/production.svg",
    title: "Production Intelligence",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula eros eu ex pretium, quis sagittis tortor volutpat. Proin vitae lectus at ante lacinia fringilla. In hac habitasse platea dictumst.",
  },
];

const Industries = () => {
  return (
    <AppLayout className="flex flex-col items-center gap-[40px] lg:gap-[69px]">
      <SectionHeader
        title="Make Data-Driven Decisions with Our Custom Business Intelligence Development Services"
        description="EMOS Technologies software development stands out with customized, scalable solutions, innovative technologies, and a client-focused approach that drives long term business growth."
        maxWidth="max-w-[927px]"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px] lg:gap-[50px] items-start w-full">
        {industries.map((industry, index) => (
          <div key={index} className="flex flex-col min-h-[195px] gap-[16px]">
            <div className="flex items-center gap-[16px]">
              <Image
                src={industry.icon}
                alt={industry.title}
                width={24}
                height={24}
              />
              <h1 className="text-white text-[20px] lg:text-[30px] font-medium leading-[40px] tracking-[-0.4px] lg:tracking-[-0.64px]">
                {industry.title}
              </h1>
            </div>

            <div className="h-[1px] bg-white" />

            <div className="flex flex-col items-start gap-[12px]">
              <p className="text-[#D4D4D4] text-[14px] lg:text-[16px] font-normal leading-[24px]">
                {industry.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-[336px] h-[60px] shadow-[0px_4px_13.4px_0px_rgba(191, 114, 238, 0.12)] bg-[#00AA9C] rounded-[5px] border-[1px] border-[#D9F5F3] flex items-center justify-center cursor-pointer">
        <button className="text-[#FAFAFA] text-center text-[20px] font-medium leading-[28px] tracking-[-0.4px] cursor-pointer">
          Explore More Industries
        </button>
      </div>
    </AppLayout>
  );
};

export default Industries;
