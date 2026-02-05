import React from "react";
import Identity from "@/components/identity";

export default function NosotrosPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Encabezado de la página Nosotros */}
            <section className="bg-primary py-20 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-white text-4xl md:text-6xl font-extrabold mb-6">
                        Nuestra Identidad
                    </h1>
                    <p className="text-blue-100 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                        Más de 50 años articulando el desarrollo industrial y el crecimiento sostenible
                        en la Región de Coquimbo.
                    </p>
                </div>
            </section>

            {/* Aquí cargamos el componente con la Misión, Visión y Valores */}
            <Identity />

            {/* Sección de apoyo visual o frase institucional */}
            <section className="py-16 bg-gray-50 border-y border-gray-100">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <blockquote className="text-primary text-2xl font-medium italic leading-snug">
                        "La confianza y la colaboración son el motor que impulsa el progreso de nuestra región."
                    </blockquote>
                </div>
            </section>
        </div>
    );
}