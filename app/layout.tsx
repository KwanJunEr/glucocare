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
               <section className='flex min-h-screen flex-1 flex-col p-8'>
                <div className='w-full '>
                {children}
                </div>
          </section>
          </div>
          
        </main>
  
        </body>
    </html>
  );
}
