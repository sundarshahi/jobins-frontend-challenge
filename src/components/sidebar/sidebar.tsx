"use client";

import { useState } from "react";
import { Logo } from "./logo";
import { SidebarRoutes } from "./sidebar-routes";
import { Trigger } from "./trigger";
import { ListCollapse } from "lucide-react";

export const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const toggleCollapse = () => setIsCollapsed((prev) => !prev);

  return (
    <>
      {isCollapsed ? (
        <div
          className="absolute top-1 left-1 bg-white rounded-sm p-4 cursor-pointer transition"
          onClick={toggleCollapse}
        >
          <ListCollapse size={24} className="text-[#8B909A]" />
        </div>
      ) : (
        <div className="h-full flex flex-col overflow-y-auto bg-white">
          <div className="">
            <Logo />

            <div
              className="hidden md:flex absolute top-5 left-[220px] cursor-pointer"
              onClick={toggleCollapse}
            >
              <Trigger />
            </div>
          </div>

          <div className="flex flex-col w-full">
            <SidebarRoutes />
          </div>
        </div>
      )}
    </>
  );
};
