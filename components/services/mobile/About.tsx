import Image from "next/image";

const About = () => {
  return (
    <section className="flex w-full justify-between items-center px-[54px] pt-[120px]">
      <div className="grid grid-cols-2 w-full items-center gap-[24px]">
        {/* First Grid Item */}
        <div className="flex max-w-[646px] w-full h-[408px] justify-center items-center">
          <div className="flex flex-col w-full justify-center items-start gap-[40px]">
            <h1
              style={{ fontFamily: "var(--font-poppins)" }}
              className="text-[24px] font-semibold leading-[32px] tracking-[-0.48px] text-[#00AA9C] max-w-[297px]"
            >
              Mobile App Development
            </h1>
            <p
              style={{ fontFamily: "var(--font-poppins)" }}
              className="text-[18px] font-medium leading-[28px] text-[#D4D4D4] max-w-[646px]"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit
              amet arcu quis quam maximus tempor. Curabitur pulvinar congue
              massa vel varius. Proin
            </p>
            <h1
              style={{ fontFamily: "var(--font-poppins)" }}
              className="text-[36px] font-bold leading-[44px] text-white tracking-[-0.72px] max-w-[646px]"
            >
              Simplifying the Future of Parking and Electric Mobility
            </h1>
            <p
              style={{ fontFamily: "var(--font-poppins)" }}
              className="text-[18px] font-medium leading-[28px] text-[#D4D4D4] max-w-[646px]"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit
              amet arcu quis quam maximus tempor. Curabitur pulvinar congue
              massa vel varius. Proin
            </p>
          </div>
        </div>

        {/* Second Grid Item */}
        <div className="max-w-[614px] h-[606px] w-full rounded-[5px] bg-[#008E82] shadow-[18px_19px_47.1px_0px_rgba(255,255,255,0.16)_inset] relative">
          <h1
            style={{ fontFamily: "var(--font-poppins)" }}
            className="max-w-[348px] w-full h-[242px] text-white text-[140px] font-bold leading-[121px] opacity-[0.03] pt-[102px] pl-[54px] pr-[212px] pb-[262px]"
          >
            OUR ROLE
          </h1>
          <div className="pl-[106px] pt-[148px] pr-[344px] pb-[401px] absolute top-0 left-0">
            <h2
              style={{ fontFamily: "var(--font-poppins)" }}
              className="text-white text-[38px] leading-[57px] font-bold "
            >
              Our Role
            </h2>
            <div className="flex w-full flex-col gap-[25px] items-start">
              <div className="flex max-w-[349px] w-full justify-center items-center gap-[36px]">
                <div className="flex max-w-[80px] w-full py-[25px] px-[19px] flex-col items-start gap-[10px] rounded-[5px] bg-[rgba(227,227,227,0.46)]">
                  <Image
                    src="/about/role.svg"
                    alt="Role"
                    width={36}
                    height={26}
                    className="aspect-[18/13] object-contain"
                  />
                </div>
                <div className="max-w-[233px] w-full h-[125px] relative">
                  <h1
                    style={{ fontFamily: "var(--font-poppins)" }}
                    className="max-w-[99px] w-full h-[125px] text-[#1F1F1F] text-[90px] font-bold leading-[121px] opacity-[0.1]"
                  >
                    1
                  </h1>
                  <div className="absolute top-[57px] left-[10px] bottom-[20px]">
                    <h2
                      style={{ fontFamily: "var(--font-poppins)" }}
                      className="max-w-[233px] text-[#fff] text-[32px] font-semibold leading-[48px]"
                    >
                      Development
                    </h2>
                  </div>
                </div>
              </div>

              <div className="flex max-w-[349px] w-full justify-center items-center gap-[36px]">
                <div className="flex max-w-[80px] w-full py-[25px] px-[19px] flex-col items-start gap-[10px] rounded-[5px] bg-[rgba(227,227,227,0.46)]">
                  <Image
                    src="/about/rocket.svg"
                    alt="Role"
                    width={36}
                    height={26}
                    className="aspect-[18/13] object-contain"
                  />
                </div>
                <div className="max-w-[233px] w-full h-[125px] relative">
                  <h1
                    style={{ fontFamily: "var(--font-poppins)" }}
                    className="max-w-[99px] w-full h-[125px] text-[#1F1F1F] text-[90px] font-bold leading-[121px] opacity-[0.1]"
                  >
                    2
                  </h1>
                  <div className="absolute top-[57px] left-[10px] bottom-[20px]">
                    <h2
                      style={{ fontFamily: "var(--font-poppins)" }}
                      className="max-w-[233px] text-[#fff] text-[32px] font-semibold leading-[48px]"
                    >
                      Deployment
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
