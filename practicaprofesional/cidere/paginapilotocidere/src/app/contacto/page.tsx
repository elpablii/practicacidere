import React from "react";
import ContactView from "@/app/contacto/ContactView";
import { PageHeaderAnimator } from "@/components/PageHeaderAnimator";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contacto - CIDERE",
    description: "Contáctanos para más información. Estamos ubicados en La Serena, Región de Coquimbo.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-transparent">

            <PageHeaderAnimator bgImage="/images/slider/Avenida-del-Mar-La-Serena.webp" className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden bg-primary">
                <div className="w-full h-full flex items-center justify-center">
                    <h1 className="text-4xl md:text-6xl font-black text-white text-center tracking-wider drop-shadow-lg relative z-20">
                        Trabajemos Juntos <span className="text-blue-500">Creando Región</span>
                    </h1>
                </div>
            </PageHeaderAnimator>
            <ContactView />
        </main>
    );
}
