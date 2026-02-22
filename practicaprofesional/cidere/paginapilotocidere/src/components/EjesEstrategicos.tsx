import React from "react";
import {
    CurrencyDollarIcon,
    UserGroupIcon,
    GlobeAmericasIcon,
    HandRaisedIcon,
    MegaphoneIcon
} from "@heroicons/react/24/outline";

const ejes = [
    {
        titulo: "Eje Económico",
        descripcion: "Fomentamos la inversión y el crecimiento industrial regional.",
        items: ["Espacio industrial minero", "Ruedas de negocios", "Encuentro de proveedores"],
        icon: <CurrencyDollarIcon className="w-10 h-10 text-secondary" />,
    },
    {
        titulo: "Eje Social",
        descripcion: "Comprometidos con la inclusión y el capital humano de Coquimbo.",
        items: ["Mesa mujer", "Seminario de inclusión", "Alumnos en práctica y tesistas"],
        icon: <UserGroupIcon className="w-10 h-10 text-secondary" />,
    },
    {
        titulo: "Eje Medioambiental",
        descripcion: "Lideramos la adaptación al cambio climático y la sostenibilidad.",
        items: ["Estudio de cambio climático", "Mesas de trabajo sustentable", "Hitos 50 años"],
        icon: <GlobeAmericasIcon className="w-10 h-10 text-secondary" />,
    },
    {
        titulo: "Eje Relacional",
        descripcion: "Fortalecemos los vínculos entre el sector público, privado y academia.",
        items: ["Industria del ocio y cultura", "Diplomados", "Planificación edificio CIDERE"],
        icon: <HandRaisedIcon className="w-10 h-10 text-secondary" />,
    },
    {
        titulo: "Eje Comunicacional",
        descripcion: "Visibilizamos el aporte regional y posicionamos a nuestros socios.",
        items: ["Podcast CIDERE", "Presencia en prensa", "Posicionamiento en redes"],
        icon: <MegaphoneIcon className="w-10 h-10 text-secondary" />,
    },
];

const EjesEstrategicos = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-primary text-3xl md:text-5xl font-black mb-4 italic">Ejes Estratégicos 2026</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                        Nuestros pilares de acción para liderar el desarrollo sostenible en la Región de Coquimbo.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {ejes.map((eje, index) => (
                        <div
                            key={index}
                            className="p-8 rounded-[2rem] bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-2xl transition-all duration-500 group"
                        >
                            <div className="mb-6 bg-white w-20 h-20 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                                {eje.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-primary mb-4">{eje.titulo}</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                {eje.descripcion}
                            </p>
                            <ul className="space-y-2">
                                {eje.items.map((item, i) => (
                                    <li key={i} className="flex items-center text-sm text-gray-500">
                                        <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EjesEstrategicos;