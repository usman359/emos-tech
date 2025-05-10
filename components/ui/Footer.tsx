"use client";

import AppLayout from "@/layout/AppLayout";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const footerData = {
  services: {
    title: "Services",
    items: [
      { name: "Web Development", url: "/services/web-development" },
      { name: "App Development", url: "/services/app-development" },
      { name: "UI/UX Design", url: "/services/ui-ux-design" },
      { name: "AI Automation", url: "/services/ai-automation" },
      { name: "Machine Learning", url: "/services/machine-learning" },
    ],
  },
  caseStudies: {
    title: "Case Studies",
    items: [
      { name: "Web-designers", url: "/case-studies/web-designers" },
      { name: "Marketers", url: "/case-studies/marketers" },
      { name: "Small Business", url: "/case-studies/small-business" },
      { name: "Website Builder", url: "/case-studies/website-builder" },
    ],
  },
  resources: {
    title: "Resources",
    items: [
      { name: "Blog", url: "/resources/blog" },
      { name: "Documentation", url: "/resources/documentation" },
      { name: "Help Center", url: "/resources/help-center" },
      { name: "Community", url: "/resources/community" },
    ],
  },
  company: {
    title: "Company",
    items: [
      { name: "About Us", url: "/company/about" },
      { name: "Careers", url: "/company/careers" },
      { name: "Contact Us", url: "/company/contact" },
      { name: "Privacy Policy", url: "/company/privacy" },
    ],
  },
  social: {
    title: "Let's do it!",
    items: [
      { name: "Facebook", icon: Facebook, url: "https://facebook.com" },
      { name: "Twitter", icon: Twitter, url: "https://twitter.com" },
      { name: "Instagram", icon: Instagram, url: "https://instagram.com" },
      { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com" },
    ],
  },
};

const Footer = () => {
  return (
    <div className="min-h-[565px] bg-[#007168] relative">
      <AppLayout className="px-[25px] lg:px-[142px] w-full pt-[49px] lg:pt-[165px] pb-[90px]">
        <h1 className="text-white self-start text-[36px] font-bold">
          EMOS TECH
        </h1>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[32px]">
          {/* Services Column */}
          <div className="flex flex-col">
            <h3 className="text-white text-[18px] font-bold mb-[32px]">
              {footerData.services.title}
            </h3>
            <ul className="flex flex-col gap-[16px]">
              {footerData.services.items.map((item, index) => (
                <li key={index}>
                  <Link href={item.url}>
                    <span className="text-white text-[14px] font-normal">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Case Studies Column */}
          <div className="flex flex-col">
            <h3 className="text-white text-[18px] font-bold mb-[32px]">
              {footerData.caseStudies.title}
            </h3>
            <ul className="flex flex-col gap-[16px]">
              {footerData.caseStudies.items.map((item, index) => (
                <li key={index}>
                  <Link href={item.url}>
                    <span className="text-white text-[14px] font-normal">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div className="flex flex-col">
            <h3 className="text-white text-[18px] font-bold mb-[32px]">
              {footerData.resources.title}
            </h3>
            <ul className="flex flex-col gap-[16px]">
              {footerData.resources.items.map((item, index) => (
                <li key={index}>
                  <Link href={item.url}>
                    <span className="text-white text-[14px] font-normal">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="flex flex-col">
            <h3 className="text-white text-[18px] font-bold mb-[32px]">
              {footerData.company.title}
            </h3>
            <ul className="flex flex-col gap-[16px]">
              {footerData.company.items.map((item, index) => (
                <li key={index}>
                  <Link href={item.url}>
                    <span className="text-white text-[14px] font-normal">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Column */}
          <div className="flex flex-col">
            <h3 className="text-white text-[18px] font-bold mb-[6px]">
              Let&apos;s do it!
            </h3>
            <div className="flex items-center gap-[16px]">
              {footerData.social.items.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={index}
                    href={item.url}
                    target="_blank"
                    className="text-[#D4D4D4] hover:text-white transition-colors"
                  >
                    <Icon size={24} />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </AppLayout>

      <div className="w-full h-[1px] bg-[#fff]" />

      <div className="py-[16px] flex flex-col lg:flex-row gap-[16px] lg:gap-0 items-center lg:justify-between w-full max-w-[1156px] mx-auto">
        <div className="flex items-start gap-[40px]">
          <span className="text-[14px] font-normal text-[#fff]">
            Privacy Policy
          </span>
          <span className="text-[14px] font-normal text-[#fff]">
            Terms of Use
          </span>
          <span className="text-[14px] font-normal text-[#fff]">Legal</span>
        </div>

        <p className="text-[12px] lg:text-[14px] font-normal text-[#fff]">
          © 2025 EMOS Technologies. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
