import React from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-primary text-white p-6 text-center">
      <div className="max-w-2xl w-full space-y-8">
        {/* Logo Placeholder or Icon */}
        <div className="mx-auto w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg mb-8">
          <span className="text-primary text-4xl font-bold">C</span>
        </div>

        <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl">
          CIDERE <span className="text-secondary">Región de Coquimbo</span>
        </h1>

        <p className="text-xl text-gray-300 max-w-lg mx-auto leading-relaxed">
          Estamos construyendo una nueva experiencia digital para potenciar el desarrollo regional.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <button className="px-8 py-3 bg-secondary hover:bg-emerald-500 text-white font-semibold rounded-full transition-all shadow-md">
            Contáctanos
          </button>
          <button className="px-8 py-3 border border-white/30 hover:bg-white/10 text-white font-semibold rounded-full transition-all">
            Saber más
          </button>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Cidere Región de Coquimbo. Todos los derechos reservados.</p>
        </div>
      </div>
    </main>
  );
}
