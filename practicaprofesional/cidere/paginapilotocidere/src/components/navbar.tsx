"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logoCidere from "@/assets/logos/logo-full.png";

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
        <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" onClick={closeAll}>
                            <Image src={logoCidere} alt="Logo CIDERE" width={160} height={55} priority className="cursor-pointer" />
                        </Link>
                    </div>

                    {/* Menú Desktop / Tablet (iPad) */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link
                            href="/"
                            className={`font-medium transition-colors ${isActive('/') ? 'text-primary' : 'text-primary hover:text-secondary'}`}
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
                                className={`flex items-center font-medium transition-colors py-2 focus:outline-none group text-primary`}
                            >
                                <span className="relative">
                                    CIDERE Coquimbo
                                    <span className={`absolute left-0 -bottom-1.5 h-[2px] w-full bg-primary transition-transform duration-300 ease-out origin-left ${isDropdownActiveState ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                                </span>
                                <svg className={`ml-1.5 w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            <div className={`absolute left-0 mt-0 w-64 bg-white border border-gray-100 shadow-2xl rounded-2xl py-4 transition-all duration-300 ${isDropdownOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'}`}>
                                <Link href="/nosotros#mision" onClick={closeAll} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors">Misión y Visión</Link>
                                <Link href="/nosotros/directorio#directorio" onClick={closeAll} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors">Directorio</Link>
                                <Link href="/nosotros#equipo" onClick={closeAll} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors">Equipo CIDERE</Link>
                                <Link href="/nosotros#objetivos" onClick={closeAll} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors">Objetivos</Link>
                                <div className="border-t border-gray-100 my-3 mx-4"></div>
                                <Link href="/socios" onClick={closeAll} className={`block px-4 py-2 text-sm font-medium ${isActive('/socios') ? 'text-primary' : 'text-gray-700 hover:bg-gray-50'}`}>Socios Asociados</Link>
                            </div>
                        </div>

                        <Link href="/contacto" className={`px-6 py-2.5 rounded-full font-semibold transition-all shadow-md ${isActive('/contacto') ? 'bg-primary text-white' : 'bg-primary/10 text-primary hover:bg-primary hover:text-white'}`}>
                            Contacto
                        </Link>
                    </div>

                    {/* Botón Menú Móvil */}
                    <div className="md:hidden">
                        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-primary p-2 focus:outline-none relative z-50">
                            {isMobileMenuOpen ? (
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
                            ) : (
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16m-7 6h7" /></svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Panel Lateral Móvil */}
            <div className={`md:hidden fixed inset-0 z-[60] ${isMobileMenuOpen ? 'visible' : 'invisible'}`}>
                <div className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`} onClick={closeAll}></div>
                <div className={`absolute right-0 top-0 h-[100dvh] w-[85%] max-w-[320px] bg-white shadow-2xl transition-transform duration-300 ease-in-out flex flex-col ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="p-6 flex flex-col h-full">
                        <div className="mb-8 flex justify-between items-center border-b border-gray-100 pb-4">
                            <span className="text-xl font-bold text-primary">Navegación</span>
                            <button onClick={closeAll} className="text-primary">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </div>
                        <div className="flex-1 space-y-2 overflow-y-auto pr-2">
                            <Link href="/" className={`block px-4 py-3 rounded-xl font-medium ${isActive('/') ? 'bg-primary/10 text-primary' : 'text-primary'}`} onClick={closeAll}>Inicio</Link>

                            <div className="space-y-1">
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        setIsMobileDropdownOpen(!isMobileDropdownOpen);
                                    }}
                                    className={`w-full flex justify-between items-center px-4 py-3 rounded-xl font-medium transition-all ${isMobileDropdownOpen ? 'text-primary bg-primary/5' : 'text-primary'}`}
                                >
                                    CIDERE Coquimbo
                                    <svg className={`w-4 h-4 transition-transform duration-300 ${isMobileDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
                                </button>

                                <div className={`overflow-hidden transition-all duration-300 ${isMobileDropdownOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="pl-6 py-2 space-y-4 text-sm text-gray-600">
                                        <Link href="/nosotros#mision" className="block hover:text-primary" onClick={closeAll}>Misión y Visión</Link>
                                        <Link href="/nosotros#directorio" className="block hover:text-primary" onClick={closeAll}>Directorio</Link>
                                        <Link href="/nosotros#equipo" className="block hover:text-primary" onClick={closeAll}>Equipo CIDERE</Link>
                                        <Link href="/nosotros#objetivos" className="block hover:text-primary" onClick={closeAll}>Objetivos</Link>
                                    </div>
                                </div>
                            </div>

                            <Link href="/socios" className={`block px-4 py-3 rounded-xl font-medium ${isActive('/socios') ? 'bg-primary/10 text-primary' : 'text-primary'}`} onClick={closeAll}>Socios Asociados</Link>
                        </div>
                        <div className="mt-auto pt-6 border-t border-gray-100">
                            <Link href="/contacto" className="w-full block text-center bg-primary text-white py-4 rounded-xl font-bold shadow-lg" onClick={closeAll}>Contacto Directo</Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;