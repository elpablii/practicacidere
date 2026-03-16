"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const slides = [
    {
        id: 1,
        image: "/images/slider/banner-pagina-web-nueva.webp",
        badge: "",
        title: "",
        desc: "",
        primaryBtn: {
            text: "",
            link: ""
        },
        secondaryBtn: {
            text: "",
            link: ""
        }
    },
    {
        id: 2,
        image: "/images/slider/tercer-banner-pagina-inicio-socios.webp",
        badge: "",
        title: "Nuestros Socios",
        desc: "Conoce a las organizaciones que forman parte de nuestra red de socios",
        primaryBtn: { text: "Revísalos aquí", link: "/socios" },
        secondaryBtn: {
            text: "",
            link: ""
        }
    },
    {
        id: 3,
        image: "/images/slider/Slide1RDS.webp",
        badge: "",
        title: "",
        desc: "",
        primaryBtn: {
            text: "Descubre RDS",
            link: "https://rdscidere.cl"
        },
        secondaryBtn: {
            text: "",
            link: ""
        }
    },
    {
        id: 4,
        image: "/images/slider/segundo-banner-pagina-inicio.webp",
        badge: "",
        title: "¿Quieres ser Socio?",
        desc: "Empieza tu proceso de ingreso y postula para ser parte del desarrollo regional",
        primaryBtn: { text: "Hazte Socio", link: "/hazte-socio" },
        secondaryBtn: { text: "", link: "" }
    },
    {
        id: 5,
        image: "/images/slider/quinto-banner-inicio.webp",
        badge: "",
        title: "Registro Regional de Proveedores",
        desc: "Conecta con proveedores de la Región de Coquimbo",
        primaryBtn: { text: "Sé parte del Espacio Industrial Minero", link: "https://www.espacioindustria.cl/" },
        secondaryBtn: { text: "", link: "" }
    },
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
        <section className="relative w-full max-w-[1920px] mx-auto h-[240px] sm:h-[350px] md:h-[450px] lg:h-[550px] xl:h-[600px] bg-gray-900 overflow-hidden">

            {/* SLIDES */}
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    aria-hidden={index !== current}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                        }`}
                >
                    {/* IMAGEN DE FONDO */}
                    <div className="absolute inset-0">
                        {slide.image && (
                            <Image
                                src={slide.image}
                                alt={slide.title ? `Imagen de fondo para: ${slide.title.replace(/<\/?[^>]+(>|$)/g, "")}` : ""}
                                fill
                                priority={index === 0}
                                className={`${slide.id === 3 ? 'object-contain md:object-cover' : slide.id === 1 ? 'object-cover object-center md:object-bottom md:scale-100' : 'object-cover'}`}
                            />
                        )}

                        {slide.id !== 3 && slide.id !== 1 && (
                            <div className="absolute inset-0 bg-black/50 md:bg-gradient-to-r md:from-primary/95 md:via-primary/70 md:to-transparent"></div>
                        )}
                    </div>


                    <div className={`relative z-20 h-full flex ${slide.id === 3 ? 'items-end justify-center pb-8 sm:pb-8 md:pb-10 lg:pb-12 xl:pb-[3.5rem]' : 'items-center'}`}>
                        <div className={`w-full ${slide.id === 3 ? 'flex justify-center' : 'max-w-7xl mx-auto px-12 sm:px-16 lg:px-20'}`}>
                            <div className={`${slide.id === 3 ? 'text-center' : 'max-w-3xl'} focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white rounded-xl`} tabIndex={0}>

                                {slide.badge && (
                                    <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full mb-3 sm:mb-6">
                                        <span className="text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest">
                                            {slide.badge}
                                        </span>
                                    </div>
                                )}

                                {slide.title && (
                                    <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight mb-2 sm:mb-5 drop-shadow-lg"
                                        dangerouslySetInnerHTML={{ __html: slide.title }}
                                    />
                                )}


                                {slide.desc && (
                                    <p className="text-xs sm:text-base md:text-lg lg:text-xl text-gray-200 mb-4 sm:mb-8 leading-relaxed max-w-xl drop-shadow-md">
                                        {slide.desc}
                                    </p>
                                )}


                                <div className={`flex ${slide.id === 3 ? 'justify-center' : 'flex-col sm:flex-row'} gap-2 sm:gap-4`}>
                                    {slide.primaryBtn.text && (
                                        <Link
                                            href={slide.primaryBtn.link}
                                            className={`bg-white text-primary font-bold text-center hover:bg-gray-100 transition-all shadow-lg active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary whitespace-nowrap ${slide.id === 3 ? 'px-3 py-1.5 text-xs rounded-lg sm:px-8 sm:py-4 sm:text-base sm:rounded-xl lg:px-6 lg:py-3 lg:text-sm xl:text-base' : 'px-4 py-2 sm:px-8 sm:py-4 rounded-lg sm:rounded-xl text-xs sm:text-base'}`}
                                        >
                                            {slide.primaryBtn.text}
                                        </Link>
                                    )}
                                    {slide.secondaryBtn.text && (
                                        <Link
                                            href={slide.secondaryBtn.link}
                                            className="px-4 py-2 sm:px-8 sm:py-4 bg-white/10 backdrop-blur-sm text-white border border-white/30 font-bold rounded-lg sm:rounded-xl text-xs sm:text-base text-center hover:bg-white/20 transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
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
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 p-1.5 sm:p-2 md:p-3 rounded-full bg-black/30 hover:bg-white/20 text-white transition-all backdrop-blur-sm border border-white/10 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white"
                aria-label="Anterior slide"
            >
                <ChevronLeftIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 p-1.5 sm:p-2 md:p-3 rounded-full bg-black/30 hover:bg-white/20 text-white transition-all backdrop-blur-sm border border-white/10 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white"
                aria-label="Siguiente slide"
            >
                <ChevronRightIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`h-1.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 ${current === i ? "w-8 bg-white" : "w-2 bg-white/30"
                            }`}
                        aria-label={`Ir a slide ${i + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default HeroSlider;