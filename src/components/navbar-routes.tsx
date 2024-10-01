"use client";

import { UserButton } from "@clerk/nextjs";

import Image from "next/image";

const NavbarRoutes = () => {
  return (
    <>
      <div className="pl-5 text-2xl leading-[22px] font-[700] ">Dashboard</div>
      <div className="flex items-center px-5 gap-x-6 ml-auto">
        <Image width={28} height={37} alt="increase" src="/notification.svg" />
        <UserButton />
      </div>
    </>
  );
};

export default NavbarRoutes;
