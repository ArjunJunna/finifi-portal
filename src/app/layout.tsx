import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Hydration from "@/lib/Hydration";

import Providers from "@/components/Providers";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Finifi",
    template: "%s - Finifi",
  },
  description: "Financing made easy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Hydration>
        <body className={inter.className}>
          <Providers>
            <div className="flex h-screen overflow-y-auto">
              <Sidebar />
              <div className="flex flex-col flex-grow bg-white">
                <Navbar />
                {children}
              </div>
            </div>
          </Providers>
        </body>
      </Hydration>
    </html>
  );
}
