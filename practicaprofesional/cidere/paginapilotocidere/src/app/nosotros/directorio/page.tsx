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
            imageClass: "scale-[1.0] translate-y-0",
        },
        {
            name: "Luis Carmona Amenábar",
            role: "Vicepresidente",
            company: "West Rent a Car",
            image: "/images/directorio/vicepresidente-luiscarmona.webp",
            imageClass: "scale-[1.2] translate-y-0",
        },
        {
            name: "Gastón Yver Hudson",
            role: "Secretario",
            company: "Phillips, Yver y Cía. Abogados",
            image: "/images/directorio/secretario-gastonyver.webp",
        },
        {
            name: "Yerko Rendic Vladislav",
            role: "Tesorero",
            company: "Rendic Hermanos",
            image: "/images/directorio/tesorero-yerkorendic.webp",
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
            imageClass: "scale-[1.0] translate-y-0",
        },
        {
            name: "Fernando Sánchez",
            role: "Director",
            company: "Industrias Celta Ltda.",
            image: "/images/directorio/director-fernandosanchez.webp",
            imageClass: "scale-[1.05] translate-y-0",
        },
    ];

    return (
        <div className="bg-transparent min-h-screen">
            <PageHeaderAnimator id="directorio" bgImage="/images/fotos-banners-y-tarjetas/foto-banner-directorio-1.webp" imagePosition="object-[center_30%]" className="bg-primary pt-40 pb-28 px-6 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-secondary via-transparent to-transparent z-10"></div>
                <div className="max-w-5xl mx-auto relative z-10">
                    <h1 className="text-white text-4xl md:text-7xl font-black mb-6 uppercase tracking-tighter">
                        Nuestro <span className="text-blue-500">Directorio</span>
                    </h1>
                    <p className="text-blue-100/70 text-lg md:text-xl font-medium max-w-3xl mx-auto">
                        Conoce a los líderes que conforman la mesa directiva de CIDERE, quienes se han comprometido a contribuir activamente al buen desempeño de la corporación.
                    </p>
                </div>
                {/* Estilo local para forzar a Imagen7 a no cortar cabezas (usando la clase child targeter o inyectando estilos) */}
                <style dangerouslySetInnerHTML={{
                    __html: `
                    #directorio img { object-position: center 30% !important; }
                `}} />
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