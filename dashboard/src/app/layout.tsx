import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Leon Dev School Management Dashboard",
  description: "Next.js School Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
      < div className="h-screen flex" >
  {/*Left*/}
   <div className='w-[14%] md:w[8%] lg:w-[16%] xl:[14%] bg-red-200'>
<Link href="/" className="flex items-center justify-center gap-2">
<Image src="/image/logo.png" alt="logo" width={32} height={32} />
 
<span className="hidden lg:block">Schooleon</span>
</Link>
   </div>
   {/*Right*/}
   <div className='w-[86%] md:[92%] lg:w-[84%] xl:[86%] bg-blue-20'>r</div> 
  
</div></body>

    </html>
  );
}