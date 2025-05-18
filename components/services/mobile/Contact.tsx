import AppLayout from "@/layout/AppLayout";

const ContactUs = () => {
  return (
    <section className="min-h-[912px] bg-[url('/contactUs/bg.svg')] bg-cover bg-center bg-[#007168]">
      <AppLayout className="py-[64px] lg:py-[150px]">
        <div className="flex flex-col lg:flex-row items-center lg:gap-[95px] lg:justify-between gap-[34px]">
          <div className="flex flex-col w-full max-w-[608px] items-center gap-[36px]">
            <h1 className="text-white text-[28px] lg:text-[36px] font-bold leading-[36px] lg:leading-[44px] tracking-[-0.72px]">
              Get Started with EMOS Technologies: Contact Us for Your App
              Development Needs
            </h1>
            <p className="text-[#D4D4D4] text-[18px] font-normal leading-[28px]">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore ma gna aliquam
              erat volutpat. Ut wisi enim ad minim veniamqui s nostrud exerci
              tation ullamcorper susc
            </p>
          </div>

          <div className="min-h-[612px] w-full max-w-[572px] rounded-[8px] bg-[#1E1E1E] shadow-[-2px_4px_60px_2px_rgba(33,3,51,0.12)] py-[40px] px-[16px] lg:px-[35px] flex flex-col gap-[12px] items-start">
            <h1 className="text-white text-[20px] lg:text-[28px] font-medium leading-[36px] tracking-[-0.4px] lg:tracking-[-0.56px]">
              Let&apos;s Turn Your Vision Into Reality.
            </h1>
            <p className="text-[#D4D4D4] text-[16px] lg:text-[18px] font-normal leading-[28px]">
              Fill out our contact form and we&apos;ll get in touch
            </p>
            <form className="flex flex-col items-start w-full gap-[14px]">
              <div className="flex flex-col items-start w-full gap-[4px]">
                <label
                  htmlFor="name"
                  className="text-[#A3A3A3] text-[18px] font-normal leading-[28px]"
                >
                  Name*
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full h-[44px] rounded-[8px] border-[1px] border-[#737373] text-[18px] font-medium leading-[28px] focus:outline-none focus:ring-[#007168] focus:ring-[1px] bg-transparent text-[#A3A3A3] pl-[10px]"
                />
              </div>
              <div className="flex flex-col items-start w-full gap-[4px]">
                <label
                  htmlFor="email"
                  className="text-[#A3A3A3] text-[18px] font-normal leading-[28px]"
                >
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full h-[44px] rounded-[8px] border-[1px] border-[#737373] text-[18px] font-medium leading-[28px] focus:outline-none focus:ring-[#007168] focus:ring-[1px] bg-transparent text-[#A3A3A3] pl-[10px]"
                />
              </div>
              <div className="flex flex-col items-start w-full gap-[4px]">
                <label
                  htmlFor="phone"
                  className="text-[#A3A3A3] text-[18px] font-normal leading-[28px]"
                >
                  Phone number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full h-[44px] rounded-[8px] border-[1px] border-[#737373] text-[18px] font-medium leading-[28px] focus:outline-none focus:ring-[#007168] focus:ring-[1px] bg-transparent text-[#A3A3A3] pl-[10px]"
                />
              </div>
              <div className="flex flex-col items-start w-full gap-[4px]">
                <label
                  htmlFor="project"
                  className="text-[#A3A3A3] text-[18px] font-normal leading-[28px]"
                >
                  Tell us about your project
                </label>
                <textarea
                  id="project"
                  className="w-full h-[44px] rounded-[8px] border-[1px] border-[#737373] text-[18px] font-medium leading-[28px] focus:outline-none focus:ring-[#007168] focus:ring-[1px] bg-transparent text-[#A3A3A3] pl-[10px] pt-[8px] resize-none"
                />
              </div>
              <button className="mt-[39px] w-full lg:w-fit flex py-[10px] px-[24px] justify-center items-center gap-[10px] rounded-[4px] bg-[#00978A] text-white text-[14px] font-medium leading-[20px] tracking-[0.1px]">
                Submit
              </button>
            </form>
          </div>
        </div>
      </AppLayout>
    </section>
  );
};

export default ContactUs;
