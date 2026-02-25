import React from "react";

type Hito = {
    year: string;
    title: string;
    description: string;
    image: string;
    isLogo?: boolean;
};

const hitos: Hito[] = [
    {
        year: "1976",
        title: "Fundación de CIDERE",
        description: "Nace como una organización privada sin fines de lucro, formada por un grupo de empresarios regionales comprometidos con el desarrollo local.",
        image: "/images/slider/laserena-70s.webp"
    },
    {
        year: "Años 80",
        title: "Avenida del Mar",
        description: "La construcción de la Avenida del Mar en La Serena entre 1980 y 1981 es una de las obras más emblemáticas en las que Cidere ha estado involucrado.",
        image: "/images/slider/Avenida-del-Mar-La-Serena.webp"
    },
    {
        year: "Años 80",
        title: "La Recova",
        description: "Cidere fue partícipe de la reinauguración de La Recova en 1981, centro importante del comercio local.",
        image: "/images/slider/la-recova-la-serena.webp"
    },
    {
        year: "Años 80",
        title: "Terminal Pesquero de La Serena",
        description: "Cidere con recursos propios financió la construcción del Terminal Pesquero de La Serena.",
        image: "/images/slider/terminal-pesquero-la-serena.webp"
    },
    {
        year: "Años 80",
        title: "Ruta al Cerro Grande",
        description: "El primer camino que permitió acceder al Cerro Grande fue financiado por Cidere.",
        image: "/images/slider/camino-cerro-grande.webp"
    },
    {
        year: "Años 80",
        title: "Aeropuerto La Florida",
        description: "Después de un intenso temporal a mediados de la década de 1980, Cidere con ayuda de la Cámara Chilena de la Construcción, colaboró en la construcción de una pista alternativa en el Aeropuerto La Florida.",
        image: "/images/slider/aeropuerto-la-florida.webp"
    },
    {
        year: "2024",
        title: "Transformación Digital de Cidere",
        description: "Se lanzó el primer piloto de la plataforma Red de Socios Cidere (RDS), permitiendo que los socios puedan fortalecer su colaboración para el desarrollo de la región.",
        image: "/assets/logos/RDS-LOGO-VERTICAL-01.png",
        isLogo: true
    },
    {
        year: "2026",
        title: "50 Aniversario",
        description: "Cidere cumple Medio siglo de presencia en la región, con 94 empresas socias y una visión clara hacia el desarrollo sostenible de la región.",
        image: "/images/slider/Slide2VerSocios.webp"
    }
];

const HitosPage = () => {
    return (
        <main className="min-h-screen bg-slate-50 overflow-x-hidden">

            {/* Header Institucional */}
            <section className="bg-primary pt-32 pb-24 px-6 text-center relative overflow-hidden">
                {/* Decoración de fondo para estilo Next-Gen */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <div className="absolute -top-24 -left-24 w-96 h-96 bg-secondary rounded-full blur-[120px]"></div>
                </div>

                <div className="relative z-10">
                    <h1 className="text-white text-4xl md:text-7xl font-black mb-6 italic uppercase tracking-tighter">
                        Hitos Históricos de CIDERE
                    </h1>
                    <p className="text-blue-100/70 text-lg md:text-xl max-w-2xl mx-auto font-medium">
                        50 años liderando el progreso económico y social de la Región de Coquimbo.
                    </p>
                </div>
            </section>

            {/* Línea de Tiempo*/}
            <section className="py-24 px-4 md:px-6 relative max-w-6xl mx-auto">

                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-secondary/50 via-primary/20 to-transparent md:-translate-x-1/2"></div>

                <div className="space-y-24">
                    {hitos.map((hito, index) => (
                        <div key={index} className="relative flex items-center">

                            {/* Contenedor del Hito */}
                            <div className={`flex flex-col md:flex-row w-full items-center gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                }`}>

                                {/* 1. Parte del Contenido (Texto) */}
                                <div className="w-full md:w-1/2 pl-16 md:pl-0">
                                    <div className={`p-8 rounded-[2rem] bg-white border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 group relative ${index % 2 === 0 ? "md:text-right md:mr-4" : "md:text-left md:ml-4"
                                        }`}>

                                        <div className="relative z-10">
                                            <span className="text-secondary font-black text-xl mb-2 block tracking-widest">{hito.year}</span>
                                            <h3 className="text-primary text-2xl font-bold mb-4 uppercase leading-tight">{hito.title}</h3>
                                            <p className="text-gray-500 leading-relaxed text-sm font-medium">
                                                {hito.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* 2. El Punto de la Línea (Timeline Dot) */}
                                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-secondary rounded-full border-4 border-white shadow-[0_0_15px_rgba(0,209,255,0.5)] md:-translate-x-1/2 z-20"></div>

                                {/* 3. Parte de la Imagen */}
                                <div className="w-full md:w-1/2 pl-16 md:pl-0">
                                    <div className={`relative group overflow-hidden rounded-[2rem] aspect-video md:aspect-square lg:aspect-video shadow-lg ${hito.isLogo ? 'bg-white p-8 md:p-12 flex items-center justify-center' : ''}`}>
                                        <img
                                            src={hito.image}
                                            alt={hito.title}
                                            className={`w-full h-full transition-transform duration-700 group-hover:scale-105 ${hito.isLogo ? 'object-contain' : 'object-cover'}`}
                                        />
                                        <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500"></div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </main>
    );
};

export default HitosPage;