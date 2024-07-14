"use client";

import { Compass, StickyNote } from "lucide-react";
import Link from "next/link";
import React from "react";
import AppbarLogo from "./AppbarLogo";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  const menuItems = [
    {
      key: "dashboard",
      href: "/",
      icon: <Compass className="h-4 w-4" />,
      text: "Dashboard",
    },
    {
      key: "requests",
      href: "/request",
      icon: <StickyNote className="h-4 w-4" />,
      text: "Requests",
    },
  ];

  return (
    <div className="hidden lg:flex lg:flex-col w-[12rem] p-2 min-h-screen bg-slate-200">
      <div className="pl-1 pt-1 ">
        <AppbarLogo />
      </div>

      <div className="sticky top-16 ">
        <ul className="px-3 mt-6 space-y-2">
          {menuItems.map(({ key, href, icon, text }) => (
            <li
              key={key}
              className={`rounded-l-full px-3 py-[0.5rem] text-[14px] text-blue-800 hover:text-white hover:bg-blue-800 dark:hover:bg-primary-foreground  ${
                pathname === href ? "bg-blue-800 text-white" : ""
              }`}
            >
              <Link
                href={href}
                className="flex cursor-pointer items-center gap-3"
              >
                {icon}
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
/*
<li
  key={key}
  className={`rounded-l-full px-3 py-[0.5rem] text-[14px] text-blue-800 hover:text-white hover:bg-blue-800 dark:hover:bg-primary-foreground ${
    router.pathname === href ? "bg-blue-800 text-white" : ""
  }`}
>
  <Link href={href} className="flex cursor-pointer items-center gap-3">
    {icon}
    {text}
  </Link>
</li>;*/
