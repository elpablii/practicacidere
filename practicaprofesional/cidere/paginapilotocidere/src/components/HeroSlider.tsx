"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const slides = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1590508004523-289139a95782?q=80&w=2070&auto=format&fit=crop",
        badge: "50 Años de Trayectoria",
        title: "Liderando el Desarrollo Sostenible",
        desc: "Articulamos al sector público, privado y la academia para fomentar el crecimiento industrial y social de la región.",
        primaryBtn: { text: "Hazte Socio ahora", link: "/hazte-socio" },
        secondaryBtn: { text: "Conócenos", link: "/nosotros" }
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1454165833767-027ffea7028c?q=80&w=2070&auto=format&fit=crop",
        badge: "Innovación Tecnológica",
        title: "Soberanía Digital con RDS",
        desc: "Potenciamos la vinculación empresarial mediante nuestra plataforma exclusiva de Red de Socios.",
        primaryBtn: { text: "Explorar RDS", link: "https://rdscidere.cl" },
        secondaryBtn: { text: "Ver Proyectos", link: "/proyectos" }
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2070&auto=format&fit=crop",
        badge: "Impacto Regional",
        title: "Creando Región Juntos",
        desc: "Somos más de 90 empresas comprometidas con el progreso económico y social de Coquimbo.",
        primaryBtn: { text: "Nuestros Socios", link: "/socios" },
        secondaryBtn: { text: "Contacto", link: "/contacto" }
    }
];

const HeroSlider = () => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

    // Auto-slide cada 7 segundos
    useEffect(() => {
        const timer = setInterval(nextSlide, 7000);
        return () => clearInterval(timer);
    }, [current]);

    return (
        <section className="relative w-full min-h-[60dvh] md:min-h-[85vh] flex items-center overflow-hidden bg-primary">

            {/* SLIDES */}
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"
                        }`}
                >
                    {/* Overlay y Fondo */}
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/90 md:bg-gradient-to-r md:from-primary/95 md:via-primary/70 md:to-transparent z-10" />
                    <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover object-center transform scale-105 animate-slow-zoom"
                    />

                    {/* Contenido */}
                    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-20 w-full h-full flex items-center py-20">
                        <div className={`max-w-3xl transition-all duration-700 delay-300 transform ${index === current ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                            }`}>
                            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full mb-6">
                                <span className="text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest">{slide.badge}</span>
                            </div>
                            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight">
                                {slide.title}
                            </h1>
                            <p className="text-sm sm:text-base md:text-xl text-gray-200 mb-10 leading-relaxed max-w-xl opacity-90">
                                {slide.desc}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href={slide.primaryBtn.link} className="px-8 py-4 bg-secondary text-white font-bold rounded-xl text-center hover:bg-emerald-500 transition-all shadow-lg active:scale-95">
                                    {slide.primaryBtn.text}
                                </Link>
                                <Link href={slide.secondaryBtn.link} className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/30 font-bold rounded-xl text-center hover:bg-white/20 transition-all active:scale-95">
                                    {slide.secondaryBtn.text}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* CONTROLES (Flechas) */}
            <button onClick={prevSlide} className="absolute left-4 z-30 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-all hidden md:block">
                <ChevronLeftIcon className="w-8 h-8" />
            </button>
            <button onClick={nextSlide} className="absolute right-4 z-30 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-all hidden md:block">
                <ChevronRightIcon className="w-8 h-8" />
            </button>

            {/* INDICADORES (Dots) */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`h-1.5 transition-all duration-300 rounded-full ${current === i ? "w-8 bg-secondary" : "w-2 bg-white/30"
                            }`}
                    />
                ))}
            </div>
        </section>
    );
};

export default HeroSlider;