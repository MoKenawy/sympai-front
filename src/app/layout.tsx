import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "./providers";
import SideNav from "@/components/Sidenav/sideNav";
import { Suspense } from "react";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};



// const navLinks = [
//   { name: 'About', href: '/' },
//   { name: 'Chat', href: '/chat' },
//   { name: 'Contact', href: '/contact' },

// ]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  return (
    <html lang="en">
      <body className={`h-full ${inter.className}`}>

        <div className="flex h-screen overflow-y-auto">
          <div className="w-64 h-full">
          <SideNav />

          </div>
          <div className="flex-grow">
            <Providers>
              {children}
            </Providers>
          </div>
        </div>

      </body>

    </html>

  );
}


