"use client";
import React from "react";
import { motion } from "framer-motion";

const ContactView = () => {
    return (
        <section className="container mx-auto px-6 py-16 md:py-24 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">

                {/* Tarjeta de Información */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="bg-white rounded-[2.5rem] p-8 sm:p-12 shadow-2xl shadow-blue-900/5 border border-slate-100 flex flex-col justify-center relative overflow-hidden group hover:shadow-blue-900/10 transition-shadow duration-500"
                >
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-black text-slate-800 mb-10 leading-tight tracking-tight">
                            Información de <br />
                            <span className="text-primary">contacto</span>
                        </h2>

                        <div className="space-y-8 text-lg text-slate-600 font-medium">
                            <div className="flex items-start space-x-5 group/item">
                                <div className="mt-1 w-12 h-12 rounded-2xl bg-primary/5 group-hover/item:bg-primary group-hover/item:text-white text-primary flex items-center justify-center flex-shrink-0 transition-colors duration-300 shadow-sm border border-primary/10">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-1 text-xl">Dirección:</h3>
                                    <p className="leading-relaxed">Manuel Antonio Matta 461, oficina 103,<br /> La Serena, Región de Coquimbo.</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-5 group/item">
                                <div className="mt-1 w-12 h-12 rounded-2xl bg-primary/5 group-hover/item:bg-primary group-hover/item:text-white text-primary flex items-center justify-center flex-shrink-0 transition-colors duration-300 shadow-sm border border-primary/10">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-1 text-xl">Teléfono:</h3>
                                    <a href="tel:+56512223090" className="hover:text-primary transition-colors block">+56 9 5728 8408</a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-5 group/item">
                                <div className="mt-1 w-12 h-12 rounded-2xl bg-primary/5 group-hover/item:bg-primary group-hover/item:text-white text-primary flex items-center justify-center flex-shrink-0 transition-colors duration-300 shadow-sm border border-primary/10">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-1 text-xl">Email:</h3>
                                    <a href="mailto:cidere@cidere.cl" className="hover:text-primary transition-colors block">cidere@cidere.cl</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Mapa Interactivo */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                    className="w-full h-full min-h-[400px] lg:min-h-[500px] bg-slate-100 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/10 border-[6px] border-white group relative"
                >
                    {/* Overlay para dar un velo elegante que desaparece al pasar el ratón */}
                    <div className="absolute inset-0 bg-primary/5 pointer-events-none transition-opacity duration-500 group-hover:opacity-0 z-10"></div>

                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.578631166688!2d-71.25471492445107!3d-29.904230674994275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9691ca7096738935%3A0x629555543036417!2sManuel%20Antonio%20Matta%20461%2C%20La%20Serena%2C%20Coquimbo!5e0!3m2!1ses!2scl!4v1709123456789!5m2!1ses!2scl-"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Mapa de Ubicación Cidere"
                        className="w-full h-full grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                    ></iframe>
                </motion.div>

            </div>
        </section>
    );
};

export default ContactView;
