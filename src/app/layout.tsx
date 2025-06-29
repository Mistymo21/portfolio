import type { Metadata } from "next";
import Navbar from "@/components/navbar/navbar";
import Details from "@/components/personalDetails/details";

import "./globals.css";




export const metadata: Metadata = {
  title: "Portfolio",
  description: "My portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <Navbar />
        <div className="details">
          <div className="details-container">

        <Details/>
          </div>
        {children}
        </div>
      </body>
    </html>
  );
}
