import AppLayout from "@/layout/AppLayout";
import Image from "next/image";
import React from "react";
import SectionHeader from "../ui/SectionHeader";

const clients = [
  {
    image: "/clients/client-1.svg",
    name: "Phipplip Phillip",
    desgination: "Founer Grok Tech",
  },
  {
    image: "/clients/client-2.svg",
    name: "Phipplip Phillip",
    desgination: "Founer Grok Tech",
  },
  {
    image: "/clients/client-3.svg",
    name: "Phipplip Phillip",
    desgination: "Founer Grok Tech",
  },
  {
    image: "/clients/client-4.svg",
    name: "Phipplip Phillip",
    desgination: "Founer Grok Tech",
  },
];

const Clients = () => {
  return (
    <section className="bg-gradient-to-r from-[#008E82] to-[#00433D]">
      <AppLayout className="min-h-[809px] py-[51px] lg:py-[85px]">
        <div className="flex flex-col items-center gap-[40px] lg:gap-[60px]">
          <SectionHeader
            title="Our Clients Are Our Superheroes. We Prioritize Delivering Excellent Products, Thorough Training, And Optimal Execution"
            description="EMOS Technologies offers custom software, mobile app development, and cloud services tailored for businesses, ensuring scalable, secure, and innovative solutions in today's digital era."
            maxWidth="max-w-[1015px]"
          />

          <div className="grid w-full grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[18px]">
            {clients.map((client, index) => (
              <div key={index} className="relative min-h-[349px]">
                <Image
                  src={client.image}
                  alt={client.name}
                  width={318}
                  height={349}
                  className="rounded-[12px] w-full h-full object-cover"
                />
                <div className="absolute bottom-[16px] left-0 right-0 w-[calc(100%-32px)] mx-[16px] h-[71px] rounded-[9px] bg-[rgba(180,180,180,0.10)] shadow-[11.9px_-11.9px_-11.9px_0px_rgba(137,137,137,0.10)_inset,-11.9px_11.9px_11.9px_0px_rgba(255,255,255,0.10)_inset] backdrop-blur-[11.899px] flex flex-col justify-center pl-[13px]">
                  <h3 className="text-white text-[16px] font-medium leading-[24px]">
                    {client.name}
                  </h3>
                  <p className="text-white text-[12px] font-medium leading-[20px]">
                    {client.desgination}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AppLayout>
    </section>
  );
};

export default Clients;
