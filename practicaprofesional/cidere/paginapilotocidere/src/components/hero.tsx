import React from "react";
import Link from "next/link";

const Hero = () => {
    return (
        <section className="relative w-full min-h-[50dvh] md:min-h-[85vh] flex items-center overflow-hidden bg-primary">

            {/* FONDO CON OVERLAY */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/70 to-primary/95 md:bg-gradient-to-r md:from-primary/95 md:via-primary/80 md:to-transparent z-10" />
                <img
                    src="https://images.unsplash.com/photo-1590508004523-289139a95782?q=80&w=2070&auto=format&fit=crop"
                    alt="Región de Coquimbo Industrial"
                    className="w-full h-full object-cover object-center"
                />
            </div>

            {/* RECURSOS INTERNOS */}

            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-20 w-full py-8 md:py-20 mt-12 md:mt-0">
                <div className="max-w-3xl">

                    {/* Badge de Trayectoria: Más compacto */}
                    <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full mb-3 md:mb-6">
                        <span className="flex h-1.5 w-1.5 rounded-full bg-secondary animate-pulse" />
                        <span className="text-white text-[9px] sm:text-xs font-bold uppercase tracking-widest">
                            50 Años de Trayectoria
                        </span>
                    </div>

                    {/* TÍTULO: Tamaño reducido para que no fuerce el estiramiento del fondo */}
                    <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-3 md:mb-6 tracking-tight">
                        Liderando el <span className="text-secondary">Desarrollo Sostenible</span> regional
                    </h1>

                    {/* PÁRRAFO: Texto más breve y pequeño en móvil */}
                    <p className="text-xs sm:text-base md:text-xl text-gray-200 mb-6 md:mb-10 leading-relaxed max-w-xl opacity-90 line-clamp-3 md:line-clamp-none">
                        Articulamos al sector público, privado y la academia para fomentar el crecimiento industrial y social de la Región de Coquimbo.
                    </p>

                    {/* BOTONES: Compactos para móvil */}
                    <div className="flex flex-col sm:flex-row gap-2 md:gap-4 max-w-[240px] sm:max-w-none">
                        <Link
                            href="/contacto"
                            className="px-5 py-3 bg-white text-primary font-bold rounded-xl text-center hover:bg-secondary transition-all shadow-lg active:scale-95 text-xs sm:text-base"
                        >
                            Hazte Socio ahora
                        </Link>
                        <Link
                            href="/nosotros"
                            className="px-5 py-3 bg-primary/40 backdrop-blur-sm text-white border border-white/30 font-bold rounded-xl text-center hover:bg-white/10 transition-all active:scale-95 text-xs sm:text-base"
                        >
                            Conócenos
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;