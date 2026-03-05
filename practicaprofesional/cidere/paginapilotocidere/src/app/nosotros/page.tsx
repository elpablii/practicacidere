import React from "react";
import { PageHeaderAnimator } from "@/components/PageHeaderAnimator";
import Identity from "@/components/identity";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Misión, Visión y Propuesta de Valor - CIDERE",
    description: "Conoce la misión, visión y propuesta de valor de CIDERE Región de Coquimbo.",
};

export default function NosotrosPage() {
    return (
        <main className="min-h-screen bg-transparent overflow-x-hidden">
            <PageHeaderAnimator id="mision" bgImage="/images/slider/Slide2VerSocios.webp" className="bg-primary pt-40 pb-28 px-6 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-secondary via-transparent to-transparent z-10"></div>
                <div className="max-w-5xl mx-auto relative z-10">
                    <h1 className="text-white text-4xl md:text-7xl font-black mb-6 uppercase tracking-tighter">
                        Nuestra <span className="text-blue-500">Identidad</span>
                    </h1>
                    <p className="text-blue-100/70 text-lg md:text-xl font-medium max-w-3xl mx-auto">
                        Conoce los lineamientos estratégicos que rigen nuestra organización y sus asociados.
                    </p>
                </div>
            </PageHeaderAnimator>

            <Identity />
        </main>
    );
}