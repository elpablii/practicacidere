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
            color: "from-blue-50 to-slate-50",
            lightBg: "bg-blue-50",
            cardBg: "bg-blue-50/40",
            textColor: "text-blue-600",
            borderColor: "border-blue-100/50"
        },
        {
            title: "Calendario de Eventos",
            desc: "Descubre congresos, seminarios y reuniones clave. Como socio puedes crear, asistir, participar y guardar eventos importantes en el itinerario.",
            icon: <CalendarDaysIcon className="w-8 h-8 md:w-10 md:h-10" />,
            color: "from-cyan-50 to-slate-50",
            lightBg: "bg-cyan-50",
            cardBg: "bg-cyan-50/40",
            textColor: "text-cyan-600",
            borderColor: "border-cyan-100/50"
        },
        {
            title: "Convenios Exclusivos",
            desc: "Accede a un directorio de ofertas, descuentos y beneficios cruzados diseñados especialmente para los miembros de nuestra red.",
            icon: <BriefcaseIcon className="w-8 h-8 md:w-10 md:h-10" />,
            color: "from-indigo-50 to-slate-50",
            lightBg: "bg-indigo-50",
            cardBg: "bg-indigo-50/40",
            textColor: "text-indigo-600",
            borderColor: "border-indigo-100/50"
        },
        {
            title: "Directorio de Socios",
            desc: "Explora la red completa de miembros adheridos. Encuentra el perfil de grandes corporaciones, pymes e instituciones de educación.",
            icon: <UserGroupIcon className="w-8 h-8 md:w-10 md:h-10" />,
            color: "from-teal-50 to-slate-50",
            lightBg: "bg-teal-50",
            cardBg: "bg-teal-50/40",
            textColor: "text-teal-600",
            borderColor: "border-teal-100/50"
        },
        {
            title: "Vinculación Comercial",
            desc: "Encuentra oportunidades de servicios formando alianzas estratégicas inmediatas.",
            icon: <BuildingStorefrontIcon className="w-8 h-8 md:w-10 md:h-10" />,
            color: "from-sky-50 to-slate-50",
            lightBg: "bg-sky-50",
            cardBg: "bg-sky-50/40",
            textColor: "text-sky-600",
            borderColor: "border-sky-100/50"
        },
        {
            title: "Material y Documentación",
            desc: "Revisa actas, estatutos, normativas corporativas, material de inducción y contenidos de interés en nuestra plataforma.",
            icon: <FolderOpenIcon className="w-8 h-8 md:w-10 md:h-10" />,
            color: "from-violet-50 to-slate-50",
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
                        {/* Fondo Gradiente Transparente Base */}
                        <div className={`absolute inset-0 bg-white/40 opacity-50 z-0 transition-opacity duration-500 ${isActive ? "opacity-0" : "opacity-100 lg:group-hover:opacity-0"}`}></div>
                        
                        {/* Fondo Color Revelado en Hover */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${mod.color} transition-opacity duration-500 z-0 ${isActive ? "opacity-100" : "opacity-0 lg:group-hover:opacity-100"}`}></div>

                        {/* Estado Base (Desaparece al hacer hover) */}
                        <div className={`absolute inset-0 p-8 md:p-10 flex flex-col justify-end items-start transition-all duration-500 ease-in-out z-10 ${isActive ? "opacity-0 pointer-events-none translate-y-4" : "opacity-100 lg:group-hover:opacity-0 lg:group-hover:translate-y-4 lg:group-hover:pointer-events-none"}`}>
                            <div className={`p-4 ${mod.lightBg} ${mod.textColor} rounded-2xl mb-6 shadow-sm border ${mod.borderColor} transition-transform duration-500 group-hover:scale-110`}>
                                {mod.icon}
                            </div>
                            <h3 className="text-2xl font-black text-slate-800 tracking-tight uppercase drop-shadow-sm">
                                {mod.title}
                            </h3>
                        </div>

                        {/* Contenido Revelado (Aparece en Hover) */}
                        <div className={`relative p-8 md:p-10 flex flex-col h-full flex-grow transition-all duration-500 ease-in-out z-20 ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 lg:group-hover:opacity-100 lg:group-hover:translate-y-0"}`}>
                            <div className="flex flex-col mb-4">
                                <div className={`p-4 ${mod.lightBg} ${mod.textColor} rounded-2xl mb-6 shadow-sm border ${mod.borderColor} w-max`}>
                                    {mod.icon}
                                </div>
                                <h3 className="text-2xl font-black text-slate-800 leading-tight uppercase tracking-tight">
                                    {mod.title}
                                </h3>
                            </div>
                            <p className="text-slate-600/90 leading-relaxed font-medium mt-auto">
                                {mod.desc}
                            </p>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
}
