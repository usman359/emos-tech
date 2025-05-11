"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "../../components/ui/navigation-menu";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";

import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const servicesItems = [
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

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [prevPath, setPrevPath] = useState("/");

  useEffect(() => {
    // Skip for the initial render and get-in-touch page
    if (typeof window !== "undefined" && pathname !== "/get-in-touch") {
      // Store the current path for future reference
      localStorage.setItem("prevPath", pathname);
      setPrevPath(pathname);
    } else if (typeof window !== "undefined") {
      // On get-in-touch page, get the previous path from localStorage
      const storedPath = localStorage.getItem("prevPath") || "/";
      setPrevPath(storedPath);
    }
  }, [pathname]);

  // Determine active path - use prevPath when on get-in-touch page
  const activePath = pathname === "/get-in-touch" ? prevPath : pathname;

  return (
    <header className="px-[21px] sm:px-[28px] lg:px-[58px] h-[80px] border-[0.5px] border-[rgba(0,151,138,0.34)] flex items-center justify-between relative">
      {/* Logo */}
      <div className="flex justify-center items-center">
        <h1 className="text-[#008E82] text-[26px] md:text-[28px] lg:text-[38px] font-bold leading-[39px] md:leading-[42px] lg:leading-[57px]">
          EMOS <span className="text-white">TECH</span>
        </h1>
      </div>

      {/* Nav items */}
      <NavigationMenu className="hidden md:block">
        <NavigationMenuList className="flex items-center gap-[40px]">
          <NavigationMenuItem
            className={`text-[20px] leading-[28px] tracking-[-0.4px] ${
              activePath === "/" ? "text-[#00AA9C]" : "text-white"
            }`}
          >
            <NavigationMenuLink
              className="cursor-pointer"
              onClick={() => router.push("/")}
            >
              Home
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem
            className={`text-[20px] leading-[28px] tracking-[-0.4px] ${
              activePath === "/about" ? "text-[#00AA9C]" : "text-white"
            }`}
          >
            <NavigationMenuLink
              className="cursor-pointer"
              onClick={() => router.push("/about")}
            >
              About
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem
            className={`text-[20px] leading-[28px] tracking-[-0.4px] ${
              activePath === "/services" ? "text-[#00AA9C]" : "text-white"
            }`}
          >
            <NavigationMenuTrigger>Services</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="flex w-[418px] pt-[8px] pr-[8px] pb-[18.346px] pl-[8px] flex-col items-start gap-[8px] rounded-[4px] bg-[#1E1E1E]">
                {servicesItems.map((item, index) => (
                  <div
                    onClick={() => router.push(item.href)}
                    key={index}
                    className="flex p-[8px] rounded-[6px] w-full items-center gap-[10px] hover:bg-[#00AA9C] cursor-pointer"
                  >
                    <Image
                      src={item.icon}
                      alt={item.label}
                      width={24}
                      height={24}
                    />

                    <h1 className="text-[#E0E0E0] text-[24px] font-normal leading-[32px] tracking-[-0.48px]">
                      {item.label}
                    </h1>
                  </div>
                ))}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem
            className={`text-[20px] leading-[28px] tracking-[-0.4px] ${
              activePath === "/portfolio" ? "text-[#00AA9C]" : "text-white"
            }`}
          >
            <NavigationMenuLink
              className="cursor-pointer"
              onClick={() => router.push("/portfolio")}
            >
              Portfolio
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Button for tablets and above */}
      <div className="md:h-[35px] lg:h-[40px] px-[10px] justify-center items-center gap-[10px] border-[1px] rounded-[4px] border-white cursor-pointer hidden md:flex">
        <button
          onClick={() => router.push("/get-in-touch")}
          className="text-white md:text-[12px] lg:text-[14px] font-medium"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Get in touch
        </button>
      </div>

      {/* Hamburger menu for mobile */}
      <div className="flex md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="outline-none">
              <Image src="/header/menu.svg" alt="Menu" width={24} height={24} />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-[#1E1E1E] text-white min-w-[200px] mr-4">
            <DropdownMenuItem
              className={`cursor-pointer hover:bg-[#00AA9C] text-[16px] py-2 ${
                activePath === "/" ? "bg-[#00AA9C]" : ""
              }`}
              onClick={() => router.push("/")}
            >
              Home
            </DropdownMenuItem>
            <DropdownMenuItem
              className={`cursor-pointer hover:bg-[#00AA9C] text-[16px] py-2 ${
                activePath === "/about" ? "bg-[#00AA9C]" : ""
              }`}
              onClick={() => router.push("/about")}
            >
              About
            </DropdownMenuItem>
            <DropdownMenuItem
              className={`cursor-pointer hover:bg-[#00AA9C] text-[16px] py-2 ${
                activePath === "/services" ? "bg-[#00AA9C]" : ""
              }`}
              onClick={() => router.push("/services")}
            >
              Services
            </DropdownMenuItem>
            <DropdownMenuItem
              className={`cursor-pointer hover:bg-[#00AA9C] text-[16px] py-2 ${
                activePath === "/portfolio" ? "bg-[#00AA9C]" : ""
              }`}
              onClick={() => router.push("/portfolio")}
            >
              Portfolio
            </DropdownMenuItem>
            <DropdownMenuItem
              className={`cursor-pointer hover:bg-[#00AA9C] text-[16px] py-2 ${
                activePath === "/industries" ? "bg-[#00AA9C]" : ""
              }`}
              onClick={() => router.push("/industries")}
            >
              Industries
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
