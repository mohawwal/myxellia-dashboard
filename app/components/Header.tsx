"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import home from "../../public/home.svg";
import listing from "../../public/listing.svg";
import user from "../../public/user.svg";
import request from "../../public/request.svg";
import application from "../../public/application.svg";
import search from "../../public/search.svg";

const menuItems = [
  { path: "/", src: home, alt: "home", text: "Dashboard" },
  { path: "/listings", src: listing, alt: "listings", text: "Listings" },
  { path: "/users", src: user, alt: "users", text: "Users" },
  { path: "/requests", src: request, alt: "requests", text: "Requests" },
  {
    path: "/applications",
    src: application,
    alt: "applications",
    text: "Applications",
  },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <>
      <div className="bg-white h-[67px] w-full text-[14px] hidden xl:block border-b border-b-[#E4E4E4] px-4 sm:px-6 lg:px-18">
        <div className="h-full mx-auto flex items-center justify-between">
          <div className="flex items-center md:space-x-4 space-x-1">
            {menuItems.map((item, index) => (
              <Link href={item.path} key={index}>
                <div
                  className={`hover:bg-[#F5F5F5] flex items-center justify-center gap-3 w-[170px] h-[42px] rounded-[10px] transition-colors ${
                    pathname === item.path
                      ? "bg-[#F5F5F5] font-semibold"
                      : "bg-white"
                  }`}
                >
                  <Image src={item.src} alt={item.alt} width={23} />
                  <p>{item.text}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="relative w-[319px] h-[43px]">
            <Image
              src={search}
              alt="search"
              width={21}
              height={21}
              className="absolute left-4 top-1/2 transform -translate-y-1/2"
            />
            <input
              type="search"
              name=""
              placeholder="search listing, users here..."
              className="w-full h-full bg-[#F5F5F5] rounded-[16px] border border-[#E4E4E4] pl-12 pr-4 text-sm text-gray-700 placeholder-[#919191] focus:outline-none focus:border-blue-700"
            />
          </div>
        </div>
      </div>

      <div className="bg-white h-[67px] w-full text-[14px] hidden md:block xl:hidden">
        <div className="max-w-[1200px] h-full mx-auto px-4 sm:px-4 lg:px-6 flex items-center justify-between">
          <div className="flex items-center space-x-1">
            {menuItems.map((item, index) => (
              <Link href={item.path} key={index}>
                <div
                  className={`hover:bg-[#F5F5F5] flex items-center justify-center gap-3 w-[120px] h-[38px] rounded-[10px] transition-colors ${
                    pathname === item.path
                      ? "bg-[#F5F5F5] font-semibold"
                      : "bg-white"
                  }`}
                >
                  <Image src={item.src} alt={item.alt} width={20} />
                  <p className="text-sm">{item.text}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="relative w-[250px] h-[43px]">
            <Image
              src={search}
              alt="search"
              width={19}
              height={19}
              className="absolute left-4 top-1/2 transform -translate-y-1/2"
            />
            <input
              type="search"
              name=""
              placeholder="search here..."
              className="w-full h-full bg-[#F5F5F5] rounded-[16px] border border-[#E4E4E4] pl-12 pr-4 text-sm text-gray-700 placeholder-[#919191] focus:outline-none focus:border-blue-700"
            />
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#E4E4E4] z-50 md:hidden">
        <div className="flex items-center justify-around p-2">
          {menuItems.map((item, index) => (
            <Link href={item.path} key={index} className="flex-1">
              <div
                className={`flex flex-col items-center justify-center gap-1 py-2 transition-colors ${
                  pathname === item.path
                    ? "font-semibold"
                    : "text-gray-600"
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={19}
                  height={19}
                  className={
                    pathname === item.path ? "opacity-100" : "opacity-70"
                  }
                />
                <p className="text-center text-[11px]">{item.text}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
