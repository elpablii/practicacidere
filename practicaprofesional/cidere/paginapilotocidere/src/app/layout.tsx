import type { Metadata } from "next";
import { Montserrat, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const montserrat = Montserrat({
  variable: "--font-body",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-title",
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
      <body className={`${montserrat.variable} ${outfit.variable} font-sans antialiased flex flex-col min-h-screen relative`}>
        {/* Enlace de Salto Global (A11y) */}
        <a
          href="#main-content"
          className="absolute -translate-y-full focus:translate-y-0 z-[100] bg-primary text-white font-bold p-4 px-6 rounded-br-2xl shadow-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-secondary transition-transform duration-300 left-0 top-0 hidden sm:block"
        >
          Saltar al contenido
        </a>

        {/* Fondo Global Animado Institucional Premium */}
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-slate-50 pointer-events-none">
          {/* Círculo Principal Arriba a la Derecha */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] mix-blend-multiply opacity-70 animate-blob"></div>
          {/* Círculo Secundario Centro Izquierda */}
          <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[100px] mix-blend-multiply opacity-50 animate-blob animation-delay-2000"></div>
          {/* Círculo de acento Abajo */}
          <div className="absolute -bottom-32 left-1/3 w-[700px] h-[700px] bg-blue-200/20 rounded-full blur-[120px] mix-blend-multiply opacity-60 animate-blob animation-delay-4000"></div>
          {/* Malla sutil overlay base */}
          <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.015] mix-blend-overlay"></div>
        </div>

        {/* El Navbar arriba de todo */}
        <Navbar />

        {/* El contenido principal que "empuja" al footer hacia abajo si hay poco texto */}
        <main id="main-content" className="flex-grow pt-20 focus:outline-none" tabIndex={-1}>
          {children}
        </main>

        {/* El Footer al final */}
        <Footer />
      </body>
    </html>
  );
}
