import React from "react";
import Link from "next/link";

const Hero = () => {
    return (
        <section className="relative h-[85vh] w-full flex items-center overflow-hidden">
            {/* Imagen de fondo con Overlay para asegurar contraste */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-[#003366]/90 to-transparent z-10" />
                <img
                    src="https://images.unsplash.com/photo-1590508004523-289139a95782?q=80&w=2070&auto=format&fit=crop" // Imagen de ejemplo de puerto/industria
                    alt="Región de Coquimbo"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Contenido del Hero */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
                <div className="max-w-2xl">
                    {/* Badge de Trayectoria */}
                    <div className="inline-flex items-center space-x-2 bg-secondary/20 backdrop-blur-md border border-secondary/30 px-3 py-1 rounded-full mb-6">
                        <span className="flex h-2 w-2 rounded-full bg-secondary animate-pulse" />
                        <span className="text-white text-xs font-bold uppercase tracking-widest">
                            50 Años de Trayectoria
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
                        Liderando el <span className="text-secondary">Desarrollo Sostenible</span> de la Región de Coquimbo
                    </h1>

                    <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed">
                        Somos la corporación gremial que articula el sector público, privado y la academia para fomentar el crecimiento industrial y social de nuestra región.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href="/contacto"
                            className="px-8 py-4 bg-secondary text-primary font-bold rounded-xl text-center hover:bg-white transition-all shadow-lg active:scale-95"
                        >
                            Hazte Socio ahora
                        </Link>
                        <Link
                            href="/nosotros"
                            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/30 font-bold rounded-xl text-center hover:bg-white/20 transition-all active:scale-95"
                        >
                            Nuestra Historia
                        </Link>
                    </div>
                </div>
            </div>

            {/* Decoración sutil al fondo */}
            <div className="absolute bottom-0 right-0 p-10 opacity-10 hidden lg:block">
                <div className="text-white text-[10rem] font-bold leading-none select-none">
                    50
                </div>
            </div>
        </section>
    );
};

export default Hero;