import React from "react";
import { Metadata } from "next";
import {
    CurrencyDollarIcon,
    UserGroupIcon,
    GlobeAmericasIcon,
    HandRaisedIcon,
    MegaphoneIcon
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
    title: "Objetivos - CIDERE",
    description: "Objetivos y ejes estratégicos de Cidere para el desarrollo regional.",
};

const ejes = [
    {
        titulo: "Eje Económico",
        desc: "Incentivar la inversión y el empleo por medio de la Articulación Público-Privada.",
        items: ["Espacio Industrial Minero", "Feria Laboral: Conecta tu Futuro"],
        icon: <CurrencyDollarIcon className="w-10 h-10" />,
    },
    {
        titulo: "Eje Social",
        desc: "Contrbuir al desarrollo de iniciativas destinadas a mejorar la calidad de vida y el desarrollo social de la Región de Coquimbo.",
        items: ["Alumnos en práctica y tesistas", "Mesa Mujer"],
        icon: <UserGroupIcon className="w-10 h-10" />,
    },
    {
        titulo: "Eje Ambiental",
        desc: "Fomentar el desarrollo de iniciativas que se orienten al equilibrio entre el desarrollo económico y el cuidado del medio ambiente.",
        items: ["Estudio de Adaptación al Cambio Climático", "Seminario Hidrógeno Verde", "Programa CORFO: Empresas Sostenibles"],
        icon: <GlobeAmericasIcon className="w-10 h-10" />,
    },
    {
        titulo: "Eje Relacional",
        desc: "Promover redes de colaboración entre los socios de CIDERE y su interacción estratégica con autoridades, academia y otros sectores regionales.",
        items: ["Participaciones en mesas de trabajo y comisiones", "Vinculación y articulación con autoridades regionales y nacionales", "Plataforma Red de Socios de Cidere (RDS)"],
        icon: <HandRaisedIcon className="w-10 h-10" />,
    },
    {
        titulo: "Eje Comunicacional",
        desc: "Lineamientos estratégicos que orientan la comunicación institucional de CIDERE para visibilizar su aporte al desarrollo regional.",
        items: ["Páginas web CIDERE y RDS", "Posicionamiento en Redes Sociales", "Artículos en prensa escrita y digital"],
        icon: <MegaphoneIcon className="w-10 h-10" />,
    },
];

const ObjetivosPage = () => {
    return (
        <main className="min-h-screen bg-white">
            {/* Header Institucional */}
            <section className="bg-primary pt-32 pb-20 px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-white text-4xl md:text-6xl font-black mb-6">
                        Objetivos
                    </h1>
                    <p className="text-blue-100 text-lg opacity-80 leading-relaxed">
                        Nuestros objetivos definen la ruta para liderar el desarrollo económico,
                        social y medioambiental de la Región de Coquimbo.
                    </p>
                </div>
            </section>

            {/* Grid de Contenido */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {ejes.map((eje, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 hover:bg-white hover:shadow-2xl transition-all duration-500 group"
                        >
                            <div className="text-secondary mb-6 group-hover:scale-110 transition-transform duration-300">
                                {eje.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-primary mb-4">{eje.titulo}</h3>
                            <p className="text-gray-500 text-sm mb-8 leading-relaxed italic">{eje.desc}</p>
                            <ul className="space-y-3">
                                {eje.items.map((item, i) => (
                                    <li key={i} className="flex items-start text-gray-700 font-medium text-sm">
                                        <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default ObjetivosPage;