"use client";

import AppLayout from "@/layout/AppLayout";
import Image from "next/image";
import { usePathname } from "next/navigation";

const horizontalContainerItems = [
  {
    title: "+70",
    description: (
      <>
        <strong>Projects</strong> Developed and Launched
      </>
    ),
  },
  {
    title: "+15",
    description: (
      <>
        dedicated <strong>team members</strong>
      </>
    ),
  },
  {
    title: "+5",
    description: (
      <>
        years of <strong>quality service.</strong>
      </>
    ),
  },
];

const Hero = () => {
  const pathname = usePathname();

  return (
    <section className="relative min-h-[904px] overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[linear-gradient(345deg,#000_4.96%,#0CC7B3_90.14%)] bg-center bg-cover bg-fixed bg-no-repeat opacity-[0.64] blur-[235.05px]" />
      <AppLayout className="relative z-10 flex flex-col gap-[54px] py-[40px] sm:pt-[0px] sm:pb-[130px]">
        <div className="flex flex-col lg:flex-row items-center gap-[38px] lg:gap-[105px]">
          <div className="flex flex-col items-center lg:items-start">
            <div className="flex flex-col max-w-[738px] justify-center items-center lg:items-start gap-[30px]">
              <h1 className="text-[#00AA9C] text-[16px] lg:text-[24px] font-semibold leading-[32px] tracking-[-0.32px] lg:tracking-[-0.48px]">
                Mobile App Development
              </h1>
              <h2 className="text-[#FAFAFA] text-[24px] lg:text-[52px] text-center lg:text-left font-bold leading-[38px] lg:leading-[60px] tracking-[-1.04px]">
                Park Volt – Revolutionizing EV Charging and Parking Solutions
              </h2>
            </div>
            <p className="mt-[14px] text-[#A3A3A3] max-w-[669px] text-center lg:text-left text-[14px] lg:text-[20px] font-medium leading-[28px] tracking-[-0.28px] lg:tracking-[-0.4px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              vestibulum sollicitudin nulla, quis pretium lorem tincidunt
              feugiat. Curabitur posuere velit.
            </p>

            <button className="mt-[36px] max-w-[288px] rounded-[6px] w-full h-[55px] text-[18px] font-medium leading-[28px] tracking-[-0.36px] border-[1px] border-[#00BDAD] px-[20px] py-[10px] bg-[#00AA9C] uppercase text-[#FAFAFA]">
              Schedule a quick meeting
            </button>
          </div>

          <div className="w-[281px] h-[254px] lg:w-[430px] lg:h-[388px] aspect-[215/194] relative">
            <Image
              src="/services/mobile.png"
              alt="Hero"
              fill
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Horizontal Container */}
        <div className="mx-auto mt-[41px] grid w-[95%] grid-cols-1 gap-4 sm:mt-[92px] sm:grid-cols-3 lg:gap-0">
          {horizontalContainerItems.map((item, index) => (
            <div
              key={index}
              className="relative flex items-center justify-center"
            >
              <div className="flex w-full max-w-[250px] flex-col items-center justify-center gap-[24px] px-[27px] lg:max-w-[350px]">
                <h1 className="text-[41px] leading-[56px] font-bold tracking-[-0.82px] text-[#D9F5F3] sm:tracking-[-1.04px] lg:text-[52px]">
                  {item.title}
                </h1>
                <p className="text-center text-[12px] leading-[24px] font-normal text-[#E5E5E5] lg:text-[16px]">
                  {item.description}
                </p>
              </div>
              {/* Divider (not showing for the last item) */}
              {index !== horizontalContainerItems.length - 1 && (
                <div className="absolute top-0 right-0 hidden h-[186px] w-[2px] translate-x-full bg-white sm:block" />
              )}
            </div>
          ))}
        </div>
      </AppLayout>
    </section>
  );
};

export default Hero;
