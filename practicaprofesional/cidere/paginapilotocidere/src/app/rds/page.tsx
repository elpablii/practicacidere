import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { PageHeaderAnimator } from "@/components/PageHeaderAnimator";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

export const metadata: Metadata = {
    title: "Plataforma RDS - CIDERE",
    description: "Acceso exclusivo a la Red de Socios para vinculación empresarial y prospección de datos estratégicos.",
};

const RDSPage = () => {
    const caracteristicas = [
        {
            title: "Vinculación Empresarial",
            desc: "Conecta directamente con otras empresas de la región.",
            icon: <GlobeAltIcon className="w-8 h-8" />,
            image: "/images/slider/Imagen17.webp"
        },
        {
            title: "Prospección de Datos",
            desc: "Accede a información clave para la toma de decisiones estratégicas.",
            icon: <GlobeAltIcon className="w-8 h-8" />,
            image: "/images/slider/Imagen19.webp"
        }
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* Header Animado */}
            <PageHeaderAnimator id="rds-header" bgImage="/images/slider/Slide1RDS.webp" imagePosition="object-center" className="bg-primary pt-40 pb-28 px-6 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-secondary via-transparent to-transparent z-10"></div>
                <div className="absolute inset-0 bg-black/40 z-10"></div>
                <div className="max-w-4xl mx-auto relative z-20">
                    <h1 className="text-white text-4xl md:text-7xl font-black mb-6 uppercase tracking-tighter drop-shadow-lg">
                        Plataforma <span className="text-blue-400">RDS</span>
                    </h1>
                    <p className="text-blue-50 text-xl font-medium max-w-3xl mx-auto mb-10 leading-relaxed drop-shadow-md">
                        Transforma tu experiencia como Socio CIDERE. Acceso exclusivo a la Red de Socios para vinculación empresarial e innovación continua.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="https://rdscidere.cl" target="_blank" className="bg-white hover:bg-gray-100 text-primary font-bold py-4 px-10 rounded-xl shadow-lg transition-all hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white">
                            Ingresar a RDS
                        </Link>
                    </div>
                </div>
            </PageHeaderAnimator>

            {/* Contenido Próximamente a Personalizar */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-slate-800 uppercase tracking-tight mb-4">¿Por qué usar RDS?</h2>
                    <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto">
                        Una herramienta fundamental diseñada para potenciar el desarrollo de nuestras organizaciones socias.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {caracteristicas.map((item, i) => (
                        <div key={i} className="group flex flex-col bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2">
                            <div className="relative h-64 w-full overflow-hidden bg-gradient-to-br from-primary/90 to-secondary flex items-center justify-center">
                                {item.image && (
                                    <>
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500"></div>
                                    </>
                                )}
                            </div>
                            <div className="p-8 md:p-10 flex-grow flex flex-col items-start bg-gradient-to-b from-white to-slate-50 relative z-10">
                                <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl mb-6 shadow-sm border border-blue-100/50">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-slate-800 mb-4">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed font-medium">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default RDSPage;
