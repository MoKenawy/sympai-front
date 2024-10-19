import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "./providers";
import SideNav from "@/components/Sidenav/sideNav";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SympAI",
  description: "Chatbot for healthcare",
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

          <Providers>
            {children}
          </Providers>

      </body>

    </html >

  );
}


