export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return < div className="h-screen flex" >
    {/*Left*/}
     <div className='w--[14%] md:w[8%] lg:w--[16%] xl:[14%] bg-red-200'>l</div>
     {/*Right*/}
     <div className='w--[86%] md:[92%] lg:w--[84%] xl:[86%] bg-blue-20'>r</div>  
  </div>
    }
  
