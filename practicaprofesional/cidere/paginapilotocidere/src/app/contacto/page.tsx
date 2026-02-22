import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contacto - CIDERE",
    description: "Contáctanos para más información. Estamos ubicados en La Serena, Región de Coquimbo.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white">

            <section className="relative w-full h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden bg-primary">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-primary/70 z-10" />
                    <img
                        src="/images/slider/Avenida-del-Mar-La-Serena.webp"
                        alt="Fondo Contacto"
                        className="w-full h-full object-cover object-center"
                    />
                </div>

                <h1 className="relative z-20 text-4xl md:text-6xl font-extrabold text-white tracking-wider drop-shadow-lg">
                    Contacto
                </h1>
            </section>

            {/* Contenido */}
            <section className="container mx-auto px-6 py-16 md:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                    <div className="flex flex-col h-full justify-center">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 md:mb-12 leading-tight">
                            Información de <br />
                            <span className="text-primary">contacto</span>
                        </h2>

                        <div className="space-y-8 text-lg text-gray-600">
                            <div className="flex items-start space-x-4">
                                <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">Dirección:</h3>
                                    <p>Manuel Antonio Matta 461, oficina 103,<br /> La Serena, Región de Coquimbo.</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">Teléfono:</h3>
                                    <a href="tel:+56512223090" className="hover:text-primary transition-colors">051-2 223 090</a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">Email:</h3>
                                    <a href="mailto:cidere@cidere.cl" className="hover:text-primary transition-colors">cidere@cidere.cl</a>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="w-full h-[400px] lg:h-[500px] bg-gray-100 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.578631166688!2d-71.25471492445107!3d-29.904230674994275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9691ca7096738935%3A0x629555543036417!2sManuel%20Antonio%20Matta%20461%2C%20La%20Serena%2C%20Coquimbo!5e0!3m2!1ses!2scl!4v1709123456789!5m2!1ses!2scl-"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Mapa de Ubicación Cidere"
                        ></iframe>
                    </div>
                </div>
            </section>
        </main>
    );
}
