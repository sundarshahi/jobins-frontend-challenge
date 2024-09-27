"use client";

import { UserButton } from "@clerk/nextjs";

import { BellDotIcon } from "lucide-react";

const NavbarRoutes = () => {
  return (
    <>
      <div className="pl-5 text-2xl leading-[22px] font-[700] ">Dashboard</div>
      <div className="flex px-5 gap-x-4 ml-auto">
        <BellDotIcon />
        <UserButton />
      </div>
    </>
  );
};

export default NavbarRoutes;
