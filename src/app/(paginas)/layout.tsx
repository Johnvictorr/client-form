import NavBar from "@/componentes/navBar/navbar";


export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {

    return (
      <div className="flex min-h-screen">
          <NavBar />
          
          <div className="flex flex-col flex-grow h-screen overflow-hidden">
              <div className="flex-grow overflow-auto">{children}</div>
          </div>
      </div>
    )
  }