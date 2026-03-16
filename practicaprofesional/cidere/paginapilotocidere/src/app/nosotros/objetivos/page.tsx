"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { PageHeaderAnimator } from "@/components/PageHeaderAnimator";
import {
    CurrencyDollarIcon,
    UserGroupIcon,
    GlobeAmericasIcon,
    HandRaisedIcon,
    MegaphoneIcon,
    PuzzlePieceIcon
} from "@heroicons/react/24/outline";

const ejes = [
    {
        titulo: "Eje Económico",
        desc: "Incentivar la inversión y el empleo por medio de la Articulación Público-Privada.",
        items: ["Espacio Industrial Minero", "Feria Laboral: Conecta tu Futuro"],
        icon: <CurrencyDollarIcon className="w-10 h-10" />,
        color: "text-blue-600",
        border: "hover:border-blue-600/30",
        bgIcon: "bg-blue-50",
        bullet: "bg-blue-600",
        image: "/images/slider/Imagen4.webp"
    },
    {
        titulo: "Eje Social",
        desc: "Contribuir al desarrollo de iniciativas destinadas a mejorar la calidad de vida y el desarrollo social de la Región de Coquimbo.",
        items: ["Alumnos en práctica y tesistas", "Mesa Mujer"],
        icon: <UserGroupIcon className="w-10 h-10" />,
        color: "text-amber-500",
        border: "hover:border-amber-500/30",
        bgIcon: "bg-amber-50",
        bullet: "bg-amber-500",
        image: "/images/slider/foto-eje-social.webp"
    },
    {
        titulo: "Eje Medioambiental",
        desc: "Fomentar el desarrollo de iniciativas que se orienten al equilibrio entre el desarrollo económico y el cuidado del medio ambiente.",
        items: ["Estudio de Adaptación al Cambio Climático", "Seminario Hidrógeno Verde", "Programa CORFO: Empresas Sostenibles"],
        icon: <GlobeAmericasIcon className="w-10 h-10" />,
        color: "text-emerald-500",
        border: "hover:border-emerald-500/30",
        bgIcon: "bg-emerald-50",
        bullet: "bg-emerald-500",
        image: "/images/slider/foto-eje-medioambiental.webp"
    },
    {
        titulo: "Eje Relacional",
        desc: "Promover redes de colaboración entre los socios de CIDERE y su interacción estratégica con autoridades, academia y gremios regionales.",
        items: ["Participaciones en mesas de trabajo y comisiones", "Vinculación con autoridades", "Plataforma RDS"],
        icon: <HandRaisedIcon className="w-10 h-10" />,
        color: "text-cyan-500",
        border: "hover:border-cyan-500/30",
        bgIcon: "bg-cyan-50",
        bullet: "bg-cyan-500",
        image: "/images/slider/foto-eje-relacional.webp"
    },
    {
        titulo: "Eje Comunicacional",
        desc: "Lineamientos estratégicos que orientan la comunicación institucional de CIDERE para visibilizar su aporte al desarrollo regional.",
        items: ["Páginas web CIDERE y RDS", "Posicionamiento en Redes", "Artículos en prensa"],
        icon: <MegaphoneIcon className="w-10 h-10" />,
        color: "text-violet-500",
        border: "hover:border-violet-500/30",
        bgIcon: "bg-violet-50",
        bullet: "bg-violet-500",
        image: "/images/slider/foto-eje-comunicacional.webp"
    },
    {
        titulo: "Eje Transversal",
        desc: "La unión de todos los ejes estratégicos de CIDERE para el desarrollo regional.",
        items: ["Industria del Ocio", "Cultura y Deporte", "Astronomía y Gastronomía", "Diplomado", "Planificación Edificio Cidere"],
        icon: <PuzzlePieceIcon className="w-10 h-10" />,
        color: "text-rose-500",
        border: "hover:border-rose-500/30",
        bgIcon: "bg-rose-50",
        bullet: "bg-rose-500",
        image: "/images/slider/Imagen8.webp"
    },
];

