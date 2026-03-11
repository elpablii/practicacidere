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
            desc: "",
            valoresList: [
                { nombre: "Igualdad", descripcion: "Promovemos la equidad y la inclusión en todas nuestras acciones, asegurando que las diferencias de género, cultura, edad o condición socioeconómica sean respetadas y valoradas como parte de nuestra riqueza institucional." },
                { nombre: "Respeto", descripcion: "Fomentamos relaciones basadas en la dignidad, la empatía y la consideración hacia cada persona, reconociendo el aporte individual y colectivo en la construcción de un ambiente sano y colaborativo." },
                { nombre: "Transparencia", descripcion: "Actuamos con claridad y honestidad en cada proceso y decisión, generando confianza entre nuestros socios, colaboradores y la comunidad, y garantizando la rendición de cuentas como principio fundamental." },
                { nombre: "Trabajo en equipo", descripcion: "Creemos en la colaboración como motor del desarrollo. Impulsamos la cooperación entre nuestros integrantes y aliados estratégicos para alcanzar objetivos comunes y generar impacto positivo en la región." },
                { nombre: "Creatividad e innovación", descripcion: "Valoramos las ideas nuevas y el pensamiento crítico como herramientas para encontrar soluciones efectivas. Promovemos la innovación como un medio para mejorar continuamente y responder de manera responsable a los desafíos del entorno." }
            ],
            icon: <StarIcon className="w-8 h-8 md:w-10 md:h-10 text-white" />,
            image: "/images/slider/Slide3QuieresSerSocio.webp",
            color: "from-emerald-500 to-emerald-300"
        }
    ];

    const propuesta = {
        id: "propuesta",
        title: "Propuesta de Valor",
        desc: "CIDERE impulsa la conexión y visibilidad del ecosistema empresarial con la academia y el sector público de la Región de Coquimbo, entregando a sus socios información oportuna, redes y espacios de encuentro que fortalecen su posicionamiento, oportunidades de crecimiento y vínculo con el territorio. Nuestra trayectoria, junto a un equipo multidisciplinario comprometido con la excelencia y una base de socios multisectoriales, nos permiten generar iniciativas de alto impacto que promueven la colaboración, la innovación y la sostenibilidad para contribuir al desarrollo integral y a la mejora en la calidad de vida de quienes habitan nuestra región.",
        icon: <StarIcon className="w-10 h-10 text-primary" />,
        image: "/images/slider/Imagen13.webp"
    };

    return (
        <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto space-y-24 md:space-y-32">

            {/*MISIÓN y VISIÓN */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                {data.slice(0, 2).map((item, index) => {
                    const isActive = activeCardId === item.id;
                    return (
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                            key={item.id}
                            id={item.id}
                            role="button"
                            tabIndex={0}
                            aria-expanded={isActive}
                            onClick={() => setActiveCardId(isActive ? null : item.id)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    setActiveCardId(isActive ? null : item.id);
                                }
                            }}
                            className={`scroll-mt-32 group relative flex flex-col rounded-[2.5rem] bg-slate-900 border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden transition-all duration-500 cursor-pointer h-[28rem] sm:h-[32rem] hover:shadow-2xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary focus-visible:ring-offset-2`}
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
                            <div className={`absolute bottom-0 left-0 w-full p-8 md:p-10 flex flex-col justify-end transition-all duration-500 ease-in-out z-10 ${isActive ? "opacity-0 invisible pointer-events-none translate-y-4" : "opacity-100 visible lg:group-hover:opacity-0 lg:group-hover:invisible lg:group-hover:translate-y-4 lg:group-hover:pointer-events-none"
                                }`}>
                                <h2 className="text-3xl lg:text-4xl font-black text-white uppercase tracking-tight drop-shadow-md">
                                    {item.title}
                                </h2>
                            </div>

                            {/* Contenido Descriptivo (Aparece centrado sobre la imagen atenuada) */}
                            <div className={`absolute inset-0 w-full h-full flex flex-col justify-center p-8 md:p-12 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] z-20 ${isActive ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-8 lg:group-hover:opacity-100 lg:group-hover:visible lg:group-hover:translate-y-0"
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

            {/* VALORES */}
            <div className="w-full mt-4 md:mt-0">
                {data.slice(2, 3).map((item, index) => {
                    const isActive = activeCardId === item.id;
                    return (
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                            key={item.id}
                            id={item.id}
                            role="button"
                            tabIndex={0}
                            aria-expanded={isActive}
                            onClick={() => setActiveCardId(isActive ? null : item.id)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    setActiveCardId(isActive ? null : item.id);
                                }
                            }}
                            className={`scroll-mt-32 w-full group relative flex flex-col rounded-[2.5rem] bg-slate-900 border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden transition-all duration-500 cursor-pointer h-[32rem] sm:h-[36rem] lg:h-[36rem] xl:h-[28rem] hover:shadow-2xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary focus-visible:ring-offset-2`}
                        >
                            {/* IMAGEN DE FONDO (Fija, se oscurece al abrir) */}
                            <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className={`w-full h-full object-cover transition-transform duration-1000 ${isActive ? "scale-110" : "scale-100 lg:group-hover:scale-110"
                                        }`}
                                />
                                <div className={`absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent transition-opacity duration-700 ${isActive ? "opacity-0" : "opacity-100 lg:group-hover:opacity-0"
                                    }`}></div>
                                <div className={`absolute inset-0 bg-slate-900/80 backdrop-blur-md transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-0 lg:group-hover:opacity-100"
                                    }`}></div>
                            </div>

                            {/* Título Flotante Base (Desaparece al abrir la info) */}
                            <div className={`absolute bottom-0 left-0 w-full p-8 md:p-10 flex flex-col justify-end transition-all duration-500 ease-in-out z-10 ${isActive ? "opacity-0 invisible pointer-events-none translate-y-4" : "opacity-100 visible lg:group-hover:opacity-0 lg:group-hover:invisible lg:group-hover:translate-y-4 lg:group-hover:pointer-events-none"
                                }`}>
                                <h2 className="text-4xl lg:text-5xl font-black text-white uppercase tracking-tight drop-shadow-md text-center lg:text-left mx-auto max-w-6xl w-full">
                                    {item.title}
                                </h2>
                            </div>

                            {/* Contenido Descriptivo (Aparece centrado sobre la imagen atenuada) */}
                            <div className={`absolute inset-0 w-full h-full flex flex-col p-8 md:p-12 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] z-20 ${isActive ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-8 lg:group-hover:opacity-100 lg:group-hover:visible lg:group-hover:translate-y-0"
                                }`}>
                                <h2 className="text-3xl lg:text-4xl font-black text-white mb-6 lg:mb-8 uppercase tracking-tight shrink-0 drop-shadow-md md:text-center w-full max-w-6xl mx-auto">
                                    {item.title}
                                </h2>
                                <div className="overflow-y-auto pr-2 custom-scrollbar w-full flex-grow flex items-start justify-center pt-2 pb-6">
                                    {item.valoresList && (
                                        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 text-sm text-blue-50 leading-relaxed font-medium drop-shadow-sm w-full max-w-6xl mx-auto h-max">
                                            {item.valoresList.map((val, i) => (
                                                <li key={i} className={`bg-white/5 p-4 md:p-5 rounded-2xl border border-white/5 backdrop-blur-sm ${i === 3 ? "lg:col-start-1" : ""} ${i === 4 ? "lg:col-start-2" : ""}`}>
                                                    <strong className="text-white text-base md:text-lg block mb-2">{val.nombre}</strong>
                                                    <p className="text-blue-100/90 text-justify">{val.descripcion}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
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
                tabIndex={0}
                role="button"
                aria-expanded={activeCardId === propuesta.id}
                onClick={() => setActiveCardId(activeCardId === propuesta.id ? null : propuesta.id)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setActiveCardId(activeCardId === propuesta.id ? null : propuesta.id);
                    }
                }}
                className="scroll-mt-32 relative rounded-[2.5rem] overflow-hidden group shadow-2xl shadow-slate-300/60 cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary focus-visible:ring-offset-2"
            >

                <div className="absolute inset-0">
                    <img
                        src={propuesta.image}
                        alt={propuesta.title}
                        className={`w-full h-full object-cover transition-transform duration-1000 lg:group-hover:scale-105 lg:group-focus:scale-105 ${activeCardId === propuesta.id ? 'scale-105' : 'scale-100'}`}
                    />
                    <div className="absolute inset-0 bg-gray-900/80 md:bg-gray-900/60 backdrop-blur-[2px]"></div>
                </div>

                <div className="relative z-10 p-8 md:p-16 lg:p-24 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

                    <div className="w-full lg:w-1/3 flex flex-col justify-center items-center lg:items-start text-center lg:text-left focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white rounded-xl">
                        {/* Icono Removido */}
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-tight">
                            Propuesta <br className="hidden lg:block" /> de Valor
                        </h2>
                        <div className="mt-8 w-24 h-2 bg-gradient-to-r from-secondary to-transparent rounded-full opacity-80"></div>
                    </div>

                    <div className="w-full lg:w-2/3 bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white lg:group-hover:bg-white/20 transition-colors duration-700" tabIndex={0}>
                        <p className={`text-white text-lg md:text-xl leading-relaxed font-medium drop-shadow-sm text-justify transition-all duration-700 lg:group-hover:blur-none lg:group-hover:opacity-100 lg:group-focus:blur-none lg:group-focus:opacity-100 ${activeCardId === propuesta.id ? 'blur-none opacity-100' : 'blur-md opacity-40'}`}>
                            {propuesta.desc}
                        </p>
                    </div>

                </div>
            </motion.div>

        </section>
    );
};

export default Identity;