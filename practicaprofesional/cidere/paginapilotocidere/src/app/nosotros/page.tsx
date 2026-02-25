import React from "react";
import Identity from "@/components/identity";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Misión, Visión y Propuesta de Valor - CIDERE",
    description: "Conoce la misión, visión y propuesta de valor de CIDERE Región de Coquimbo.",
};

export default function NosotrosPage() {
    return (
        <main className="min-h-screen bg-slate-50 overflow-x-hidden">
            {/* Header Institucional con Mesh Gradient */}
            <section className="bg-primary pt-40 pb-28 px-6 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-secondary via-transparent to-transparent"></div>
                <div className="max-w-5xl mx-auto relative z-10">
                    <h1 className="text-white text-4xl md:text-7xl font-black mb-6 italic uppercase tracking-tighter">
                        Nuestra <span className="text-secondary">Identidad</span>
                    </h1>
                    <p className="text-blue-100/70 text-lg md:text-xl font-medium max-w-3xl mx-auto">
                        Conoce la esencia de CIDERE, el motor que impulsa el desarrollo sostenible de la Región de Coquimbo.
                    </p>
                </div>
            </section>

            <Identity />
        </main>
    );
}