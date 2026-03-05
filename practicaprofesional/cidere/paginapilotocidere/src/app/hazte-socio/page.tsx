import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { PageHeaderAnimator } from "@/components/PageHeaderAnimator";
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
            title: "Fuerza Asociativa Regional",
            desc: "Intégrese a una red consolidada de 97 empresas que participan en la productividad de Coquimbo.",
            icon: <ShieldCheckIcon className="w-8 h-8" />,
            image: "/images/slider/Imagen17.webp"
        },
        {
            title: "Plataforma RDS",
            desc: "Acceso exclusivo a la Red de Socios para vinculación empresarial y prospección de datos estratégicos.",
            icon: <GlobeAltIcon className="w-8 h-8" />,
            image: "/assets/logos/RDS - LOGO VERTICAL-03.png"
        },
        {
            title: "Vinculación Estratégica",
            desc: "Participación activa en mesas de trabajo multisectoriales y potentes alianzas público-privadas.",
            icon: <UserGroupIcon className="w-8 h-8" />,
            image: "/images/slider/Imagen19.webp"
        },
        {
            title: "Liderazgo y Sostenibilidad",
            desc: "Súmese al desafío de liderar el progreso económico, social y ambiental de la Región de Coquimbo.",
            icon: <UserGroupIcon className="w-8 h-8" />,
            image: "/images/slider/Imagen18.webp"
        }
    ];

    return (
        <div className="bg-white min-h-screen">

            <PageHeaderAnimator id="hazte-socio" bgImage="/images/slider/Imagen16.webp" className="bg-primary pt-40 pb-28 px-6 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-secondary via-transparent to-transparent z-10"></div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <h1 className="text-white text-4xl md:text-7xl font-black mb-6 uppercase tracking-tighter">
                        Hazte <span className="text-blue-500">Socio</span>
                    </h1>
                    <p className="text-blue-100/70 text-lg md:text-xl font-medium max-w-3xl mx-auto mb-10 leading-relaxed">
                        Sé parte de esta red de empresas e instituciones que buscan aportar al desarrollo de la región de Coquimbo.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="https://rdscidere.cl" target="_blank" className="bg-white hover:bg-gray-100 text-primary font-bold py-4 px-10 rounded-xl shadow-lg transition-all hover:-translate-y-1">
                            Postula aquí
                        </Link>
                    </div>
                </div>
            </PageHeaderAnimator>

            {/* Pilares de Valor */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {pilares.map((pilar, i) => (
                        <div key={i} className="group flex flex-col bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2">
                            {/* Fotografía Superior o Fallback si aún no se sube */}
                            <div className="relative h-64 w-full overflow-hidden bg-gradient-to-br from-primary/90 to-secondary flex items-center justify-center">
                                {pilar.image && (
                                    <>
                                        <img
                                            src={pilar.image}
                                            alt={pilar.title}
                                            className={`w-full h-full transition-transform duration-700 group-hover:scale-110 ${pilar.title.includes('RDS') ? 'object-contain p-8 bg-white' : 'object-cover'} text-transparent`}
                                        />
                                        {!pilar.title.includes('RDS') && (
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-0 pointer-events-none"></div>
                                        )}
                                    </>
                                )}

                                {/* Ícono Flotante superpuesto */}
                                <div className="absolute bottom-5 left-6 z-10 text-white bg-primary/95 p-3 rounded-2xl backdrop-blur-md shadow-lg border border-white/20 group-hover:bg-secondary transition-colors duration-300">
                                    {pilar.icon}
                                </div>
                            </div>

                            {/* Cuerpo de Texto Inferior */}
                            <div className="p-8 flex-1 flex flex-col justify-center">
                                <h3 className="text-2xl font-extrabold text-primary mb-3">
                                    {pilar.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed font-medium">
                                    {pilar.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default HazteSocio;