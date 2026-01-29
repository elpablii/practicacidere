import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// 1. Importamos el componente
import Navbar from "@/components/navbar.tsx";

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
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* 2. Colocamos el Navbar arriba de todo */}
        <Navbar />
        {/* Añadimos un padding-top para que el contenido no quede debajo del menú fijo */}
        <div className="pt-20">
          {children}
        </div>
      </body>
    </html>
  );
}