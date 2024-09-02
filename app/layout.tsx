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
import { Layout, Menu, Avatar } from 'antd';
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { LaptopOutlined, NotificationOutlined, UserOutlined, BellFilled } from '@ant-design/icons';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GlucoCare",
  description: "A Diabetes and Glucose Management Web Application aimed to help pre-diabetes and diabetes patients",
  icons:{
    icon: '/icons/official_icon.png'
  }
};

const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);

    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,

      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  },
);
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
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
                  defaultSelectedKeys={['1']}
                  defaultOpenKeys={['sub1']}
                  className="h-screen"
                  items={items2}
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
      </body>
    </html>
  );
}
