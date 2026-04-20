"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    NewspaperIcon,
    CalendarDaysIcon,
    BriefcaseIcon,
    UserGroupIcon,
    BuildingStorefrontIcon,
    FolderOpenIcon
} from "@heroicons/react/24/outline";

export default function RDSModules() {
    const [activeCardId, setActiveCardId] = useState<number | null>(null);

    const modules = [
        {
            title: "Noticias de la Comunidad",
            desc: "Mantente al tanto del quehacer corporativo y los hitos más relevantes de nuestras empresas e instituciones socias en la región.",
            icon: <NewspaperIcon className="w-8 h-8 md:w-10 md:h-10" />,
            image: "/images/fotos-banners-y-tarjetas/Imagen68.webp",
            color: "from-blue-600 to-blue-400",
            lightBg: "bg-blue-50",
            cardBg: "bg-blue-50/40",
            textColor: "text-blue-600",
            borderColor: "border-blue-100/50"
        },
        {
            title: "Calendario de Eventos",
            desc: "Descubre congresos, seminarios y reuniones clave. Como socio puedes crear, asistir, participar y guardar eventos importantes en el itinerario.",
            icon: <CalendarDaysIcon className="w-8 h-8 md:w-10 md:h-10" />,
            image: "/images/fotos-banners-y-tarjetas/Imagen64.webp",
            color: "from-cyan-600 to-cyan-400",
            lightBg: "bg-cyan-50",
            cardBg: "bg-cyan-50/40",
            textColor: "text-cyan-600",
            borderColor: "border-cyan-100/50"
        },
        {
            title: "Convenios Exclusivos",
            desc: "Accede a un directorio de ofertas, descuentos y beneficios cruzados diseñados especialmente para los miembros de nuestra red.",
            icon: <BriefcaseIcon className="w-8 h-8 md:w-10 md:h-10" />,
            image: "/images/fotos-banners-y-tarjetas/Imagen69.webp",
            color: "from-indigo-600 to-indigo-400",
            lightBg: "bg-indigo-50",
            cardBg: "bg-indigo-50/40",
            textColor: "text-indigo-600",
            borderColor: "border-indigo-100/50"
        },
        {
            title: "Directorio de Socios",
            desc: "Explora la red completa de miembros adheridos a la corporación.",
            icon: <UserGroupIcon className="w-8 h-8 md:w-10 md:h-10" />,
            image: "/images/fotos-banners-y-tarjetas/foto-directorio-socios-rds.webp",
            color: "from-teal-600 to-teal-400",
            lightBg: "bg-teal-50",
            cardBg: "bg-teal-50/40",
            textColor: "text-teal-600",
            borderColor: "border-teal-100/50"
        },
        {
            title: "Vinculación Comercial",
            desc: "Conecta con las oportunidades comerciales que te brinda la Red de Socios. Oferta y conoce los bienes y servicios de los socios.",
            icon: <BuildingStorefrontIcon className="w-8 h-8 md:w-10 md:h-10" />,
            image: "/images/fotos-banners-y-tarjetas/foto-vinculacion-comercial-rds.webp",
            color: "from-sky-600 to-sky-400",
            lightBg: "bg-sky-50",
            cardBg: "bg-sky-50/40",
            textColor: "text-sky-600",
            borderColor: "border-sky-100/50"
        },
        {
            title: "Material y Documentación",
            desc: "Revisa información de interés recabada por la corporación.",
            icon: <FolderOpenIcon className="w-8 h-8 md:w-10 md:h-10" />,
            image: "/images/fotos-banners-y-tarjetas/Imagen63.webp",
            color: "from-violet-600 to-violet-400",
            lightBg: "bg-violet-50",
            cardBg: "bg-violet-50/40",
            textColor: "text-violet-600",
            borderColor: "border-violet-100/50"
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((mod, i) => {
                const isActive = activeCardId === i;
                return (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                        role="button"
                        tabIndex={0}
                        aria-expanded={isActive}
                        onClick={() => setActiveCardId(isActive ? null : i)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                setActiveCardId(isActive ? null : i);
                            }
                        }}
                        className={`group relative flex flex-col rounded-[2.5rem] ${mod.cardBg} border border-white shadow-lg overflow-hidden transition-all duration-500 cursor-pointer h-[24rem] hover:shadow-2xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500`}
                    >
                        {/* Imagen de Fondo y Overlays */}
                        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-slate-900">
                            <img
                                src={mod.image}
                                alt={mod.title}
                                className={`w-full h-full object-cover transition-transform duration-1000 ${isActive ? "scale-110" : "scale-100 group-hover:scale-110"} opacity-90`}
                            />
                            {/* Overlay de sombra suave continua para la lectura del texto */}
                            <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-all duration-500 z-0 ${isActive ? "bg-black/40" : "group-hover:bg-black/60"}`}></div>
                        </div>

                        {/* Estado Base (Desaparece al hacer hover) */}
                        <div className={`absolute inset-0 p-8 md:p-10 flex flex-col justify-end items-start transition-all duration-500 ease-in-out z-10 ${isActive ? "opacity-0 invisible pointer-events-none translate-y-4" : "opacity-100 visible lg:group-hover:opacity-0 lg:group-hover:invisible lg:group-hover:translate-y-4 lg:group-hover:pointer-events-none"}`}>
                            <div className={`p-4 bg-white/95 ${mod.textColor} backdrop-blur-sm rounded-2xl mb-6 shadow-xl border border-white/20 transition-transform duration-500 group-hover:scale-110`}>
                                {mod.icon}
                            </div>
                            <h3 className="text-2xl font-black text-white tracking-tight uppercase drop-shadow-md">
                                {mod.title}
                            </h3>
                        </div>

                        {/* Contenido Revelado (Aparece en Hover) */}
                        <div className={`relative p-8 md:p-10 flex flex-col h-full flex-grow transition-all duration-500 ease-in-out z-20 ${isActive ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-8 lg:group-hover:opacity-100 lg:group-hover:visible lg:group-hover:translate-y-0"}`}>
                            <div className="flex flex-col mb-4">
                                <div className={`p-4 bg-white/20 text-white backdrop-blur-md rounded-2xl mb-6 shadow-sm border border-white/30 w-max`}>
                                    {mod.icon}
                                </div>
                                <h3 className="text-2xl font-black text-white leading-tight uppercase tracking-tight drop-shadow-md">
                                    {mod.title}
                                </h3>
                            </div>
                            <p className="text-white/95 leading-relaxed font-medium mt-auto text-justify drop-shadow-sm">
                                {mod.desc}
                            </p>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
}
