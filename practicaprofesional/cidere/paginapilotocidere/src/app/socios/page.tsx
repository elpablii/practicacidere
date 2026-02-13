import React from "react";
import PartnerCard from "@/components/PartnerCard";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Socios Asociados - CIDERE",
    description: "Conoce a las empresas y organizaciones que forman parte de la red de CIDERE Región de Coquimbo.",
};

const SociosPage = () => {
    // Aquí es donde irás completando la lista de socios
    const sociosData = [
        {
            name: "Empresa Ejemplo 1",
            logo: "https://via.placeholder.com/300x150?text=Logo+Socio",
            website: "https://google.com",
        },
        {
            name: "Empresa Ejemplo 2",
            logo: "https://via.placeholder.com/300x150?text=Logo+Socio",
            website: "#",
        },
        {
            name: "Empresa Ejemplo 3",
            logo: "https://via.placeholder.com/300x150?text=Logo+Socio",
            website: "#",
        },
        // Agrega más socios siguiendo este formato
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Header institucional */}
            <section className="bg-primary py-20 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-white text-4xl md:text-6xl font-extrabold mb-6">
                        Nuestros Socios
                    </h1>
                    <p className="text-blue-100 text-lg md:text-xl max-w-3xl mx-auto opacity-90 leading-relaxed">
                        Una red estratégica de empresas comprometidas con el progreso económico,
                        social y tecnológico de la Región de Coquimbo.
                    </p>
                </div>
            </section>

            {/* Grilla de Socios */}
            <section className="py-20 px-6 sm:px-8 lg:px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {sociosData.map((socio, index) => (
                            <PartnerCard key={index} {...socio} />
                        ))}
                    </div>

                    {/* Mensaje de invitación */}
                    <div className="mt-24 p-12 bg-primary rounded-3xl text-center text-white shadow-2xl">
                        <h2 className="text-3xl font-bold mb-4">¿Quieres ser parte de nuestra red?</h2>
                        <p className="text-blue-100 mb-8 max-w-xl mx-auto">
                            Únete a la corporación líder en desarrollo regional y potencia el impacto de tu empresa.
                        </p>
                        <button className="bg-secondary hover:bg-emerald-500 text-white font-bold py-4 px-10 rounded-full transition-all shadow-lg active:scale-95">
                            Solicitar Información
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SociosPage;