"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const slides = [
    {
        id: 1,
        image: "/images/slider/Slide1RDS.webp",
        badge: "",
        title: "",
        desc: "",
        primaryBtn: {
            text: "Ir a RDS",
            link: "https://rdscidere.cl"
        },
        secondaryBtn: {
            text: "",
            link: ""
        }
    },
    {
        id: 2,
        image: "/images/slider/Slide2VerSocios.webp",
        badge: "",
        title: "Nuestros Socios",
        desc: "Conoce a las empresas que forman parte de nuestra red de Cidere",
        primaryBtn: { text: "Ver los Socios", link: "/socios" },
        secondaryBtn: {
            text: "",
            link: ""
        }
    },
    {
        id: 3,
        image: "/images/slider/Slide3QuieresSerSocio.webp",
        badge: "",
        title: "¿Quieres ser Socio?",
        desc: "Empieza tu proceso de ingreso y pronto serás parte de nosotros",
        primaryBtn: { text: "Hazte Socio", link: "/hazte-socio" },
        secondaryBtn: { text: "", link: "" }
    },
    {
        id: 4,
        image: "/images/slider/Slide4EspacioIndustrialMinero.webp",
        badge: "",
        title: "Registro Regional de Proveedores",
        desc: "Conecta con proveedores de la Región de Coquimbo",
        primaryBtn: { text: "Sé parte del Espacio Industrial Minero", link: "https://www.espacioindustria.cl/" },
        secondaryBtn: { text: "", link: "" }
    },
    {
        id: 5,
        image: "/images/slider/Avenida-del-Mar-La-Serena.webp",
        badge: "",
        title: "50 Años de Trayectoria",
        desc: "Desde 1976, lideramos el desarrollo económico, social y medioambiental en la Región de Coquimbo.",
        primaryBtn: {
            text: "Ver nuestros Hitos",
            link: "/nosotros/hitos"
        },
        secondaryBtn: {
            text: "",
            link: ""
        }
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
        <section className="relative w-full max-w-[1920px] mx-auto h-[600px] md:h-[800px] bg-gray-900 overflow-hidden">

            {/* SLIDES */}
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                        }`}
                >
                    {/* IMAGEN DE FONDO */}
                    <div className="absolute inset-0">
                        {slide.image && (
                            <img
                                src={slide.image}
                                alt={`Slide ${slide.id}`}
                                className={`w-full h-full ${index === 0 ? 'object-contain md:object-cover' : 'object-cover'}`}
                            />
                        )}

                        {index !== 0 && (
                            <div className="absolute inset-0 bg-black/50 md:bg-gradient-to-r md:from-primary/95 md:via-primary/70 md:to-transparent"></div>
                        )}
                    </div>


                    <div className={`relative z-20 h-full flex ${index === 0 ? 'items-end justify-center pb-12 sm:pb-20' : 'items-center'}`}>
                        <div className={`w-full ${index === 0 ? 'flex justify-center' : 'max-w-7xl mx-auto px-6 sm:px-8 lg:px-12'}`}>
                            <div className={`${index === 0 ? 'text-center' : 'max-w-3xl'}`}>

                                {slide.badge && (
                                    <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full mb-6">
                                        <span className="text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest">
                                            {slide.badge}
                                        </span>
                                    </div>
                                )}

                                {slide.title && (
                                    <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg"
                                        dangerouslySetInnerHTML={{ __html: slide.title }}
                                    />
                                )}


                                {slide.desc && (
                                    <p className="text-sm sm:text-base md:text-xl text-gray-200 mb-10 leading-relaxed max-w-xl drop-shadow-md">
                                        {slide.desc}
                                    </p>
                                )}


                                <div className={`flex ${index === 0 ? 'justify-center' : 'flex-col sm:flex-row'} gap-4`}>
                                    {slide.primaryBtn.text && (
                                        <Link
                                            href={slide.primaryBtn.link}
                                            className="px-8 py-4 bg-white text-primary font-bold rounded-xl text-center hover:bg-gray-100 transition-all shadow-lg active:scale-95"
                                        >
                                            {slide.primaryBtn.text}
                                        </Link>
                                    )}
                                    {slide.secondaryBtn.text && (
                                        <Link
                                            href={slide.secondaryBtn.link}
                                            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/30 font-bold rounded-xl text-center hover:bg-white/20 transition-all active:scale-95"
                                        >
                                            {slide.secondaryBtn.text}
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}


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