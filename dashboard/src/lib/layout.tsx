
// import Navbar from "@/components/Navbar";
import Link from "next/link";
import Menu from "../components/Menu";
import logo from '@/public/image/logo.jpg'
import Image from "next/image";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* LEFT */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] ">
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start gap-2 p-4"
        >
           <Image src='/image/home.png' alt='logo' height={20} width={20}  /> 
          <span className="hidden lg:block font-bold">SchooLama</span>
        </Link>
        {/* <Menu />  */}
      </div>
      {/* RIGHT */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] bg-blue-200 overflow-scroll flex flex-col">
        <Navbar />
        <Menu />
        {children}
      </div>
    </div>
  );
}