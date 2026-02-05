import Image from "next/image";
import logoFull from "@/assets/logos/logo-full.png";

export default function Home() {
  return (
    // min-h-[70dvh]: Altura controlada para celulares y tablets (iPad vertical)
    // lg:min-h-screen: Solo ocupa toda la pantalla en monitores de escritorio
    <main className="flex min-h-[70dvh] lg:min-h-screen flex-col items-center justify-center bg-primary text-white p-6 text-center py-24">
      <div className="max-w-3xl w-full space-y-8 z-10">

        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl leading-tight">
          CIDERE <span className="text-secondary">Región de Coquimbo</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-300 max-w-lg mx-auto leading-relaxed opacity-90">
          Estamos construyendo una nueva experiencia digital para potenciar el desarrollo regional por más de 50 años.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <button className="px-10 py-4 bg-secondary hover:bg-emerald-500 text-white font-bold rounded-full transition-all shadow-xl active:scale-95">
            Contáctanos
          </button>
          <button className="px-10 py-4 border-2 border-white/20 hover:bg-white/10 text-white font-bold rounded-full transition-all">
            Saber más
          </button>
        </div>

      </div>

      {/* Decoración visual para rellenar el fondo de forma equilibrada */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>
    </main>
  );
}
