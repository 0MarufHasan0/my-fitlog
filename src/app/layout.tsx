import type { Metadata } from "next";
import {  Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/Navbar/Navbar";
import Footer from "@/component/footer/Footer";
import LibraryProvider from "@/context/Context";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const osWald = Oswald({
   variable: "--font-oswald",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "My FitLog",
  description: "FitLog is a fitness exercise library web application that helps users explore different exercises, learn proper workout techniques, and track essential workout details. Users can view exercise descriptions, targeted muscle groups, equipment, difficulty levels, sets, reps, duration, and step-by-step instructions. The project provides a simple, responsive, and user-friendly interface for a better workout experience.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${osWald.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#000000]">

   

       <LibraryProvider>
           <Navbar/>
        
        {children}

        <Footer/>
       </LibraryProvider>
    
        
        </body>
    </html>
  );
}
