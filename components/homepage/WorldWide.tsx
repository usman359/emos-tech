"use client";

import { useEffect, useState } from "react";
import AppLayout from "@/layout/AppLayout";

const useWindowSize = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  return isLargeScreen;
};

const worldWideItems = [
  {
    title: "35+",
    subtitle: "Industries Served",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut ligula odio. Quisque hendrerit risus quis gravida feugiat. Integer venenatis augue.",
  },
  {
    title: "1600+",
    subtitle: "Tech Evangelists",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut ligula odio. Quisque hendrerit risus quis gravida feugiat. Integer venenatis augue.",
  },
  {
    title: "3000+",
    subtitle: "Solutions Designed",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut ligula odio. Quisque hendrerit risus quis gravida feugiat. Integer venenatis augue.",
  },
  {
    title: "500+",
    subtitle: "Legacy Processes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut ligula odio. Quisque hendrerit risus quis gravida feugiat. Integer venenatis augue.",
  },
  {
    title: "9+",
    subtitle: "Federal Partnerships",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut ligula odio. Quisque hendrerit risus quis gravida feugiat. Integer venenatis augue.",
  },
];

const WorldWide = () => {
  const isLargeScreen = useWindowSize();

  return (
    <section className="relative overflow-x-hidden">
      <div
        className="absolute w-[1328px] h-[652px] rounded-[372px] opacity-[0.65] top-0 left-[40%] transform hidden lg:block"
        style={{
          background:
            "radial-gradient(85.46% 78.52% at 51.41% 53.34%, rgba(0, 142, 130, 0.41) 0%, rgba(18, 18, 18, 0.00) 100%)",
          filter: "blur(67px)",
        }}
      />

      <AppLayout>
        <div className="flex flex-col lg:flex-row lg:justify-between gap-[24px] items-start w-full">
          <h1 className="text-white text-start md:text-center text-[24px] lg:text-[36px] font-bold leading-[36px] lg:leading-[44px] tracking-none lg:tracking-[-0.72px]">
            Transforming Businesses With Technology That Transcends Geographies
            And Platforms
          </h1>
          <p className="text-white text-start md:text-center text-[16px] lg:text-[18px] font-medium leading-[28px] lg:leading-[38px]">
            EMOS Technologies is a leading IT service provider, helping
            businesses transform their digital vision into reality. With a team
            of expert developers and innovators, we build cutting-edge digital
            solutions that drive growth, efficiency, and market leadership.
          </p>
        </div>

        <div className="flex flex-col items-start gap-[36px] lg:gap-[43px]">
          {/* First row with 3 items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center gap-[24px] lg:gap-[33px]">
            {worldWideItems
              .slice(0, isLargeScreen ? 3 : 4)
              .map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start w-full max-h-[250px] lg:min-h-[291px] py-[19px] lg:py-[39px] pl-[23px] lg:pl-[40px] border-l-[2px] border-white mx-auto"
                >
                  <div className="flex w-full flex-col items-start gap-[10px] lg:gap-[16px]">
                    <div className="flex w-full flex-col items-start gap-[16px] lg:gap-[24px]">
                      <h1 className="text-[#00BDAD] text-[36px] lg:text-[56px] font-medium leading-[38px]">
                        {item.title}
                      </h1>
                      <p className="text-white text-[18px] lg:text-[24px] font-semibold leading-[32px] tracking-[-0.48px]">
                        {item.subtitle}
                      </p>
                    </div>
                    <p className="text-[#E5E5E5] text-[14px] lg:text-[18px] font-medium leading-[28px]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
          </div>

          {/* Second row with 2 grid items and 1 special container */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-[33px]">
            {worldWideItems
              .slice(isLargeScreen ? 3 : 4, isLargeScreen ? 5 : 5)
              .map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start w-full max-h-[250px] lg:min-h-[291px] py-[19px] lg:py-[39px] pl-[23px] lg:pl-[40px] border-l-[2px] border-white mx-auto"
                >
                  <div className="flex w-full flex-col items-start gap-[10px] lg:gap-[16px]">
                    <div className="flex w-full flex-col items-start gap-[16px] lg:gap-[24px]">
                      <h1 className="text-[#00BDAD] text-[36px] lg:text-[56px] font-medium leading-[38px]">
                        {item.title}
                      </h1>
                      <p className="text-white text-[18px] lg:text-[24px] font-semibold leading-[32px] tracking-[-0.48px]">
                        {item.subtitle}
                      </p>
                    </div>
                    <p className="text-[#E5E5E5] text-[14px] lg:text-[18px] font-medium leading-[28px]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}

            {/* Special container for the 6th item */}
            <div className="flex relative flex-col items-start w-full max-w-[422px] min-h-[195px] lg:min-h-[291px] pt-[62px] pb-[43px] px-[40px] rounded-[5px] border-[1px] border-[#A3A3A3] bg-[#1E1E1E]">
              {/* <Image
                  src="/worldWide/contact.png"
                  alt="contact"
                  fill
                  className="object-cover rounded-[5px]"
                /> */}
              <div className="relative flex flex-col items-start gap-[25px] lg:gap-[54px]">
                <div className="flex flex-col items-start gap-[24px]">
                  <h1 className="text-white text-[18px] lg:text-[25px] font-medium leading-[36px] max-w-[291px]">
                    Ready to innovate & drive an impact
                  </h1>
                </div>
                <div className="flex min-w-[148px] sm:min-w-[188px] h-[48px] lg:h-[60px] py-[12px] px-[33px] justify-center items-center rounded-[5px] border bg-[#00AA9C] cursor-pointer">
                  <button className="text-white text-[18px] font-medium leading-[36px]">
                    Contact Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AppLayout>
    </section>
  );
};

export default WorldWide;
