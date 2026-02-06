import React from "react";
import Identity from "@/components/identity";

export default function NosotrosPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Encabezado de la página Nosotros */}
            <section className="bg-primary py-20 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-white text-4xl md:text-6xl font-extrabold mb-6">
                        Nuestra Misión, Visión y Propuesta de Valor
                    </h1>
                </div>
            </section>

            <Identity />
        </div>
    );
}