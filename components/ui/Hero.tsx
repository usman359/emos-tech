"use client";

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
    <section
      className="min-h-[904px]"
      style={{
        background:
          "url('/hero/bg-hero.png') black 0px -0.185px / 100% 107.383% no-repeat",
        opacity: 0.93,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Hero container */}
      <div className="mx-auto flex w-[95%] max-w-[1149px] flex-col items-center justify-center py-[40px] sm:pt-[90px] sm:pb-[130px]">
        <div className="flex  flex-col items-center justify-center gap-[24px]">
          <div className="flex flex-col items-center gap-[20px]">
            {pathname === "/" && (
              <h1 className="flex flex-col max-w-[964px] text-center text-[24px] leading-[38px] font-bold text-[#FAFAFA] sm:text-[56px] sm:leading-[73px]">
                <span>
                  Innovative{" "}
                  <span className="text-[#00AA9C]">Digital Solutions</span>
                </span>
                <span>for Business Growth, Success,</span>
                <span>and Scalability</span>
              </h1>
            )}
            {pathname === "/about" && (
              <h1
                style={{ fontFamily: "var(--font-poppins)" }}
                className="flex flex-col text-center max-w-[1042px] text-[24px] leading-[38px] font-bold text-[#FAFAFA] sm:text-[56px] sm:leading-[73px]"
              >
                <span>About EMOS Technologies - </span>
                <span>
                  Building Tailored{" "}
                  <span className="text-[#00AA9C]">Digital Solutions</span>
                </span>
                <span>for Tomorrow</span>
              </h1>
            )}
          </div>

          {/* Button */}
          <div className="flex h-[55px] w-full max-w-[288px] cursor-pointer items-center justify-center rounded-[6px] border-[1px] border-[#00BDAD] bg-[#00AA9C] sm:h-[60px] sm:max-w-[376px]">
            <button className="cursor-pointer text-[18px] leading-[28px] font-medium tracking-[-0.36px] text-[#FAFAFA] sm:text-[20px] sm:tracking-[-0.4px]">
              SCHEUDLE A QUICK MEETING
            </button>
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
      </div>
    </section>
  );
};

export default Hero;
