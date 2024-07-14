"use client";

import React, { useRef, useState } from "react";
import { BellDot } from "lucide-react";
import Image from "next/image";
import { signOut } from "next-auth/react";
import useOnClickOutside from "@/utils/useOnClickOutside";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();
  const [showUserModal, setShowUserModal] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
 
  const handlerRef = () => {
    setShowUserModal(false);
  };

  useOnClickOutside(ref, handlerRef);

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="flex h-16 items-center justify-between px-4 sm:px-8">
        <div className="flex-1 font-semibold text-base sm:text-2xl text-black">
          Vendor Submission
        </div>
        <div className="flex items-center space-x-3">
          <div className="border p-2 rounded-full cursor-pointer">
            <BellDot className="text-gray-600 h-5 w-5" />
          </div>
          <div className="border-l-2 border-gray-100 h-5"></div>
          <div
            className="flex items-center gap-x-2 text-black"
            onClick={() => {
              setShowUserModal(prev => !prev);
            }}
          >
            <Image
              height={34}
              width={34}
              alt="profile avatar"
              className="h-9 w-9 rounded-full hover:cursor-pointer"
              src={"/person.png"}
            />
            <div className="hidden md:flex justify-between gap-x-2 items-center">
              <div className="flex flex-col">
                <p className="font-semibold text-[12px]">{session?.user.username}</p>
                <p className="font-normal text-[8px]">{session?.user.email}</p>
              </div>
            </div>
          </div>
          {showUserModal ? (
            <div
              className="absolute top-12 right-8 text-sm flex flex-col gap-1.5 items-start   text-center border shadow-xl  z-10   rounded bg-slate-200 border-gray-300 dark:border-slate-500 text-slate-900  "
              ref={ref}
            >
              <div
                className="cursor-pointer hover:bg-gray-300 py-2 px-4 w-36 rounded"
                onClick={() => {
                  signOut({ callbackUrl: "/auth" });
                }}
              >
                Logout
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
