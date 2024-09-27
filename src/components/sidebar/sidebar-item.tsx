"use client";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
  type?: string;
}
export const SidebarItem = ({
  icon: Icon,
  label,
  href,
  type,
}: SidebarItemProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const isActive =
    (pathname === "/" && href === "/") ||
    pathname === href ||
    pathname?.startsWith(`${href}/`);

  const onClick = () => {
    router.push(href);
  };
  if (type === "group") {
    return (
      <div className="flex items-center text-[#8B909A] text-xss px-[30px] py-[15px]">
        {label}
      </div>
    );
  }
  return (
    <button
      onClick={onClick}
      type="button"
      className={cn(
        "flex items-center text-[#8B909A] font-[600] text-md rounded-md pl-6 transition-all hover:text-slate-600 hover:bg-[#F3F4F8]",
        isActive &&
          "text-[#23272E] bg-[#F3F4F8] hover:bg-[#F3F4F8] hover:text-[#23272E]"
      )}
    >
      <div className="flex items-center gap-x-2 py-[9px]">
        <Icon
          size={22}
          className={cn("text-[#8B909A]", isActive && "text-[#23272E]")}
        />
        {label}
      </div>
    </button>
  );
};
