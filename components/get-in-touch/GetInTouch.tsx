import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import AppLayout from "@/layout/AppLayout";
import Image from "next/image";

const contactInfo = [
  {
    icon: "/getInTouch/phone.svg",
    name: "+1012 3456 789",
  },
  {
    icon: "/getInTouch/email.svg",
    name: "contact@emos.com",
  },
  {
    icon: "/getInTouch/location.svg",
    name: "132 Dartmouth Street Boston, Massachusetts 02156 United States",
  },
];

const GetInTouch = () => {
  return (
    <AppLayout>
      <div className="flex flex-col items-center gap-[15px] md:gap-[20px]">
        <div
          style={{ fontFamily: "var(--font-poppins)" }}
          className="max-w-[880px] w-full text-white text-center text-[24px] md:text-[30px] lg:text-[36px] font-bold leading-[32px] md:leading-[38px] lg:leading-[44px]"
        >
          <span> Get in Touch with EMOS Technologies – Your Partner in</span>
          <span className="text-[#00BDAD]"> Digital Solutions</span>
        </div>
        <p
          style={{ fontFamily: "var(--font-poppins)" }}
          className="max-w-[964px] w-full text-[#B4B4B4] text-center text-[14px] md:text-[16px] lg:text-[18px] font-medium leading-[28px] md:leading-[28px] tracking-[-0.28px]"
        >
          Unlock the full potential of your business with our innovative web,
          mobile, and AI solutions. From seamless design to powerful
          development, we help startups and enterprises achieve efficiency,
          scalability, and long-term success in the digital world.
        </p>
      </div>

      <div className="min-h-[667px] w-full max-w-[1196px] rounded-[10px] bg-[#1E1E1E] shadow-[0px_0px_60px_30px_rgba(0,0,0,0.03)] grid grid-cols-1 md:grid-cols-[1fr] lg:grid-cols-[2fr_3fr] xl:grid-cols-[491px_1fr] relative overflow-hidden">
        {/* First grid item */}
        <div className="bg-[#04534A] ml-[21px] my-[10px] py-[15px] sm:py-[40px] px-[45px] overflow-hidden relative isolate">
          <div className="flex flex-col justify-between items-center sm:items-start h-full">
            <div className="flex flex-col items-center sm:items-start gap-[6px]">
              <h1 className="text-[20px] md:text-[24px] lg:text-[28px] font-semibold text-white">
                Contact Information
              </h1>
              <p className="text-[#C9C9C9] text-[11px] md:text-[14px] font-normal">
                Say something to start a live chat!
              </p>
            </div>

            <div className="flex flex-col items-center sm:items-start gap-[30px] md:gap-[40px] lg:gap-[50px] sm:mt-auto mt-[12px]">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row items-center gap-[10px] md:gap-[25px]"
                >
                  <Image src={item.icon} alt="phone" width={24} height={24} />
                  <p className="text-white text-center sm:text-start text-[12px] md:text-[14px] font-normal max-w-full md:max-w-[288px] w-full">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-[16px] md:gap-[24px] mt-[58px] sm:mt-auto">
              <div className="size-[30px] bg-[#1B1B1B] rounded-full flex items-center justify-center">
                <Image
                  src="/getInTouch/twitter.svg"
                  alt="twitter"
                  width={15}
                  height={15}
                />
              </div>
              <div className="size-[30px] bg-[#1B1B1B] rounded-full flex items-center justify-center">
                <Image
                  src="/getInTouch/instagram.svg"
                  alt="instagram"
                  width={15}
                  height={15}
                />
              </div>
              <div className="size-[30px] bg-[#1B1B1B] rounded-full flex items-center justify-center">
                <Image
                  src="/getInTouch/discord.svg"
                  alt="discord"
                  width={15}
                  height={15}
                />
              </div>
            </div>
          </div>

          {/* Decorative circles - responsive positioning */}
          <div className="absolute bottom-[10%] left-[70%] md:left-[15%] lg:left-[18rem] z-20">
            <div className="size-[54px] md:size-[80px] lg:size-[138px] bg-[rgba(0,142,130,0.41)] rounded-full" />
          </div>

          <div className="absolute bottom-[-15%] right-[-20%] md:right-[20%] lg:right-[-6rem] z-10">
            <div className="size-[150px] md:size-[200px] lg:size-[269px] bg-[#00AA9C] rounded-full transform rotate-[5deg]" />
          </div>
        </div>

        {/* Second grid item */}
        <div className="mt-[30px] sm:mt-[60px] mx-[21px] sm:mx-[39px]">
          <div className="flex flex-col gap-[30px] md:gap-[45px]">
            <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-[25px] md:gap-[39px]">
              <div className="flex flex-col items-start gap-[4px]">
                <Label
                  className="text-white text-[12px] font-medium leading-[20px]"
                  htmlFor="firstName"
                >
                  First Name
                </Label>
                <Input
                  id="firstName"
                  type="text"
                  placeholder="Enter your first name"
                  className="placeholder:text-[#8D8D8D] placeholder:text-[14px] font-medium leading-[20px] text-white text-[14px] rounded-none border-0 border-b border-b-input pl-0"
                />
              </div>
              <div className="flex flex-col items-start gap-[4px]">
                <Label
                  className="text-white text-[12px] font-medium leading-[20px]"
                  htmlFor="lastName"
                >
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  type="text"
                  placeholder="Enter your last name"
                  className="placeholder:text-[#8D8D8D] placeholder:text-[14px] font-medium leading-[20px] text-white text-[14px] rounded-none border-0 border-b border-b-input pl-0"
                />
              </div>
              <div className="flex flex-col items-start gap-[4px]">
                <Label
                  className="text-white text-[12px] font-medium leading-[20px]"
                  htmlFor="email"
                >
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="placeholder:text-[#8D8D8D] placeholder:text-[14px] font-medium leading-[20px] text-white text-[14px] rounded-none border-0 border-b border-b-input pl-0"
                />
              </div>
              <div className="flex flex-col items-start gap-[4px]">
                <Label
                  className="text-white text-[12px] font-medium leading-[20px]"
                  htmlFor="phoneNumber"
                >
                  Phone Number
                </Label>
                <Input
                  id="phoneNumber"
                  type="tel"
                  placeholder="Enter your phone number"
                  className="placeholder:text-[#8D8D8D] placeholder:text-[14px] font-medium leading-[20px] text-white text-[14px] rounded-none border-0 border-b border-b-input pl-0"
                />
              </div>
              <div className="flex w-full flex-col items-start gap-[4px] md:col-span-2">
                <Label
                  className="text-white text-[12px] font-medium leading-[20px]"
                  htmlFor="message"
                >
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Enter your message..."
                  className="placeholder:text-[#8D8D8D] placeholder:text-[14px] font-medium leading-[20px] text-white text-[14px] rounded-none border-0 border-b border-b-input pl-0 resize-none outline-none w-full"
                />
              </div>

              <button className="bg-[#00AA9C] shadow-[0px_0px_8.963px_0px_rgba(0,0,0,0.13)] text-white py-[9.6px] px-[30.73px] rounded-[3.201px] hover:bg-[#008F85] transition-colors">
                Send Message
              </button>
            </div>
          </div>
          <div className="ml-[60px] block sm:hidden">
            <Image
              src="/getInTouch/arrow.svg"
              alt="arrow"
              width={104.404}
              height={52.149}
            />
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default GetInTouch;
