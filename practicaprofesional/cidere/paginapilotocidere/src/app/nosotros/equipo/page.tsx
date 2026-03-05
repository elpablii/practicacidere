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
            role: "Gerente General",
            company: "gerente@cidere.cl",
            image: "/images/equipo/gerente-ricardo.webp",
        },
        {
            name: "Fernanda Flores",
            role: "Gerenta Operacional",
            company: "fernanda@cidere.cl",
            image: "/images/equipo/encargada-vinculacion-empresarial-fernanda.webp",
        },
        {
            name: "Jacqueline Gallardo",
            role: "Encargada de Tecnologías de Información",
            company: "jacqueline@cidere.cl",
            image: "/images/equipo/encargada-administracion-y-ti-jacqueline.webp",
        },
        {
            name: "Delfo Muñíz",
            role: "Encargado de Administración y Finanzas",
            company: "delfo@cidere.cl",
            image: "/images/equipo/encargado-finanzas-delfo.webp",
        },
        {
            name: "Valentina Rojas",
            role: "Encargada de Vinculación Empresarial",
            company: "valentina@cidere.cl",
            image: "/images/equipo/coordinadora-articulacion-publico-privada-valentina.webp",
        },
        {
            name: "Yanabel Muñoz",
            role: "Encargada de Comunicaciones",
            company: "yanabel@cidere.cl",
            image: "/images/equipo/encargada-comunicaciones-yanabel.webp",
        },
    ];

    const gerenciaData = equipoData.slice(0, 2);
    const restoEquipoData = equipoData.slice(2);

    return (
        <div className="bg-transparent min-h-screen">
            {/* Header de la Sección */}
            <PageHeaderAnimator id="equipo" bgImage="/images/slider/equipocidere.webp" className="bg-primary pt-32 pb-16 px-4 relative overflow-hidden">
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <h1 className="text-white text-3xl md:text-5xl font-extrabold mb-4">
                        Equipo
                    </h1>
                </div>
                {/* Estilo local para forzar a equipocidere.webp a no cortar cabezas (enfoca los rostros) */}
                <style dangerouslySetInnerHTML={{
                    __html: `
                    #equipo img { object-position: center 30% !important; }
                `}} />
            </PageHeaderAnimator>

            {/* Grilla del Equipo */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto space-y-16">
                    {/* Fila 1: Gerencia (Ricardo y Fernanda) */}
                    <div className="flex flex-wrap justify-center gap-10">
                        {gerenciaData.map((persona, index) => (
                            <div
                                key={`gerencia-${index}`}
                                className="w-full sm:w-[calc(50%-2.5rem)] md:w-[calc(33.33%-2.5rem)] lg:w-[calc(25%-2.5rem)] max-w-[300px]"
                            >
                                <MemberCard {...persona} />
                            </div>
                        ))}
                    </div>

                    {/* Fila 2: Resto del Equipo (Los 4 restantes) */}
                    <div className="flex flex-wrap justify-center gap-10">
                        {restoEquipoData.map((persona, index) => (
                            <div
                                key={`equipo-${index}`}
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