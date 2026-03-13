"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import logoCidere from "@/assets/logos/LOGOS CIDERE SIN PALA_Mesa de trabajo 1.png";

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

    const pathname = usePathname();
    const dropdownRef = useRef<HTMLDivElement>(null);

    const isActive = (path: string) => pathname === path;
    const isNosotrosActive = pathname.startsWith("/nosotros");
    const isDropdownActiveState = isNosotrosActive || isDropdownOpen;

    const closeAll = () => {
        setIsDropdownOpen(false);
        setIsMobileMenuOpen(false);
        setIsMobileDropdownOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    }, [isMobileMenuOpen]);

    return (
        <motion.nav
            key={pathname}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed w-full z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20 md:h-24">

                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center h-full">
                        <Link href="/" onClick={closeAll}>
                            <Image src={logoCidere} alt="Logo CIDERE" width={300} height={98} priority className="cursor-pointer w-[190px] md:w-[300px] h-auto" />
                        </Link>
                    </div>

                    {/* Menú Desktop / Tablet (iPad) */}
                    <div className="hidden lg:flex items-center space-x-8">
                        <Link
                            href="/"
                            className={`font-bold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 rounded-md px-1 py-0.5 ${isActive('/') ? 'text-primary' : 'text-primary hover:text-primary/80'}`}
                        >
                            Inicio
                        </Link>

                        <div
                            className="relative"
                            ref={dropdownRef}
                            onMouseEnter={() => setIsDropdownOpen(true)}
                            onMouseLeave={() => setIsDropdownOpen(false)}
                        >
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    setIsDropdownOpen(!isDropdownOpen);
                                }}
                                aria-haspopup="true"
                                aria-expanded={isDropdownOpen}
                                className={`flex items-center font-bold transition-colors py-2 px-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 rounded-md group text-primary`}
                            >
                                <span className="relative">
                                    Quiénes Somos
                                    <span className={`absolute left-0 -bottom-1.5 h-[2px] w-full bg-primary transition-transform duration-300 ease-out origin-left ${isDropdownActiveState ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                                </span>
                                <svg aria-hidden="true" className={`ml-1.5 w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            <div className={`absolute left-0 mt-0 w-64 bg-white border border-gray-100 shadow-2xl rounded-2xl py-3 transition-all duration-300 ${isDropdownOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'}`}>
                                <Link href="/nosotros#mision" onClick={closeAll} className="block px-4 py-2 text-sm text-gray-600 hover:text-primary hover:bg-primary/5 hover:translate-x-1 transition-all duration-200 font-semibold rounded-lg mx-2 mb-1">Lineamientos estratégicos</Link>
                                <Link href="/nosotros/directorio#directorio" onClick={closeAll} className="block px-4 py-2 text-sm text-gray-600 hover:text-primary hover:bg-primary/5 hover:translate-x-1 transition-all duration-200 font-semibold rounded-lg mx-2 mb-1">Directorio</Link>
                                <Link href="/nosotros/equipo#equipo" onClick={closeAll} className="block px-4 py-2 text-sm text-gray-600 hover:text-primary hover:bg-primary/5 hover:translate-x-1 transition-all duration-200 font-semibold rounded-lg mx-2 mb-1">Equipo</Link>
                                <Link href="/nosotros/objetivos#objetivos" onClick={closeAll} className="block px-4 py-2 text-sm text-gray-600 hover:text-primary hover:bg-primary/5 hover:translate-x-1 transition-all duration-200 font-semibold rounded-lg mx-2 mb-1">Nuestros ejes</Link>
                                <Link href="/nosotros/hitos" onClick={closeAll} className="block px-4 py-2 text-sm text-gray-600 hover:text-primary hover:bg-primary/5 hover:translate-x-1 transition-all duration-200 font-semibold rounded-lg mx-2">Hitos emblemáticos</Link>
                                <div className="border-t border-gray-100 my-2 mx-4"></div>
                                <Link href="/socios" onClick={closeAll} className={`block px-4 py-2 text-sm transition-all duration-200 font-semibold rounded-lg mx-2 ${isActive('/socios') ? 'text-primary bg-primary/10' : 'text-gray-600 hover:text-primary hover:bg-primary/5 hover:translate-x-1'}`}>Nuestros socios</Link>
                                <Link href="/rds" onClick={closeAll} className={`block px-4 py-2 text-sm transition-all duration-200 font-semibold rounded-lg mx-2 ${isActive('/rds') ? 'text-primary bg-primary/10' : 'text-gray-600 hover:text-primary hover:bg-primary/5 hover:translate-x-1'}`}>Plataforma RDS</Link>
                            </div>
                        </div>

                        <Link href="/hazte-socio" className={`px-5 py-2 rounded-full font-bold transition-all shadow-sm border-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${isActive('/hazte-socio') ? 'border-primary bg-primary text-white' : 'border-primary text-primary hover:bg-primary hover:text-white'}`}>
                            Hazte socio
                        </Link>
                        <Link href="/contacto" className={`px-6 py-2.5 rounded-full font-semibold transition-all shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${isActive('/contacto') ? 'bg-primary text-white' : 'bg-primary/10 text-primary hover:bg-primary hover:text-white'}`}>
                            Contacto
                        </Link>
                    </div>

                    {/* Botón Menú Móvil */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-expanded={isMobileMenuOpen}
                            aria-label="Alternar menú de navegación"
                            className="text-primary p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-md relative z-50"
                        >
                            {isMobileMenuOpen ? (
                                <svg aria-hidden="true" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
                            ) : (
                                <svg aria-hidden="true" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16m-7 6h7" /></svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Panel Lateral Móvil */}
            <div className={`lg:hidden fixed inset-0 z-[60] ${isMobileMenuOpen ? 'visible' : 'invisible'}`}>
                <div className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`} onClick={closeAll}></div>
                <div className={`absolute right-0 top-0 h-[100dvh] w-[85%] max-w-[320px] bg-white shadow-2xl transition-transform duration-300 ease-in-out flex flex-col ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="p-6 flex flex-col h-full">
                        <div className="mb-8 flex justify-between items-center border-b border-gray-100 pb-4">
                            <span className="text-xl font-bold text-primary">Navegación</span>
                            <button onClick={closeAll} aria-label="Cerrar menú" className="text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md p-1">
                                <svg aria-hidden="true" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </div>
                        <div className="flex-1 space-y-2 overflow-y-auto pr-2">
                            <Link href="/" className={`block px-4 py-2 rounded-xl font-bold ${isActive('/') ? 'bg-primary/10 text-primary' : 'text-primary'}`} onClick={closeAll}>Inicio</Link>

                            <div className="space-y-1">
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setIsMobileDropdownOpen(!isMobileDropdownOpen);
                                    }}
                                    aria-haspopup="true"
                                    className={`w-full flex justify-between items-center px-4 py-2 rounded-xl font-bold transition-all select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${isMobileDropdownOpen ? 'text-primary bg-primary/5' : 'text-primary'}`}
                                >
                                    Quiénes Somos
                                    <svg aria-hidden="true" className={`w-4 h-4 transition-transform duration-300 ${isMobileDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
                                </button>

                                <div className={`overflow-hidden transition-all duration-300 ${isMobileDropdownOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="pl-4 py-2 space-y-1 text-sm text-gray-600">
                                        <Link href="/nosotros#mision" className="block py-2 px-3 rounded-lg font-medium hover:bg-primary/5 hover:text-primary hover:translate-x-1 transition-all duration-200" onClick={closeAll}>Lineamientos estratégicos</Link>
                                        <Link href="/nosotros/directorio#directorio" className="block py-2 px-3 rounded-lg font-medium hover:bg-primary/5 hover:text-primary hover:translate-x-1 transition-all duration-200" onClick={closeAll}>Directorio</Link>
                                        <Link href="/nosotros/equipo#equipo" className="block py-2 px-3 rounded-lg font-medium hover:bg-primary/5 hover:text-primary hover:translate-x-1 transition-all duration-200" onClick={closeAll}>Equipo</Link>
                                        <Link href="/nosotros/objetivos#objetivos" className="block py-2 px-3 rounded-lg font-medium hover:bg-primary/5 hover:text-primary hover:translate-x-1 transition-all duration-200" onClick={closeAll}>Nuestros ejes</Link>
                                        <Link href="/nosotros/hitos" className="block py-2 px-3 rounded-lg font-medium hover:bg-primary/5 hover:text-primary hover:translate-x-1 transition-all duration-200" onClick={closeAll}>Hitos emblemáticos</Link>
                                        <Link href="/socios" className="block py-2 px-3 rounded-lg font-medium hover:bg-primary/5 hover:text-primary hover:translate-x-1 transition-all duration-200" onClick={closeAll}>Nuestros socios</Link>
                                        <Link href="/rds" className="block py-2 px-3 rounded-lg font-medium hover:bg-primary/5 hover:text-primary hover:translate-x-1 transition-all duration-200" onClick={closeAll}>Plataforma RDS</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-auto pt-4 space-y-2 border-t border-gray-100">
                            <Link href="/hazte-socio" className="w-full block text-center border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors py-2 rounded-xl font-bold shadow-sm" onClick={closeAll}>Hazte socio</Link>
                            <Link href="/contacto" className="w-full block text-center bg-primary text-white py-2.5 rounded-xl font-bold shadow-lg" onClick={closeAll}>Contacto</Link>
                        </div>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;