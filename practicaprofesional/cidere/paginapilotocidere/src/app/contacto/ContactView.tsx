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
                    <div className="relative z-10 mb-8 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary rounded-xl" tabIndex={0}>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-800 leading-tight tracking-tight mb-10">
                            Información de <br />
                            <span className="text-primary">contacto</span>
                        </h2>

                        <div className="space-y-8 text-lg text-slate-600 font-medium">
                            <div className="flex items-start space-x-5 group/item focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary focus-visible:ring-offset-8 rounded-lg" tabIndex={0}>
                                <div className="mt-1 w-12 h-12 rounded-2xl bg-primary/5 group-hover/item:bg-primary group-hover/item:text-white text-primary flex items-center justify-center flex-shrink-0 transition-colors duration-300 shadow-sm border border-primary/10">
                                    <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-1 text-xl">Dirección:</h3>
                                    <p className="leading-relaxed">Manuel Antonio Matta 461, oficina 103,<br /> La Serena, Región de Coquimbo.</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-5 group/item focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary focus-visible:ring-offset-8 rounded-lg" tabIndex={0}>
                                <div className="mt-1 w-12 h-12 rounded-2xl bg-primary/5 group-hover/item:bg-primary group-hover/item:text-white text-primary flex items-center justify-center flex-shrink-0 transition-colors duration-300 shadow-sm border border-primary/10">
                                    <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-1 text-xl">Teléfono:</h3>
                                    <span className="block text-slate-700">+56 512 223 090</span>
                                </div>
                            </div>

                            <div className="flex items-start space-x-5 group/item focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary focus-visible:ring-offset-8 rounded-lg" tabIndex={0}>
                                <div className="mt-1 w-12 h-12 rounded-2xl bg-primary/5 group-hover/item:bg-primary group-hover/item:text-white text-primary flex items-center justify-center flex-shrink-0 transition-colors duration-300 shadow-sm border border-primary/10">
                                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.63 1.438h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-1 text-xl">WhatsApp:</h3>
                                    <span className="block text-slate-700">+56 9 5728 8408</span>
                                </div>
                            </div>

                            <div className="flex items-start space-x-5 group/item focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary focus-visible:ring-offset-8 rounded-lg" tabIndex={0}>
                                <div className="mt-1 w-12 h-12 rounded-2xl bg-primary/5 group-hover/item:bg-primary group-hover/item:text-white text-primary flex items-center justify-center flex-shrink-0 transition-colors duration-300 shadow-sm border border-primary/10">
                                    <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-1 text-xl">Email:</h3>
                                    <span className="block text-slate-700">cidere@cidere.cl</span>
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
                        title="Mapa de Ubicación CIDERE"
                        tabIndex={0}
                        className="w-full h-full grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 ease-in-out focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary focus-visible:ring-inset"
                    ></iframe>
                </motion.div>

            </div>
        </section>
    );
};

export default ContactView;
