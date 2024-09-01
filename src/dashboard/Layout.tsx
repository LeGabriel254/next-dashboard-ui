export default function dashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (< div className="h-screen flex" >
    {/*Left*/}
     <div className="w-[14%] md:[] bg-red-200">l</div>
     {/*Right*/}
     <div className="w-[86%] bg-blue-20">r</div>

    
  </div>

  )
    }
  
