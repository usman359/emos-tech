import Image from "next/image";

const Industry = () => {
  return (
    <div className="relative h-[579px] overflow-hidden mt-[59px] lg:mt-[0px]">
      {/* Blurred Background Layer */}
      <div
        className="absolute inset-0 w-[2789.644px] h-[461.486px] rounded-[382px] opacity-[53%] blur-[235.050px] z-0"
        style={{
          background:
            "radial-gradient(1.01% 58.8% at 47.15% 53.87%, #000 0%, #04534A 100%)",
        }}
      />
      <section className="relative h-[579px] mt-[6rem] lg:mt-[0px] lg:px-[54px] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full items-center gap-[103px]">
          {/* First grid item */}
          <div>
            <div className="max-w-[529px] w-full h-[182px] bg-[#00AA9C] flex items-center justify-center">
              <h1
                className="text-[90px] hidden lg:block leading-[90px] font-black text-center tracking-[-1.8px] font-[Poppins] text-white/0 relative z-20"
                style={{
                  fontFamily: "var(--font-poppins)",
                  WebkitTextStrokeWidth: "1px",
                  WebkitTextStrokeColor: "#FFF",
                }}
              >
                PARK VOLT
              </h1>
            </div>
            <div className="absolute top-[-8rem] left-[1rem] lg:top-[4rem] lg:left-[10rem]">
              <div className="w-[376px] lg:w-[333px] h-[579px] lg:h-[512px] relative">
                <Image
                  src="/about/mobile.png"
                  alt="Mobile App Development"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Second grid item */}
          <div className="mt-[500px] lg:mt-0 grid grid-cols-2 w-full max-w-[684px] items-start content-start gap-y-0 lg:gap-y-[29px] gap-x-[-42px] lg:gap-x-[46px]">
            <div className="flex w-[319px] min-h-[124px] py-[23px] px-[31px] flex-col items-start rounded-[8px] bg-[rgba(0,151,138,0.00)]">
              <div className="max-w-[254px] min-h-[78px]">
                <h1
                  style={{
                    fontFamily: "var(--font-poppins)",
                  }}
                  className="max-w-[162px] text-[16px] lg:text-[18px] leading-[28px] font-nomral text-[#B0B0B0]"
                >
                  Industry
                </h1>
                <p
                  style={{
                    fontFamily: "var(--font-poppins)",
                  }}
                  className="-mt-[12px] text-[18px] lg:text-[36px] whitespace-nowrap leading-[48px] font-medium text-[#E0E0E0] tracking-[-0.36px] lg:tracking-[-0.72px]"
                >
                  Social Industry
                </p>
              </div>
            </div>

            <div className="flex w-[319px] min-h-[124px] py-[23px] px-[31px] flex-col items-start rounded-[8px] bg-[rgba(0,151,138,0.00)]">
              <div className="max-w-[254px] min-h-[78px]">
                <h1
                  style={{
                    fontFamily: "var(--font-poppins)",
                  }}
                  className="max-w-[162px] text-[16px] lg:text-[18px] leading-[28px] font-nomral text-[#B0B0B0]"
                >
                  Services
                </h1>
                <p
                  style={{
                    fontFamily: "var(--font-poppins)",
                  }}
                  className="-mt-[12px] text-[18px] lg:text-[36px] whitespace-nowrap leading-[48px] font-medium text-[#E0E0E0] tracking-[-0.36px] lg:tracking-[-0.72px]"
                >
                  Development
                </p>
              </div>
            </div>

            <div className="flex w-[319px] min-h-[124px] py-[23px] px-[31px] flex-col items-start rounded-[8px] bg-[rgba(0,151,138,0.00)]">
              <div className="max-w-[254px] min-h-[78px]">
                <h1
                  style={{
                    fontFamily: "var(--font-poppins)",
                  }}
                  className="max-w-[162px] text-[16px] lg:text-[18px] leading-[28px] font-nomral text-[#B0B0B0]"
                >
                  Business Type
                </h1>
                <p
                  style={{
                    fontFamily: "var(--font-poppins)",
                  }}
                  className="-mt-[12px]  text-[18px] lg:text-[36px] whitespace-nowrap leading-[48px] font-medium text-[#E0E0E0] tracking-[-0.36px] lg:tracking-[-0.72px]"
                >
                  Enterprise
                </p>
              </div>
            </div>

            <div className="flex w-[319px] min-h-[124px] py-[23px] px-[31px] flex-col items-start rounded-[8px] bg-[rgba(0,151,138,0.00)]">
              <div className="max-w-[254px] min-h-[78px]">
                <h1
                  style={{
                    fontFamily: "var(--font-poppins)",
                  }}
                  className="max-w-[162px] text-[16px] lg:text-[18px] leading-[28px] font-nomral text-[#B0B0B0]"
                >
                  Build Your Idea
                </h1>
                <div className="flex py-[10px] pr-[16px] justify-center items-center gap-[8px] rounded-[4px]">
                  <p className="text-[14px] leading-[20px] text-center font-medium text-white tracking-[0.1px]">
                    Discover more
                  </p>
                  <Image
                    src="/about/arrow-right.svg"
                    alt="arrow-right"
                    width={24}
                    height={24}
                    className="flex justify-center items-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industry;
