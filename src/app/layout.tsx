import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import Preloader from "@/components/shared/Preloader";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Masakali | Elevated Indian Cuisine in London",
  description: "Experience the royal flavors of India in a breathtaking, modern setting. Masakali offers premium Indian fine dining in the heart of London.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} antialiased h-full`}>
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans relative">
        <Preloader />
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
