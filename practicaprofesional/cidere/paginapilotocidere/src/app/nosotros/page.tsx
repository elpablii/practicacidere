import React from "react";
import Identity from "@/components/identity";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Misión, Visión y Propuesta de Valor - CIDERE",
    description: "Conoce la misión, visión y propuesta de valor de CIDERE Región de Coquimbo.",
};

export default function NosotrosPage() {
    return (
        <div className="bg-white min-h-screen">
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