import AppLayout from "@/layout/AppLayout";
import SectionHeader from "../ui/SectionHeader";
import Image from "next/image";

const teamMembers = [
  {
    name: "Bonnie Green",
    position: "Senior Front-end Developer",
    description:
      "Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    image: "/team/img-1.jpg",
    socials: [
      "www.facebook.com",
      "www.twitter.com",
      "www.dribbble.com",
      "www.github.com",
    ],
  },
  {
    name: "Thomas Lean",
    position: "Senior Front-end Developer",
    description:
      "Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    image: "/team/img-2.jpg",
    socials: [
      "www.facebook.com",
      "www.twitter.com",
      "www.dribbble.com",
      "www.github.com",
    ],
  },
  {
    name: "Jese Leos",
    position: "Senior Front-end Developer",
    description:
      "Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    image: "/team/img-3.jpg",
    socials: [
      "www.facebook.com",
      "www.twitter.com",
      "www.dribbble.com",
      "www.github.com",
    ],
  },
  {
    name: "Jese Leos",
    position: "Senior Front-end Developer",
    description:
      "Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    image: "/team/img-4.jpg",
    socials: [
      "www.facebook.com",
      "www.twitter.com",
      "www.dribbble.com",
      "www.github.com",
    ],
  },
];

const Team = () => {
  return (
    <AppLayout>
      <SectionHeader
        title="The EMOS Technologies Team: Passion Meets Expertise"
        description="eTechViral offers custom software, mobile app development, and cloud services tailored for businesses, ensuring scalable, secure, and innovative solutions in today's digital era."
        maxWidth="max-w-[1123px]"
      />

      <div className="grid min-h-[454px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-start gap-[32px]">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-start rounded-[8px] bg-[#1E1E1E] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.10)]"
          >
            <div className="flex pt-[16px] px-[16px] pb-[0px] flex-col items-start w-full">
              <div className="w-full h-[192px] relative">
                <Image
                  src={member.image}
                  alt="Team"
                  fill
                  className="object-cover w-full h-full rounded-[8px]"
                />
              </div>
            </div>
            <div className="flex py-[24px] px-[16px] flex-col items-start">
              <div className="flex flex-col items-start gap-[16px]">
                <div className="flex flex-col items-start gap-[10px]">
                  <div className="flex flex-col items-start">
                    <h1
                      style={{ fontFamily: "var(--font-inter)" }}
                      className="text-[#00AA9C] leading-[30px] font-bold text-[20px]"
                    >
                      {member.name}
                    </h1>
                    <h2 className="text-[#D4D4D4] leading-[24px] font-medium text-[16px]">
                      {member.position}
                    </h2>
                  </div>

                  <p
                    style={{ fontFamily: "var(--font-inter)" }}
                    className="text-[#D4D4D4] leading-[24px] font-normal text-[16px]"
                  >
                    {member.description}
                  </p>
                </div>

                <div className="flex items-start gap-[12px]">
                  <Image
                    src="/team/facebook-f.svg"
                    alt="facebook"
                    width={22}
                    height={22}
                    className="cursor-pointer"
                  />
                  <Image
                    src="/team/twitter.svg"
                    alt="twitter"
                    width={22}
                    height={22}
                    className="cursor-pointer"
                  />
                  <Image
                    src="/team/dribbble.svg"
                    alt="dribbble"
                    width={22}
                    height={22}
                    className="cursor-pointer"
                  />
                  <Image
                    src="/team/github.svg"
                    alt="github"
                    width={22}
                    height={22}
                    className="cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </AppLayout>
  );
};

export default Team;
