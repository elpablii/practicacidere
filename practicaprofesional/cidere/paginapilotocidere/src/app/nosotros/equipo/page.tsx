import React from "react";
import MemberCard from "@/components/MemberCard";
import { PageHeaderAnimator } from "@/components/PageHeaderAnimator";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Equipo CIDERE - CIDERE",
    description: "Conoce al equipo profesional y administrativo que lidera la gestión de CIDERE.",
};

const EquipoPage = () => {

    const equipoData = [
        {
            name: "Ricardo Guerrero",
            role: "Gerente",
            company: "Contacto: gerente@cidere.cl",
            image: "/images/equipo/gerente-ricardo.webp",
        },
        {
            name: "Fernanda Flores",
            role: "Encargada de Vinculación Empresarial",
            company: "Contacto: fernanda@cidere.cl",
            image: "/images/equipo/encargada-vinculacion-empresarial-fernanda.webp",
        },
        {
            name: "Jacqueline Gallardo",
            role: "Encargada de TI y Administración",
            company: "Contacto: jacqueline@cidere.cl",
            image: "/images/equipo/encargada-administracion-y-ti-jacqueline.webp",
        },
        {
            name: "Delfo Muñíz",
            role: "Encargado de Finanzas",
            company: "Contacto: delfo@cidere.cl",
            image: "/images/equipo/encargado-finanzas-delfo.webp",
        },
        {
            name: "Valentina Rojas",
            role: "Coordinadora Articulación Público Privada",
            company: "Contacto: valentina@cidere.cl",
            image: "/images/equipo/coordinadora-articulacion-publico-privada-valentina.webp",
        },
        {
            name: "Yanabel Muñoz",
            role: "Encargada de Comunicaciones",
            company: "Contacto: yanabel@cidere.cl",
            image: "/images/equipo/encargada-comunicaciones-yanabel.webp",
        },

    ];

    return (
        <div className="bg-transparent min-h-screen">
            {/* Header de la Sección */}
            <PageHeaderAnimator id="equipo" bgImage="/images/slider/Imagen5.webp" className="bg-primary pt-32 pb-16 px-4">
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <h1 className="text-white text-3xl md:text-5xl font-extrabold mb-4">
                        Equipo CIDERE
                    </h1>
                </div>
            </PageHeaderAnimator>

            {/* Grilla del Equipo */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-wrap justify-center gap-10">
                        {equipoData.map((persona, index) => (
                            <div
                                key={index}
                                className="w-full sm:w-[calc(50%-2.5rem)] md:w-[calc(33.33%-2.5rem)] lg:w-[calc(25%-2.5rem)] max-w-[300px]"
                            >
                                <MemberCard {...persona} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EquipoPage;