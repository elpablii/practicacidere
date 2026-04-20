import React from "react";
import Link from "next/link";
import { PageHeaderAnimator } from "@/components/PageHeaderAnimator";
import Image from "next/image";
import rdsLogo from "@/assets/logos/RDS - LOGO VERTICAL-03.png";
import PartnerCard from "@/components/PartnerCard";
import { socios } from "@/data/socios";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Nuestros socios - CIDERE",
    description: "Explora las empresas que forman parte de la Red de Socios CIDERE.",
};

const SociosPage = () => {
    return (
        <div className="bg-transparent min-h-screen">
            <PageHeaderAnimator id="socios" bgImage="/images/fotos-banners-y-tarjetas/Imagen4.webp" className="bg-gradient-to-br from-primary to-blue-900 pt-36 pb-20 px-6 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <h1 className="text-white text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
                        Nuestros Socios
                    </h1>
                    <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto opacity-80 leading-relaxed">
                        <span className="font-bold text-white">{socios.length}</span> entidades hoy forman parte de la red que apoya el desarrollo de la Región de Coquimbo.
                    </p>
                </div>
            </PageHeaderAnimator>

            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                        {socios.map((socio, index) => (
                            <PartnerCard key={index} {...socio} />
                        ))}
                    </div>

                    {/* BLOQUE HAZTE SOCIO */}
                    <div className="mt-32 bg-white rounded-[3rem] p-8 md:p-16 shadow-xl border border-gray-100 flex flex-col md:flex-row items-center gap-10">
                        <div className="flex-1 text-center md:text-left focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary rounded-xl" tabIndex={0}>
                            <h2 className="text-primary text-3xl md:text-4xl font-black mb-4">¿Tu empresa aún no es parte?</h2>
                            <p className="text-gray-600 text-lg mb-8">
                                Únete a la corporación multisectorial con más trayectoria de la región accediendo a la Red de Socios Cidere para potenciar tus conexiones estratégicas.
                            </p>
                            <Link href="/hazte-socio" className="inline-block bg-primary hover:bg-primary-light text-white font-bold py-4 px-10 rounded-2xl shadow-lg transition-all hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary focus-visible:ring-offset-2">
                                Quiero ser Socio
                            </Link>
                        </div>
                        <div className="flex-1 flex justify-center items-center">
                            <Image
                                src={rdsLogo}
                                alt="Logo RDS"
                                className="w-full max-w-xs md:max-w-sm object-contain drop-shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SociosPage;