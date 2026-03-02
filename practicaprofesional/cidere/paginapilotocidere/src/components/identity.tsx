"use client";
import React from "react";
import { motion } from "framer-motion";
import {
    FlagIcon,
    EyeIcon,
    StarIcon
} from "@heroicons/react/24/outline";

const Identity = () => {
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

            {/*MISIÓN Y VISIÓN */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
                {data.map((item, index) => (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                        key={item.id}
                        id={item.id}
                        className="scroll-mt-32 group relative flex flex-col rounded-[2.5rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
                    >

                        <div className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden shrink-0">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500"></div>

                            {/* Icono*/}
                            <div className={`absolute -bottom-6 left-8 md:left-10 w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-[1.5rem] bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg transform rotate-3 group-hover:rotate-0 transition-transform duration-500 z-10`}>
                                {item.icon}
                            </div>
                        </div>

                        {/* Contenido del Texto */}
                        <div className="p-8 md:p-12 pt-12 md:pt-14 flex flex-col flex-grow">
                            <h2 className="text-3xl font-black text-slate-800 mb-6 uppercase tracking-tight">{item.title}</h2>
                            <p className="text-slate-600 text-lg leading-relaxed font-medium">
                                {item.desc}
                            </p>
                        </div>
                    </motion.div>
                ))}
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
                        <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-xl transform -rotate-3 group-hover:rotate-0 transition-transform duration-500">
                            {propuesta.icon}
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-tight">
                            Propuesta <br className="hidden lg:block" /> de Valor
                        </h2>
                        <div className="mt-8 w-24 h-2 bg-gradient-to-r from-secondary to-transparent rounded-full opacity-80"></div>
                    </div>

                    <div className="w-full lg:w-2/3 bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
                        <p className="text-white text-lg md:text-xl leading-relaxed font-medium drop-shadow-sm">
                            {propuesta.desc}
                        </p>
                    </div>

                </div>
            </motion.div>

        </section>
    );
};

export default Identity;