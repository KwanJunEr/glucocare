import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Sidebar } from "lucide-react";
import Siderbar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GlucoCare",
  description: "A Diabetes and Glucose Management Web Application aimed to help pre-diabetes and diabetes patients",
  icons:{
    icon: '/icons/official_icon.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="relative">
          <Navbar/>
          <div className="flex">
               <Siderbar/>
          </div>
          <section className='flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14'>
                <div className='w-full '>
                {children}
                </div>
          </section>
        </main>
  
        </body>
    </html>
  );
}
