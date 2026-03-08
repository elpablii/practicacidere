"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { PageHeaderAnimator } from "@/components/PageHeaderAnimator";
import {
    UserGroupIcon,
    BriefcaseIcon,
    CurrencyDollarIcon,
    GlobeAltIcon,
    BuildingOfficeIcon,
    AcademicCapIcon
} from "@heroicons/react/24/outline";
import { socios } from "@/data/socios";

const HazteSocio = () => {
    const [activeCardId, setActiveCardId] = useState<string | null>(null);

    const beneficios = [
        {
            title: "Representación Regional",
            desc: "Representación en instancias de relacionamiento con autoridades y participación en Mesas Regionales.",
            icon: <BuildingOfficeIcon className="w-10 h-10" />,
            image: "/images/slider/Imagen19.webp",
            color: "text-blue-500",
            bgIcon: "bg-blue-50"
        },
        {
            title: "Acceso Preferencial",
            desc: "Acceso preferencial a ruedas de negocios, match empresariales, mentorías, seminarios y capacitaciones generados en alianzas público-privadas.",
            icon: <UserGroupIcon className="w-10 h-10" />,
            image: "/images/slider/Imagen21.webp",
            color: "text-amber-500",
            bgIcon: "bg-amber-50"
        },
        {
            title: "Valores Exclusivos",
            desc: "Valores exclusivos para ferias, ruedas de negocios y actividades regionales e interregionales donde CIDERE participa como organizador y co-organizador.",
            icon: <CurrencyDollarIcon className="w-10 h-10" />,
            image: "/images/slider/Imagen22.webp",
            color: "text-emerald-500",
            bgIcon: "bg-emerald-50"
        },
        {
            title: "Plataforma RDS",
            desc: "Acceso a RDS (Red de Socios CIDERE), plataforma web exclusiva para la vinculación y perfilamiento de los socios de CIDERE.",
            icon: <GlobeAltIcon className="w-10 h-10" />,
            image: "/images/slider/Imagen24.webp",
            color: "text-cyan-500",
            bgIcon: "bg-cyan-50",
            isLogo: true // Nueva propiedad para identificar si es logo
        },
        {
            title: "Visibilidad y Difusión",
            desc: "Visibilidad y difusión estratégica de tu empresa en eventos y actividades organizadas o coorganizadas por CIDERE.",
            icon: <BriefcaseIcon className="w-10 h-10" />,
            image: "/images/slider/Imagen23.webp",
            color: "text-violet-500",
            bgIcon: "bg-violet-50"
        },
        {
            title: "Desarrollo de Talento",
            desc: "Impulsa el desarrollo de talento regional a través de prácticas y tesis estudiantiles alineadas con las necesidades reales del territorio.",
            icon: <AcademicCapIcon className="w-10 h-10" />,
            image: "/images/slider/Imagen20.webp",
            color: "text-rose-500",
            bgIcon: "bg-rose-50"
        }
    ];

    return (
        <div className="bg-white min-h-screen">

            <PageHeaderAnimator id="hazte-socio" bgImage="/images/slider/foto-banner-directorio-2.webp" imagePosition="object-center" className="bg-primary pt-40 pb-28 px-6 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-secondary via-transparent to-transparent z-10"></div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <h1 className="text-white text-4xl md:text-7xl font-black mb-6 uppercase tracking-tighter">
                        Hazte <span className="text-blue-500">Socio</span>
                    </h1>
                    <p className="text-blue-100/70 text-lg md:text-xl font-medium max-w-3xl mx-auto mb-10 leading-relaxed">
                        Sea parte de una red consolidada de {socios.length} empresas que participan en el desarrollo de la Región de Coquimbo.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="https://rdscidere.cl" target="_blank" className="bg-white hover:bg-gray-100 text-primary font-bold py-4 px-10 rounded-xl shadow-lg transition-all hover:-translate-y-1">
                            Postula aquí
                        </Link>
                    </div>
                </div>
            </PageHeaderAnimator>

            {/* Beneficios de Ser Socio (Estilo Overlay) */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-slate-800 uppercase tracking-tight mb-4">¿Por qué ser parte de CIDERE?</h2>
                    <p className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto">
                        Al ser parte de esta red de empresas e instituciones que buscan aportar al desarrollo de la región de Coquimbo, tendrás acceso a estos beneficios exclusivos:
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {beneficios.map((item, index) => {
                        const isActive = activeCardId === item.title;
                        return (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                                key={index}
                                onClick={() => setActiveCardId(isActive ? null : item.title)}
                                className={`group relative flex flex-col rounded-[2.5rem] bg-slate-900 border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden transition-all duration-500 cursor-pointer h-[24rem] sm:h-[28rem] hover:shadow-2xl`}
                            >
                                {/* IMAGEN DE FONDO (Fija, se oscurece al abrir) */}
                                <div className={`absolute inset-0 w-full h-full z-0 overflow-hidden ${item.isLogo ? 'bg-slate-100 flex items-center justify-center p-10 md:p-14' : ''}`}>
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className={`w-full h-full transition-transform duration-1000 ${isActive ? "scale-110" : "scale-100 lg:group-hover:scale-110"
                                            } ${item.isLogo ? 'object-contain' : 'object-cover'}`}
                                    />
                                    {/* Overlay base oscuro inferior (Si no es logo) */}
                                    {!item.isLogo && (
                                        <div className={`absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/30 to-transparent transition-opacity duration-700 ${isActive ? "opacity-0" : "opacity-100 lg:group-hover:opacity-0"}`}></div>
                                    )}
                                    {/* Si es logo, dejamos un gradiente más marcado para el texto inferior */}
                                    {item.isLogo && (
                                        <div className={`absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent transition-opacity duration-700 ${isActive ? "opacity-0" : "opacity-100 lg:group-hover:opacity-0"}`}></div>
                                    )}

                                    {/* Overlay Blur Fuerte (Aparece encima en hover/click) */}
                                    <div className={`absolute inset-0 bg-slate-900/85 backdrop-blur-md transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-0 lg:group-hover:opacity-100"}`}></div>
                                </div>

                                {/* Título Base (Visible en modo reposo, desaparece en hover/click) */}
                                <div className={`absolute bottom-0 left-0 w-full p-8 md:p-10 flex flex-col justify-end transition-all duration-500 ease-in-out z-10 ${isActive ? "opacity-0 pointer-events-none translate-y-4" : "opacity-100 lg:group-hover:opacity-0 lg:group-hover:translate-y-4 lg:group-hover:pointer-events-none"}`}>
                                    <h2 className="text-3xl font-black text-white uppercase tracking-tight drop-shadow-md">
                                        {item.title}
                                    </h2>
                                </div>

                                {/* Contenido Descriptivo Overlay (Aparece centrado sobre el blur) */}
                                <div className={`absolute inset-0 w-full h-full flex flex-col justify-center p-8 md:p-12 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] z-20 ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 lg:group-hover:opacity-100 lg:group-hover:translate-y-0"}`}>
                                    <h2 className="text-3xl font-black text-white mb-6 uppercase tracking-tight shrink-0 drop-shadow-md">
                                        {item.title}
                                    </h2>
                                    <div className="overflow-y-auto pr-2 custom-scrollbar">
                                        <p className="text-blue-50 text-base md:text-lg leading-relaxed font-medium text-justify drop-shadow-sm">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* SECCIÓN FINAL: INVITACIÓN A POSTULAR */}
            <section className="py-24 px-6 bg-slate-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 rounded-l-full blur-3xl -z-0 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-1/2 h-full bg-secondary/10 rounded-r-full blur-3xl -z-0 -translate-x-1/2"></div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="bg-primary rounded-[3rem] p-10 md:p-16 lg:p-20 text-center shadow-2xl flex flex-col items-center border border-primary-light/20 relative overflow-hidden"
                    >
                        {/* Patron de fondo sutil */}
                        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat"></div>

                        <div className="relative z-10 flex flex-col items-center">
                            {/* Logo de RDS Blanco */}
                            <img
                                src="/assets/logos/RDS-LOGO HORIZONTAL-01.png"
                                alt="Plataforma RDS"
                                className="h-12 md:h-16 mb-4 object-contain brightness-0 invert opacity-90"
                            />
                            <span className="w-20 h-2 bg-secondary rounded-full mb-8"></span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 uppercase tracking-tighter drop-shadow-md">
                                ¿Aún no eres parte de <span className="text-blue-400">CIDERE</span>?
                            </h2>
                            <p className="text-blue-50 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-12 leading-relaxed opacity-90">
                                Súmate a la principal red empresarial de la Región de Coquimbo. Completa el formulario de postulación a través de nuestra Plataforma RDS.
                            </p>

                            <Link href="https://rdscidere.cl" target="_blank" className="bg-white text-primary hover:bg-slate-100 hover:text-blue-700 font-black text-xl py-5 px-12 md:px-16 rounded-full shadow-xl transition-all hover:scale-105 hover:shadow-2xl">
                                Postula aquí
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default HazteSocio;