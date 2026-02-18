"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const slides = [
    {
        id: 1,
        // Sugerencia: Usa una foto de la región o una industrial de alta calidad
        image: "/assets/logos/CIDERE LOGO ORIGINAL.png",
        badge: "Red de Impacto Regional",
        title: "Nuestra Fuerza: <br /> Más de 90 Empresas Socias",
        desc: "Conoce a las organizaciones líderes que impulsan el desarrollo productivo, la innovación y el compromiso social en la Región de Coquimbo.",
        primaryBtn: {
            text: "Ver Socios Asociados",
            link: "/socios"
        },
        secondaryBtn: {
            text: "Hazte Socio",
            link: "/hazte-socio"
        }
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
    },
    {
        id: 4,
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

    useEffect(() => {
        const timer = setInterval(nextSlide, 7000);
        return () => clearInterval(timer);
    }, [current]);

    return (
        <section className="relative w-full h-[600px] md:h-[800px] bg-gray-900 overflow-hidden">

            {/* SLIDES */}
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                        }`}
                >
                    {/* IMAGEN DE FONDO */}
                    <div className="absolute inset-0">
                        <img
                            src={slide.image}
                            alt={`Slide ${slide.id}`}
                            className="w-full h-full object-cover"
                        />
                        {/* OVERLAY PARA CONTRASTE */}
                        <div className="absolute inset-0 bg-black/50 md:bg-gradient-to-r md:from-primary/95 md:via-primary/70 md:to-transparent"></div>
                    </div>

                    {/* CONTENIDO (TEXTO Y BOTONES) */}
                    <div className="relative z-20 h-full flex items-center">
                        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
                            <div className="max-w-3xl">
                                {/* BADGE */}
                                <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full mb-6">
                                    <span className="text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest">
                                        {slide.badge}
                                    </span>
                                </div>

                                {/* TÍTULO */}
                                <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg"
                                    dangerouslySetInnerHTML={{ __html: slide.title }}
                                />

                                {/* DESCRIPCIÓN */}
                                <p className="text-sm sm:text-base md:text-xl text-gray-200 mb-10 leading-relaxed max-w-xl drop-shadow-md">
                                    {slide.desc}
                                </p>

                                {/* BOTONES */}
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link
                                        href={slide.primaryBtn.link}
                                        className="px-8 py-4 bg-white text-primary font-bold rounded-xl text-center hover:bg-gray-100 transition-all shadow-lg active:scale-95"
                                    >
                                        {slide.primaryBtn.text}
                                    </Link>
                                    <Link
                                        href={slide.secondaryBtn.link}
                                        className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/30 font-bold rounded-xl text-center hover:bg-white/20 transition-all active:scale-95"
                                    >
                                        {slide.secondaryBtn.text}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* CONTROLES (FLECHAS) */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/30 hover:bg-white/20 text-white transition-all backdrop-blur-sm hidden md:block border border-white/10"
                aria-label="Anterior"
            >
                <ChevronLeftIcon className="w-6 h-6" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/30 hover:bg-white/20 text-white transition-all backdrop-blur-sm hidden md:block border border-white/10"
                aria-label="Siguiente"
            >
                <ChevronRightIcon className="w-6 h-6" />
            </button>

            {/* INDICADORES (DOTS) */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${current === i ? "w-8 bg-white" : "w-2 bg-white/30"
                            }`}
                        aria-label={`Ir a slide ${i + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default HeroSlider;