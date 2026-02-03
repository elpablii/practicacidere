import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CIDERE - Región de Coquimbo",
  description: "CIDERE Región de Coquimbo: Fomentando el crecimiento industrial y regional.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
        {/* El Navbar arriba de todo */}
        <Navbar />

        {/* El contenido principal que "empuja" al footer hacia abajo si hay poco texto */}
        <main className="flex-grow pt-20">
          {children}
        </main>

        {/* El Footer al final */}
        <Footer />
      </body>
    </html>
  );
}
