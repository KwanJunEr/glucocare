import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Sidebar } from "lucide-react";
import Siderbar from "@/components/Sidebar";
import Sider from "antd/es/layout/Sider";
import Header from "antd/es/layout/layout";
import Content from "antd/es/layout/layout";
import { Layout, Menu, Avatar, MenuProps } from 'antd';
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { LaptopOutlined, NotificationOutlined, UserOutlined, BellFilled, HomeOutlined } from '@ant-design/icons';
import { TbHealthRecognition,TbReportMedical } from "react-icons/tb";
import { SiGotomeeting ,SiChatbot} from "react-icons/si";
import { FaUserDoctor ,FaPersonRunning} from "react-icons/fa6";
import { PiBowlFoodFill } from "react-icons/pi";
import { CgCommunity } from "react-icons/cg";
import { RiCalendarFill, RiMentalHealthLine } from "react-icons/ri";
import { IoLibrary,IoSettings } from "react-icons/io5";
import { IoMdHelpCircle } from "react-icons/io";
import '@mantine/core/styles.css';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GlucoCare",
  description: "A Diabetes and Glucose Management Web Application aimed to help pre-diabetes and diabetes patients",
  icons:{
    icon: '/icons/official_icon.png'
  }
};

const sidebarMenuItems: MenuProps['items'] = [
  {
    key:'home', icon:<HomeOutlined/>, label : <Link href={'/'}>Home</Link>
  },
  {
    key:'dashboard', icon:<TbHealthRecognition/> ,label: <Link href = {'/healthdashboard'}>Health Dashboard</Link>

  },
  {
    key:'Consultation',  icon:<SiGotomeeting/>, label:<Link href= {'/consultation_advisory'}>
     Health Tools </Link>,children:[
      {
      key:'ai' , icon:<SiChatbot/>, label: <Link href={'/consultation_advisory/ai_consultation'}>Gluco AI</Link>
      },
      {
        key:'health_report' , icon:<TbReportMedical/>, label: <Link href={'/consultation_advisory/health_report_advice'}>Health Report Advice</Link>
      },
      {
        key:'doctor_consultation' , icon:<FaUserDoctor/>, label: <Link href={'/consultation_advisory/doctor_consultation'}>My Doctor</Link>
      },
      {
        key:'dietnutrition' , icon:<PiBowlFoodFill/>, label: <Link href={'/consultation_advisory/diet_planning'}>Diet & Nutrition</Link>
      },
      {
        key:'exercise' , icon:<FaPersonRunning/>, label: <Link href={'/consultation_advisory/exercise_planning'}>Exercise</Link>
      },

    ]
  },
  {
    key:'Consultation',  icon:<SiGotomeeting/>, label:<Link href= {'/community_support'}>Support</Link>,children:[
      {
        key:"community", icon:<CgCommunity/>, label: <Link href = {'/community_support/community'} >Community </Link>
      },
      {
        key:"events", icon:<RiCalendarFill />, label: <Link href = {'/community_support/events'} >Events </Link>
      },

    ]
  },
  {
    key:'health_knowledge',  icon:<IoLibrary />, label:<Link href= {'/health_knowledge'}>Knowledge</Link>
  },
  {
    key:'settings',  icon:<IoSettings />, label:<Link href= {'/settings'}>Settings</Link>
  },
  {
    key:'help',  icon:<IoMdHelpCircle />, label:<Link href= {'/help'}>Help</Link>
  }

  

]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MantineProvider>
        <AntdRegistry>
          <Layout className="h-full">
            <Header className="flex justify-between h-20 w-full !bg-blue-950 px-4">
              <div className="flex justify-between h-full items-center">
              <div className="flex">
                <Link href={'/'} className="flex items-center">
                  <Image
                    src={'/icons/official_icon.png'}
                    alt="logo"
                    height={40}
                    width={40}
                  />
                  <span className="ml-2 text-xl font-semibold text-white">GlucoCare</span>
                </Link>
              </div>
              <div className="flex items-center space-x-4 w-24 justify-end">
                <BellFilled className="text-xl !text-gray-200" />
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                  <UserOutlined className="text-white" />
                </div>
              </div>
              </div>
            </Header>
            <Layout>
              <Sider width={200}>
                <Menu
                  mode="inline"
                  defaultSelectedKeys={['home']}
            
                  className="h-screen"
                  items={sidebarMenuItems}
                  theme="dark"
                />
              </Sider>
              <Layout style={{ padding: '0 24px 24px' }}>
                <Content
                  style={{
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                  }}
                >
                  {children}
                </Content>
              </Layout>
            </Layout>
          </Layout>
        </AntdRegistry>
        </MantineProvider>
      </body>
    </html>
  );
}
