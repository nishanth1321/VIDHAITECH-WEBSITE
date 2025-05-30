import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Nunito } from "next/font/google"; // Import Playfair Display

const playfairDisplay = Nunito({ subsets: ["latin"], weight: ["400", "700"] }); // Adjust weights as needed

export const metadata: Metadata = {
  title: "Vedhai Technologies",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{ 
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={playfairDisplay.className} suppressHydrationWarning> 
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
