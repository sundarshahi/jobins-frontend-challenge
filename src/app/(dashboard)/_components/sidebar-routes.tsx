"use client";

import { HomeIcon, PlusCircle, ShoppingCart, Square, Star } from "lucide-react";
import { SidebarItem } from "./sidebar-item";

const routes = [
  {
    icon: HomeIcon,
    label: "MAIN MENU",
    href: "",
    type: "group",
  },
  {
    icon: HomeIcon,
    label: "Dashboard",
    href: "/",
  },
  {
    icon: ShoppingCart,
    label: "Order Management",
    href: "/order",
  },
  {
    icon: Star,
    label: "Brand",
    href: "/brand",
  },
  {
    icon: HomeIcon,
    label: "PRODUCTS",
    href: "",
    type: "group",
  },
  {
    icon: PlusCircle,
    label: "Add Products",
    href: "/products",
  },
  {
    icon: Square,
    label: "Product List",
    href: "/list",
  },
];

export const SidebarRoutes = () => {
  return (
    <div className="flex flex-col w-full gap-2 px-4">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
          type={route.type}
        />
      ))}
    </div>
  );
};
