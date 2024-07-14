'use client';

import React from "react";
import { useState } from "react";
import Table from "@/components/Table";
import { Calendar, Search } from "lucide-react";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Requested");
  const [requestedDate, setRequestedDate] = useState("RequestedDate");
  return (
    <>
      <div className="flex text-black h-16 items-center pl-8 space-x-16 sm:space-x-24 border-b border-gray-200 relative">
        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={() => setActiveTab("Requested")}
        >
          <p className={activeTab === "Requested" ? "font-bold" : ""}>
            Requested
          </p>
          {activeTab === "Requested" && (
            <span className="absolute bottom-0 w-[6rem] border-b-4 border-blue-800"></span>
          )}
        </div>
        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={() => setActiveTab("Submitted")}
        >
          <p className={activeTab === "Submitted" ? "font-bold" : ""}>
            Submitted
          </p>
          {activeTab === "Submitted" && (
            <span className="absolute bottom-0 w-[6rem] border-b-4 border-blue-800"></span>
          )}
        </div>
      </div>
      <div className="flex space-x-4 text-black h-16 items-center pl-8">
        <button className="flex items-center border border-blue-200 rounded-md px-2 py-1">
          <Calendar className="mr-2 h-4 w-4 text-blue-600" /> Last 7 Days
        </button>
        <div className="flex items-center cursor-pointer">
          <button className="flex items-center border rounded-l-md rounded-r-none border-blue-200  px-2 py-1">
            <Search className="mr-2 h-4 w-4 text-black" />
            <span className="font-semibold">by customer</span>
          </button>
          <input
            type="text"
            className="border border-blue-200 rounded-l-none rounded-r-md px-2 py-1 focus:outline-blue-300"
          />
        </div>
      </div>
      <Table />
    </>
  );
};

export default Dashboard;
