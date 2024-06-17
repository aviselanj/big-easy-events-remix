'use client'

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "./components/Header";
import FrontImage from "./components/FrontImage";
import Footer from "./components/Footer";
import Login from "./components/Login";
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

 const metadata: Metadata = {
  title: "Big Easy Events",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [eventData, setEventData] = useState([]);
  const [username, setUser] = useState("test-user");
  return (
   
   <html lang="en">
      <body className={inter.className}>
        <Header />
         {children}
        <FrontImage />
        <Footer />
      </body>  
      </html>
   
  );
}
