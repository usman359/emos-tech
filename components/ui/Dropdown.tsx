import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface DropdownProps {
  setOpenDropdown: (value: boolean) => void;
}

const dropdownItems = [
  {
    label: "Web App Development",
    href: "/",
    icon: "/header/web-app-development.svg",
  },
  {
    label: "Mobile App Development",
    href: "/about",
    icon: "/header/mobile-app-development.svg",
  },
  {
    label: "UI/UX Design",
    href: "/services",
    icon: "/header/ui-ux-design.svg",
  },
  {
    label: "AI Automation",
    href: "/portfolio",
    icon: "/header/ai-automation.svg",
  },
];

export const Dropdown = ({ setOpenDropdown }: DropdownProps) => {
  const router = useRouter();

  return (
    <div
      onMouseEnter={() => setOpenDropdown(true)}
      className="z-10 absolute top-full left-[35%]"
    >
      {/* Invisible bridge to connect header and dropdown */}
      <div className="h-[10px] w-full absolute -top-[10px]"></div>
      <div className="flex w-[418px] pt-[8px] pr-[8px] pb-[18.346px] pl-[8px] flex-col items-start gap-[8px] rounded-[4px] bg-[#1E1E1E]">
        {dropdownItems.map((item, index) => (
          <div
            onClick={() => router.push(item.href)}
            key={index}
            className="flex p-[8px] rounded-[6px] w-full items-center gap-[10px] hover:bg-[#00AA9C] cursor-pointer"
          >
            <Image src={item.icon} alt={item.label} width={24} height={24} />

            <h1 className="text-[#E0E0E0] text-[24px] font-normal leading-[32px] tracking-[-0.48px]">
              {item.label}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};
