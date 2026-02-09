import React from "react";
import MemberCard from "@/components/MemberCard";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Directorio | CIDERE",
    description: "Conoce a los líderes que componen el directorio de CIDERE Región de Coquimbo.",
};

const DirectorioPage = () => {
    const directorioData = [
        {
            name: "Nombre del Director 1",
            role: "Presidente",
            company: "Nombre de su Empresa S.A.",
            image: "", // Ruta a la foto en /public/directorio/foto1.jpg
        },
        {
            name: "Nombre del Director 2",
            role: "Vicepresidente",
            company: "Empresa Constructora Ejemplo",
            image: "",
        },
        {
            name: "Nombre del Director 3",
            role: "Tesorero",
            company: "Servicios Mineros Coquimbo",
            image: "",
        },
        // Añade tantos como necesites...
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* Header Simple */}
            <section className="bg-primary py-16 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-white text-3xl md:text-5xl font-extrabold mb-4">
                        Nuestro Directorio
                    </h1>
                    <p className="text-blue-100 text-lg opacity-80 max-w-2xl mx-auto">
                        Líderes comprometidos con la articulación y el desarrollo de la Región de Coquimbo.
                    </p>
                </div>
            </section>

            {/* Grilla Responsiva */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {directorioData.map((persona, index) => (
                            <MemberCard key={index} {...persona} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DirectorioPage;