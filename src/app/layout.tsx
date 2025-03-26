
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <SidebarProvider>
          <AppSidebar/>
          <main className="w-full max-h-screen xl:overflow-hidden " >
            <SidebarTrigger className=" size-10 xl:size-20"/>
             {children}
          </main>
          </SidebarProvider> 
          </body>
  </html>

  );
}
