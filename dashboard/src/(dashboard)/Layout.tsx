import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return < div className="h-screen flex" >
    {/*Left*/}
     <div className='w--[14%] md:w[8%] lg:w--[16%] xl:[14%] bg-red-200'>
<Link href="/" className="flex items-center justify-center gap-2">
  <image src='/logo.png' alt="logo" width={32} height={32} />
  <span className="hidden lg:block">Schooleon</span>
</Link>
     </div>
     {/*Right*/}
     <div className='w--[86%] md:[92%] lg:w--[84%] xl:[86%] bg-blue-20'>r</div>  
  </div>
    }
  
