import Hero from "@/components/hero";
import LogoMarquesina from "@/components/LogoMarquesina";
import Identity from "@/components/identity";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* PARTE SUPERIOR: AZUL INSTITUCIONAL */}
      <div className="bg-primary">
        <Hero />
      </div>

      {/* CUERPO CENTRAL: FONDO BLANCO */}

      <div className="bg-white py-20">
        <LogoMarquesina />
      </div>

    </main>
  );
}