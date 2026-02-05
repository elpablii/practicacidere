import React from "react";
import Link from "next/link";

const Hero = () => {
    return (
        // Ajuste de altura: h-[85vh] en desktop, pero h-auto con padding en móvil para evitar cortes
        <section className="relative w-full min-h-[85vh] flex items-center overflow-hidden bg-[#003366]">
            {/* Imagen de fondo con Overlay mejorado para contraste */}
            <div className="absolute inset-0 z-0">
                {/* Gradiente más oscuro al inicio para garantizar lectura */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#003366]/95 via-[#003366]/70 to-transparent z-10" />
                <img
                    src="https://images.unsplash.com/photo-1590508004523-289139a95782?q=80&w=2070&auto=format&fit=crop" // Reemplazar con imagen real de la región
                    alt="Región de Coquimbo"
                    className="w-full h-full object-cover opacity-60 mix-blend-overlay md:opacity-100 md:mix-blend-normal"
                />
            </div>

            {/* Contenido del Hero */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full py-20 md:py-0">
                <div className="max-w-3xl">
                    {/* Badge de Trayectoria */}
                    <div className="inline-flex items-center space-x-2 bg-secondary/20 backdrop-blur-md border border-secondary/30 px-3 py-1 rounded-full mb-6">
                        <span className="flex h-2 w-2 rounded-full bg-secondary animate-pulse" />
                        <span className="text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest">
                            50 Años de Trayectoria
                        </span>
                    </div>

                    {/* H1: Tamaños escalonados para mejor proporción */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight">
                        Liderando el <span className="text-secondary">Desarrollo Sostenible</span> de la Región de Coquimbo
                    </h1>

                    {/* Párrafo: Tamaño base más controlado y mejor lectura */}
                    <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-10 leading-relaxed max-w-2xl">
                        Somos la corporación gremial que articula el sector público, privado y la academia para fomentar el crecimiento industrial y social de nuestra región.
                    </p>

                    {/* Botones */}
                    <div className="flex flex-col sm:flex-row gap-4 max-w-md sm:max-w-none">
                        <Link
                            href="/contacto"
                            className="px-8 py-4 bg-secondary text-primary font-bold rounded-xl text-center hover:bg-white transition-all shadow-lg active:scale-95 text-sm sm:text-base"
                        >
                            Hazte Socio
                        </Link>
                        <Link
                            href="/nosotros"
                            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/30 font-bold rounded-xl text-center hover:bg-white/20 transition-all active:scale-95 text-sm sm:text-base"
                        >
                            Nuestra Historia
                        </Link>
                    </div>
                </div>
            </div>

            {/* Decoración sutil (solo desktop) */}
            <div className="absolute bottom-0 right-0 p-10 opacity-5 hidden lg:block pointer-events-none">
                <div className="text-white text-[12rem] font-bold leading-none select-none font-geist-mono">
                    50
                </div>
            </div>
        </section>
    );
};

export default Hero;