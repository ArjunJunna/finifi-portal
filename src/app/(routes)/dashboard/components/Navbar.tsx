import React from "react";
import { BellDot } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  var user = {
    username: "Rohit Sharma",
    email: "rohit.sharma@growquest.in",
  };

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
            <div className="flex items-center gap-x-2 text-black">
              <Image
                height={34}
                width={34}
                alt="profile avatar"
                className="h-9 w-9 rounded-full hover:cursor-pointer"
                src={"/person.png"}
              />
              <div className="hidden md:flex justify-between gap-x-2 items-center">
                <div className="flex flex-col">
                  <p className="font-semibold text-[12px]">{user.username}</p>
                  <p className="font-normal text-[8px]">{user.email}</p>
                </div>
              </div>
            </div>
          </div>
        
      </div>
    </header>
  );
};

export default Navbar;
