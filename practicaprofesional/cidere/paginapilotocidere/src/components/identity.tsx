"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    FlagIcon,
    EyeIcon,
    StarIcon
} from "@heroicons/react/24/outline";

const Identity = () => {
    const [activeCardId, setActiveCardId] = useState<string | null>(null);

    const data = [
        {
            id: "mision",
            title: "Nuestra Misión",
            desc: "Velar por los intereses de nuestros asociados y las necesidades de la Región de Coquimbo, impulsando el desarrollo sostenible con impacto económico, social y con sensibilidad medioambiental, a través de la articulación entre el sector privado, público y academia.",
            icon: <FlagIcon className="w-8 h-8 md:w-10 md:h-10 text-white" />,
            image: "/images/slider/Imagen10.webp",
            color: "from-blue-600 to-blue-400"
        },
        {
            id: "vision",
            title: "Nuestra Visión",
            desc: "Ser la corporación que lidera la transformación de la Región de Coquimbo, combinando data, tecnología y alianzas para impulsar iniciativas que mejoren la calidad de vida de las personas de la región y fortalezcan la identidad del territorio.",
            icon: <EyeIcon className="w-8 h-8 md:w-10 md:h-10 text-white" />,
            image: "/images/slider/Imagen14.webp",
            color: "from-amber-500 to-amber-300"
        },
        {
            id: "valores",
            title: "Nuestros Valores",
            desc: "Ingresa aquí los valores corporativos de CIDERE (Ej: Integridad, Innovación, Compromiso Regional, Colaboración y Sostenibilidad).",
            icon: <StarIcon className="w-8 h-8 md:w-10 md:h-10 text-white" />,
            image: "/images/slider/Slide3QuieresSerSocio.webp",
            color: "from-emerald-500 to-emerald-300"
        }
    ];

    const propuesta = {
        id: "valores",
        title: "Propuesta de Valor",
        desc: "CIDERE impulsa la conexión y visibilidad del ecosistema empresarial con la academia y el sector público de la Región de Coquimbo, entregando a sus socios información oportuna, redes y espacios de encuentro que fortalecen su posicionamiento, oportunidades de crecimiento y vínculo con el territorio. Nuestra trayectoria, junto a un equipo multidisciplinario comprometido con la excelencia y una base de socios multisectoriales, nos permiten generar iniciativas de alto impacto que promueven la colaboración, la innovación y la sostenibilidad para contribuir al desarrollo integral y a la mejora en la calidad de vida de quienes habitan nuestra región.",
        icon: <StarIcon className="w-10 h-10 text-primary" />,
        image: "/images/slider/Imagen13.webp"
    };

    return (
        <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto space-y-24 md:space-y-32">

            {/*MISIÓN, VISIÓN Y VALORES */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
                {data.map((item, index) => {
                    const isActive = activeCardId === item.id;
                    return (
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                            key={item.id}
                            id={item.id}
                            onClick={() => setActiveCardId(isActive ? null : item.id)}
                            className={`scroll-mt-32 group relative flex flex-col rounded-[2.5rem] bg-slate-900 border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden transition-all duration-500 cursor-pointer h-[24rem] sm:h-[28rem] lg:h-[32rem] hover:shadow-2xl`}
                        >
                            {/* IMAGEN DE FONDO (Fija, se oscurece al abrir) */}
                            <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className={`w-full h-full object-cover transition-transform duration-1000 ${isActive ? "scale-110" : "scale-100 lg:group-hover:scale-110"
                                        }`}
                                />
                                {/* Overlay oscuro sutil para que el título destaque siempre en la base */}
                                <div className={`absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent transition-opacity duration-700 ${isActive ? "opacity-0" : "opacity-100 lg:group-hover:opacity-0"
                                    }`}></div>
                                {/* Overlay atenuado fuerte (Blur/Oscuro) para poder leer la descripción */}
                                <div className={`absolute inset-0 bg-slate-900/80 backdrop-blur-sm transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-0 lg:group-hover:opacity-100"
                                    }`}></div>
                            </div>

                            {/* Título Flotante Base (Desaparece al abrir la info) */}
                            <div className={`absolute bottom-0 left-0 w-full p-8 md:p-10 flex flex-col justify-end transition-all duration-500 ease-in-out z-10 ${isActive ? "opacity-0 pointer-events-none translate-y-4" : "opacity-100 lg:group-hover:opacity-0 lg:group-hover:translate-y-4 lg:group-hover:pointer-events-none"
                                }`}>
                                <h2 className="text-3xl lg:text-4xl font-black text-white uppercase tracking-tight drop-shadow-md">
                                    {item.title}
                                </h2>
                            </div>

                            {/* Contenido Descriptivo (Aparece centrado sobre la imagen atenuada) */}
                            <div className={`absolute inset-0 w-full h-full flex flex-col justify-center p-8 md:p-12 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] z-20 ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 lg:group-hover:opacity-100 lg:group-hover:translate-y-0"
                                }`}>
                                <h2 className="text-3xl lg:text-4xl font-black text-white mb-6 uppercase tracking-tight shrink-0 drop-shadow-md">
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

            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                id={propuesta.id}
                className="scroll-mt-32 relative rounded-[2.5rem] overflow-hidden group shadow-2xl shadow-slate-300/60"
            >

                <div className="absolute inset-0">
                    <img
                        src={propuesta.image}
                        alt={propuesta.title}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gray-900/80 md:bg-gray-900/60 backdrop-blur-[2px]"></div>
                </div>

                <div className="relative z-10 p-8 md:p-16 lg:p-24 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

                    <div className="w-full lg:w-1/3 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
                        {/* Icono Removido */}
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-tight">
                            Propuesta <br className="hidden lg:block" /> de Valor
                        </h2>
                        <div className="mt-8 w-24 h-2 bg-gradient-to-r from-secondary to-transparent rounded-full opacity-80"></div>
                    </div>

                    <div className="w-full lg:w-2/3 bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
                        <p className="text-white text-lg md:text-xl leading-relaxed font-medium drop-shadow-sm text-justify">
                            {propuesta.desc}
                        </p>
                    </div>

                </div>
            </motion.div>

        </section>
    );
};

export default Identity;