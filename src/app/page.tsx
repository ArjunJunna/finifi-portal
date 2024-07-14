import Dashboard from "@/components/Dashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};

const Page = () => {
  return (
    <div className="flex flex-col">
      <Dashboard />
    </div>
  );
};

export default Page;
