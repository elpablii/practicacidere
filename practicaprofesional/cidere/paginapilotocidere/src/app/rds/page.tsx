import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { PageHeaderAnimator } from "@/components/PageHeaderAnimator";
import { MotionSection } from "@/components/MotionSection";
import RDSModules from "./RDSModules";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export const metadata: Metadata = {
    title: "Plataforma RDS - CIDERE",
    description: "Plataforma estructurada para vincular a nuestros socios e impulsar la competitividad comercial en la región de Coquimbo.",
};

const RDSPage = () => {
    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-50 via-[#f8fafc] to-blue-50/50 overflow-x-hidden">
            {/* Header Animado */}
            <PageHeaderAnimator id="rds-header" bgImage="/images/slider/Imagen1.webp" imagePosition="object-center" className="bg-primary pt-32 pb-20 px-6 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-secondary via-transparent to-transparent z-10"></div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <h1 className="text-white text-4xl md:text-7xl font-black mb-6 uppercase tracking-tighter">
                        Plataforma <span className="text-blue-500">RDS</span>
                    </h1>
                    <p className="text-blue-100/70 text-lg md:text-xl font-medium max-w-3xl mx-auto mb-10 leading-relaxed">
                        Punto de encuentro digital para vincular a nuestros socios e impulsar el desarrollo sustentable de la Región de Coquimbo.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="https://rdscidere.cl" target="_blank" className="bg-white hover:bg-gray-100 text-primary font-bold py-4 px-10 rounded-xl shadow-lg transition-all hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary">
                            Ir a RDS
                        </Link>
                    </div>
                </div>
            </PageHeaderAnimator>

            {/* Módulos de la Plataforma */}
            <section className="py-24 px-6 relative max-w-7xl mx-auto">
                {/* Tarjeta de Título con Logo RDS */}
                <div className="flex flex-col md:flex-row items-center justify-between bg-white rounded-[2.5rem] p-10 md:p-16 shadow-2xl shadow-blue-900/5 border border-blue-50 mb-20 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2 pointer-events-none transition-transform duration-700 group-hover:scale-110"></div>

                    <div className="md:w-3/5 md:pr-12 relative z-10 mb-10 md:mb-0 text-center md:text-left focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary rounded-xl" tabIndex={0}>
                        <h2 className="text-3xl md:text-5xl font-black text-primary uppercase tracking-tight mb-6 relative inline-block">
                            ¿Qué es <span className="text-blue-500">RDS?</span>
                        </h2>
                        <p className="text-justify text-gray-500 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto md:mx-0">
                            Red de Socios CIDERE (RDS) es una plataforma digital exclusiva para los socios de CIDERE, creado para conectar, fortalecer y potenciar los lazos dentro de una comunidad comprometida con el desarrollo de la Región de Coquimbo.
                        </p>
                    </div>

                    <div className="md:w-2/5 flex justify-center md:justify-end relative z-10">
                        <div className="bg-white/50 backdrop-blur-sm p-6 rounded-3xl shadow-sm border border-white/20">
                            <img
                                src="/assets/logos/RDS-LOGO HORIZONTAL-01.png"
                                alt="Plataforma Red de Socios"
                                className="max-w-full h-auto w-64 md:w-80 object-contain drop-shadow-md transition-transform duration-500 hover:scale-105"
                            />
                        </div>
                    </div>
                </div>

                {/* Título Intermedio Animado */}
                <MotionSection>
                    <div className="text-center mb-16 px-4 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary rounded-xl" tabIndex={0}>
                        <h2 className="text-3xl md:text-5xl font-black text-primary uppercase tracking-tight mb-4 drop-shadow-sm">
                            ¿Qué <span className="text-blue-500">encontrarás</span> en la Plataforma RDS?
                        </h2>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto rounded-full mt-6 opacity-70"></div>
                    </div>
                </MotionSection>

                {/* Componente Interactivo de Módulos (Animación Hover similar a Misión/Visión) */}
                <RDSModules />
            </section>

            {/* CTA Final */}
            <section className="py-24 px-6 relative overflow-hidden bg-slate-50">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-primary rounded-[3rem] px-8 py-16 md:p-20 relative overflow-hidden shadow-2xl flex flex-col items-center text-center">
                        {/* Efectos de luz decorativos en el fondo */}
                        <div className="absolute top-0 right-0 w-full h-full opacity-50 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600/40 via-transparent to-transparent"></div>
                        <div className="absolute bottom-0 left-0 w-full h-full opacity-40 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-cyan-500/20 via-transparent to-transparent"></div>

                        {/* Marca de agua decorativa */}
                        <div className="absolute -bottom-20 -right-20 opacity-[0.03] pointer-events-none">
                            <img src="/assets/logos/RDS - LOGO SEPARADO-01.png" alt="watermark" className="w-[500px] h-[500px] object-contain" />
                        </div>

                        <div className="relative z-10 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white rounded-xl" tabIndex={0}>
                            <div className="bg-white p-6 rounded-3xl inline-block mb-10 shadow-lg transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                                <img src="/assets/logos/RDS-LOGO HORIZONTAL-01.png" alt="Logo RDS" className="h-16 md:h-20 w-auto object-contain drop-shadow-sm" />
                            </div>

                            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 uppercase tracking-tight drop-shadow-md">
                                ¿Aún no eres parte?
                            </h2>
                            <p className="text-blue-50 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto font-medium opacity-90">
                                Forma parte de la corporación gremial más importante de la Región de Coquimbo. Obtén exposición, alianzas de alto nivel y postula a la <span className="text-blue-300 font-bold">Red de Socios CIDERE</span>.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Link href="/hazte-socio" className="bg-white hover:bg-gray-100 text-primary font-bold py-4 px-10 rounded-full shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl">
                                    Quiero Ser Socio
                                </Link>
                                <Link href="/contacto" className="bg-transparent border border-white/30 text-white hover:bg-white/10 font-bold py-4 px-10 rounded-full transition-all">
                                    Solicitar Información
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default RDSPage;