const ObjetivosPage = () => {
    const [activeCardId, setActiveCardId] = useState<string | null>(null);

    return (
        <main className="min-h-screen bg-transparent overflow-x-hidden">
            {/* Header Institucional */}
            <PageHeaderAnimator id="objetivos" bgImage="/images/slider/banner-ejes-estrategicos.webp" className="bg-primary pt-40 pb-28 px-6 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-secondary via-transparent to-transparent z-10"></div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <h1 className="text-white text-4xl md:text-7xl font-black mb-6 uppercase tracking-tighter">
                        Ejes <span className="text-blue-500">Estratégicos</span>
                    </h1>
                    <p className="text-blue-100/70 text-lg md:text-xl font-medium max-w-2xl mx-auto">
                        Nuestra ruta para liderar el desarrollo sostenible en la Región de Coquimbo.
                    </p>
                </div>
            </PageHeaderAnimator>

            {/* Layout Grid de Tarjetas Animadas Overlay */}
            <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {ejes.map((eje, index) => {
                        const isActive = activeCardId === eje.titulo;
                        return (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                                key={index}
                                role="button"
                                tabIndex={0}
                                aria-expanded={isActive}
                                onClick={() => setActiveCardId(isActive ? null : eje.titulo)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        e.preventDefault();
                                        setActiveCardId(isActive ? null : eje.titulo);
                                    }
                                }}
                                className={`group relative flex flex-col rounded-[2.5rem] bg-slate-900 border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden transition-all duration-500 cursor-pointer h-[24rem] sm:h-[28rem] hover:shadow-2xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary focus-visible:ring-offset-2`}
                            >
                                {/* IMAGEN DE FONDO (Fija, se oscurece al abrir) */}
                                <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
                                    <img
                                        src={eje.image}
                                        alt={eje.titulo}
                                        className={`w-full h-full object-cover transition-transform duration-1000 ${isActive ? "scale-110" : "scale-100 lg:group-hover:scale-110"}`}
                                    />
                                    {/* Overlay base oscuro inferior */}
                                    <div className={`absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/30 to-transparent transition-opacity duration-700 ${isActive ? "opacity-0" : "opacity-100 lg:group-hover:opacity-0"}`}></div>
                                    {/* Overlay Blur Fuerte (Aparece encima) */}
                                    <div className={`absolute inset-0 bg-slate-900/85 backdrop-blur-md transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-0 lg:group-hover:opacity-100"}`}></div>
                                </div>

                                {/* Título/Icono Base (Visibles en modo reposo, desaparecen en hover/click) */}
                                <div className={`absolute bottom-0 left-0 w-full p-8 md:p-10 flex flex-col justify-end transition-all duration-500 ease-in-out z-10 ${isActive ? "opacity-0 pointer-events-none translate-y-4" : "opacity-100 lg:group-hover:opacity-0 lg:group-hover:translate-y-4 lg:group-hover:pointer-events-none"}`}>
                                    <div className={`mb-4 w-14 h-14 rounded-2xl flex items-center justify-center ${eje.bgIcon} ${eje.color} shadow-lg shrink-0`}>
                                        {eje.icon}
                                    </div>
                                    <h2 className="text-3xl font-black text-white uppercase tracking-tight drop-shadow-md">
                                        {eje.titulo}
                                    </h2>
                                </div>

                                {/* Contenido Descriptivo Overlay (Aparece centrado sobre el blur) */}
                                <div className={`absolute inset-0 w-full h-full flex flex-col justify-center p-8 md:p-12 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] z-20 ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 lg:group-hover:opacity-100 lg:group-hover:translate-y-0"}`}>
                                    <h2 className="text-3xl font-black text-white mb-6 uppercase tracking-tight shrink-0 drop-shadow-md">
                                        {eje.titulo}
                                    </h2>
                                    <div className="overflow-y-auto pr-2 custom-scrollbar">
                                        <p className="text-blue-50 text-base md:text-lg leading-relaxed font-medium text-justify drop-shadow-sm">
                                            {eje.desc}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </section>
        </main>
    );
};

export default ObjetivosPage;