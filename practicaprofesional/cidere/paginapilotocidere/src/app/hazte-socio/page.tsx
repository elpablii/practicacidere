import React from "react";
import { Metadata } from "next";
import { CheckCircleIcon, RocketLaunchIcon, UserGroupIcon, ChartBarIcon } from "@heroicons/react/24/outline";

export const metadata: Metadata = {
    title: "Hazte Socio - CIDERE Coquimbo",
    description: "Únete a la corporación industrial más importante de la Región de Coquimbo.",
};

const HazteSocioPage = () => {
    const beneficios = [
        {
            title: "Networking Multisectorial",
            desc: "Conexión directa con más de 90 empresas líderes de minería, agricultura, servicios y más.",
            icon: <UserGroupIcon className="w-8 h-8 text-secondary" />,
        },
        {
            title: "Acceso a la Plataforma RDS",
            desc: "Portal exclusivo para socios donde se gestiona la colaboración, datos regionales y oportunidades interáreas.",
            icon: <RocketLaunchIcon className="w-8 h-8 text-secondary" />,
        },
        {
            title: "Incidencia Regional",
            desc: "Participación en la toma de decisiones estratégicas para el desarrollo económico y social de Coquimbo.",
            icon: <ChartBarIcon className="w-8 h-8 text-secondary" />,
        },
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section - Invitación Visual */}
            <section className="relative py-24 bg-primary overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
                            Hazte Socio <br />
                        </h1>
                        <p className="text-blue-100 text-xl max-w-3xl mx-auto mb-10 opacity-90">
                            Sé parte de la red empresarial con más trayectoria de la Región de Coquimbo.
                            Transformamos la colaboración en desarrollo real.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <a
                                href="https://rdscidere.cl"
                                target="_blank"
                                className="bg-secondary hover:bg-emerald-500 text-white font-bold py-4 px-10 rounded-2xl transition-all shadow-xl hover:-translate-y-1 text-center"
                            >
                                Registrarse en RDS
                            </a>
                        </div>
                    </div>
                </div>
                {/* Decoración de fondo basada en el branding */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
            </section>

            {/* Bloque de Valor: Por qué ser socio */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-primary mb-4">El Valor de ser parte de CIDERE</h2>
                        <div className="h-1.5 w-24 bg-secondary mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {beneficios.map((item, i) => (
                            <div key={i} className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:border-secondary/30 transition-all group">
                                <div className="mb-6 bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-4">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sección RDS (Basada en el informe Capstone) */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-xl flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1">
                            <span className="bg-blue-100 text-primary text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-6 inline-block">
                                Innovación Exclusiva
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Plataforma RDS: <br />Tu conexión con la red.</h2>
                            <p className="text-gray-600 text-lg mb-8">
                                Basada en nuestro proyecto de transformación integral, la Red de Socios (RDS)
                                es el centro neurálgico donde las áreas de vinculación empresarial y articulación público-privada convergen para darte inmediatez.
                            </p>
                            <ul className="space-y-4 mb-10">
                                <li className="flex items-center gap-3 text-gray-700">
                                    <CheckCircleIcon className="w-6 h-6 text-secondary" />
                                    <span>Georreferenciación de socios estratégicos.</span>
                                </li>
                                <li className="flex items-center gap-3 text-gray-700">
                                    <CheckCircleIcon className="w-6 h-6 text-secondary" />
                                    <span>Acceso a estadísticas y datos regionales.</span>
                                </li>
                                <li className="flex items-center gap-3 text-gray-700">
                                    <CheckCircleIcon className="w-6 h-6 text-secondary" />
                                    <span>Gestión de convenios y beneficios exclusivos.</span>
                                </li>
                            </ul>
                        </div>
                        <div className="flex-1 w-full max-w-md aspect-square bg-gray-200 rounded-[2rem] overflow-hidden shadow-inner relative">
                            {/* Aquí podrías poner una captura de la plataforma RDS */}
                            <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium italic p-10 text-center">
                                [Captura de Interfaz RDS]
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HazteSocioPage;