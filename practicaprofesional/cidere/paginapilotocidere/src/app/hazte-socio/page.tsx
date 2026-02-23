import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import {
    UserGroupIcon,
    LightBulbIcon,
    ShieldCheckIcon,
    GlobeAltIcon
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
    title: "Hazte Socio - CIDERE",
    description: "Únete a la red empresarial multisectorial con más trayectoria de la región.",
};

const HazteSocio = () => {
    const pilares = [
        {
            title: "Trayectoria y Respaldo",
            desc: "Desde 1976 liderando el desarrollo regional con una red sólida de 94 empresas.",
            icon: <ShieldCheckIcon className="w-8 h-8" />
        },
        {
            title: "Plataforma RDS",
            desc: "Acceso exclusivo a la Red de Socios para vinculación empresarial y datos estratégicos.",
            icon: <GlobeAltIcon className="w-8 h-8" />
        },
        {
            title: "Asociatividad",
            desc: "Participación activa en mesas de trabajo multisectoriales y alianzas público-privadas.",
            icon: <UserGroupIcon className="w-8 h-8" />
        }
    ];

    return (
        <div className="bg-white min-h-screen">

            <section className="bg-gradient-to-b from-primary to-[#001529] py-24 px-6 text-center text-white">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                        Hazte Socio <br />
                    </h1>
                    <p className="text-blue-100 text-lg md:text-xl opacity-80 mb-10 leading-relaxed">
                        Únete a CIDERE y acceda a una red de colaboración entre empresas multisectoriales
                        diseñado para potenciar el crecimiento sostenible de la región.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="https://rdscidere.cl" target="_blank" className="bg-white hover:bg-gray-100 text-primary font-bold py-4 px-10 rounded-xl shadow-lg transition-all hover:-translate-y-1">
                            Registrarse en RDS
                        </Link>
                    </div>
                </div>
            </section>

            {/* Pilares de Valor */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {pilares.map((pilar, i) => (
                        <div key={i} className="group p-10 bg-gray-50 rounded-[2.5rem] hover:bg-white hover:shadow-2xl transition-all duration-500 border border-gray-100">
                            <div className="text-primary mb-6 group-hover:scale-110 transition-transform">
                                {pilar.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-primary mb-4">{pilar.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{pilar.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default HazteSocio;