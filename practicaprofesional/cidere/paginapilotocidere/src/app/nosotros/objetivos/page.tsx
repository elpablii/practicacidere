import React from "react";
import { Metadata } from "next";
import {
    CurrencyDollarIcon,
    UserGroupIcon,
    GlobeAmericasIcon,
    HandRaisedIcon,
    MegaphoneIcon,
    PuzzlePieceIcon
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
    title: "Nuestros Ejes - CIDERE",
    description: "Objetivos y ejes estratégicos de Cidere para el desarrollo regional.",
};

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
        image: "/images/slider/Imagen5.webp"
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
        image: "/images/slider/Imagen6.webp"
    },
    {
        titulo: "Eje Relacional",
        desc: "Promover redes de colaboración entre los socios de CIDERE y su interacción estratégica con autoridades, academia y gremios regionales.",
        items: ["Participaciones en mesas de trabajo y comisiones", "Vinculación con autoridades", "Plataforma RDS"],
        icon: <HandRaisedIcon className="w-10 h-10" />,
        color: "text-violet-500",
        border: "hover:border-violet-500/30",
        bgIcon: "bg-violet-50",
        bullet: "bg-violet-500",
        image: "/images/slider/Imagen7.webp"
    },
    {
        titulo: "Eje Comunicacional",
        desc: "Lineamientos estratégicos que orientan la comunicación institucional de CIDERE para visibilizar su aporte al desarrollo regional.",
        items: ["Páginas web CIDERE y RDS", "Posicionamiento en Redes", "Artículos en prensa"],
        icon: <MegaphoneIcon className="w-10 h-10" />,
        color: "text-cyan-500",
        border: "hover:border-cyan-500/30",
        bgIcon: "bg-cyan-50",
        bullet: "bg-cyan-500",
        image: "/images/slider/"
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
    return (
        <main className="min-h-screen bg-slate-50 overflow-x-hidden">
            {/* Header Institucional */}
            <section className="bg-primary pt-40 pb-28 px-6 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-secondary via-transparent to-transparent"></div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <h1 className="text-white text-4xl md:text-7xl font-black mb-6 italic uppercase tracking-tighter">
                        Ejes <span className="text-secondary">Estratégicos</span>
                    </h1>
                    <p className="text-blue-100/70 text-lg md:text-xl font-medium max-w-2xl mx-auto">
                        Nuestra ruta para liderar el desarrollo sostenible en la Región de Coquimbo.
                    </p>
                </div>
            </section>

            {/* Layout Alternado tipo "Feature" para que predominen las fotos */}
            <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto space-y-32">
                {ejes.map((eje, index) => (
                    <div key={index} className={`flex flex-col gap-12 items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                        {/* IMAGEN (50%) */}
                        <div className="w-full lg:w-1/2">
                            <div className="relative group overflow-hidden rounded-[2.5rem] shadow-2xl shadow-slate-300/50 aspect-[4/3]">
                                <img
                                    src={eje.image}
                                    alt={eje.titulo}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                {/* Gradiente Oscuro Superpuesto para el título inferior */}
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>

                            </div>
                        </div>

                        {/* CONTENIDO (50%) */}
                        <div className="w-full lg:w-1/2 lg:px-8">
                            <div className={`mb-8 w-20 h-20 rounded-2xl flex items-center justify-center ${eje.bgIcon} ${eje.color} shadow-sm group-hover:-translate-y-2 transition-transform duration-500`}>
                                {eje.icon}
                            </div>

                            <h4 className="text-2xl font-bold text-slate-800 mb-6 uppercase tracking-tight">{eje.titulo}</h4>
                            <p className="text-slate-600 text-lg mb-10 leading-relaxed font-medium">
                                {eje.desc}
                            </p>

                            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/40">
                                <h5 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-6">Iniciativas Destacadas</h5>
                                <ul className="space-y-5">
                                    {eje.items.map((item, i) => (
                                        <li key={i} className="flex items-start text-slate-700 font-semibold md:text-lg">
                                            <span className={`w-3.5 h-3.5 rounded-full mt-1.5 mr-4 flex-shrink-0 ${eje.bullet} shadow-md`}></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </main>
    );
};

export default ObjetivosPage;