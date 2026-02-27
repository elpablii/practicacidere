import React from "react";
import MemberCard from "@/components/MemberCard";
import { PageHeaderAnimator } from "@/components/PageHeaderAnimator";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Directorio - CIDERE",
    description: "Conoce a los líderes que componen el directorio de CIDERE Región de Coquimbo.",
};

const DirectorioPage = () => {
    const directorioData = [
        {
            name: "Francisco Puga Medina",
            role: "Presidente",
            company: "Grupo El Día",
            image: "/images/directorio/presidente-franciscopuga.webp",
        },
        {
            name: "Luis Carmona Amenábar",
            role: "Vicepresidente",
            company: "West Rent a Car",
            image: "/images/directorio/vicepresidente-luiscarmona.webp",
        },
        {
            name: "Gastón Yver Hudson",
            role: "Secretario",
            company: "Phillips, Yver y San Francisco Ltda.",
            image: "/images/directorio/secretario-gastonyver.webp",
        },
        {
            name: "Yerko Rendic Vladislav",
            role: "Tesorero",
            company: "Rendic Hermanos",
            image: "/images/directorio/tesorero-yerkorendic.webp",
        },
        {
            name: "Daniel Más Valdés",
            role: "Director",
            company: "Concreces Leasing S.A.",
            image: "/images/directorio/director-danielmasvaldes.webp",
        },
        {
            name: "Jorge Contador Araya",
            role: "Director",
            company: "Maquinarias Olmué Ltda.",
            image: "/images/directorio/director-jorgecontador.webp",
        },
        {
            name: "Franco Dalbosco",
            role: "Director",
            company: "Dalbosco Hermanos y Cia Ltda.",
            image: "/images/directorio/director-francodalbosco.webp",
        },
    ];

    return (
        <div className="bg-transparent min-h-screen">
            <PageHeaderAnimator id="directorio" bgImage="/images/slider/Imagen7.webp" className="bg-primary pt-32 pb-16 px-4">
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <h1 className="text-white text-3xl md:text-5xl font-extrabold mb-4">
                        Nuestro Directorio
                    </h1>
                    <p className="text-blue-100 text-lg opacity-80 max-w-2xl mx-auto">
                        Conoce a la mesa directiva de CIDERE Coquimbo.
                    </p>
                </div>
            </PageHeaderAnimator>


            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-wrap justify-center gap-8">
                        {directorioData.map((persona, index) => (
                            <div
                                key={index}
                                className="w-full sm:w-[calc(50%-2rem)] md:w-[calc(33.33%-2rem)] lg:w-[calc(25%-2rem)] max-w-[300px]"
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

export default DirectorioPage;