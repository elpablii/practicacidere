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

    const closeAllMobile = () => {
        setIsMobileMenuOpen(false);
        setIsMobileDropdownOpen(false);
    };

    // Función para alternar el menú en móviles (Toggle: Abre/Cierra)
    const toggleMobileDropdown = (e: React.MouseEvent) => {
        e.stopPropagation(); // Evita que el clic afecte al fondo (overlay)
        setIsMobileDropdownOpen(!isMobileDropdownOpen);
    };

    // Cerrar menú desktop al hacer clic fuera
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Bloquear scroll en móvil
    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    }, [isMobileMenuOpen]);

    return (
        <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" onClick={() => setIsDropdownOpen(false)}>
                            <Image src={logoCidere} alt="Logo CIDERE" width={160} height={55} priority className="cursor-pointer" />
                        </Link>
                    </div>

                    {/* Menú Desktop (Hover) */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/" className={`font-medium transition-colors ${isActive('/') ? 'text-secondary' : 'text-primary hover:text-secondary'}`}>
                            Inicio
                        </Link>

                        <div
                            className="relative group"
                            onMouseEnter={() => setIsDropdownOpen(true)}
                            onMouseLeave={() => setIsDropdownOpen(false)}
                            ref={dropdownRef}
                        >
                            <button
                                className={`flex items-center font-medium transition-colors py-2 focus:outline-none ${isNosotrosActive || isDropdownOpen ? 'text-secondary' : 'text-primary hover:text-secondary'}`}
                            >
                                CIDERE Coquimbo
                                <svg
                                    className={`ml-1.5 w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180 text-secondary' : 'text-primary'}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            <div className={`absolute left-0 mt-0 w-64 bg-white border border-gray-100 shadow-2xl rounded-2xl py-4 transition-all duration-300 ${isDropdownOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'}`}>
                                <div className="px-4 py-1 mb-1 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Nuestra Organización</div>
                                <Link href="/nosotros#mision" onClick={() => setIsDropdownOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-secondary transition-colors">Misión y Visión</Link>
                                <Link href="/nosotros#directorio" onClick={() => setIsDropdownOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-secondary transition-colors">Directorio</Link>
                                <Link href="/nosotros#equipo" onClick={() => setIsDropdownOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-secondary transition-colors">Equipo CIDERE</Link>
                                <Link href="/nosotros#objetivos" onClick={() => setIsDropdownOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-secondary transition-colors">Objetivos</Link>
                                <div className="border-t border-gray-100 my-3 mx-4"></div>
                                <div className="px-4 py-1 mb-1 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Vinculación</div>
                                <Link href="/socios" onClick={() => setIsDropdownOpen(false)} className={`block px-4 py-2 text-sm font-medium ${isActive('/socios') ? 'text-secondary' : 'text-gray-700 hover:bg-gray-50 hover:text-secondary'}`}>Socios Asociados</Link>
                            </div>
                        </div>

                        <Link href="/contacto" className={`px-6 py-2.5 rounded-full font-semibold transition-all shadow-md active:scale-95 ${isActive('/contacto') ? 'bg-secondary text-white' : 'bg-primary text-white hover:bg-secondary'}`}>
                            Contacto
                        </Link>
                    </div>

                    {/* Botón Menú Móvil */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-primary p-2 hover:bg-gray-100 rounded-lg transition-colors focus:outline-none relative z-50"
                        >
                            {isMobileMenuOpen ? (
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
                            ) : (
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16m-7 6h7" /></svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Menú Móvil (Vertical) */}
            <div className={`md:hidden fixed inset-0 z-[60] transition-all duration-300 ${isMobileMenuOpen ? 'visible' : 'invisible'}`}>
                <div className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`} onClick={closeAllMobile}></div>

                <div className={`absolute right-0 top-0 h-[100dvh] w-[85%] max-w-[320px] bg-white shadow-2xl transition-transform duration-300 ease-in-out flex flex-col ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="p-6 flex flex-col h-full">
                        <div className="flex justify-between items-center mb-8">
                            <span className="text-xl font-bold text-primary">Navegación</span>
                            <button onClick={closeAllMobile} className="p-2 text-primary">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </div>

                        <div className="flex-1 space-y-2 overflow-y-auto pr-2">
                            <Link href="/" className={`block px-4 py-3 rounded-xl font-medium ${isActive('/') ? 'bg-secondary/10 text-secondary' : 'text-gray-700'}`} onClick={closeAllMobile}>Inicio</Link>

                            <div className="space-y-1">
                                <button
                                    onClick={toggleMobileDropdown} // Aquí aplicamos el Toggle corregido
                                    className={`w-full flex justify-between items-center px-4 py-3 rounded-xl font-medium transition-all duration-300 ${isNosotrosActive || isMobileDropdownOpen ? 'text-secondary bg-secondary/10' : 'text-gray-700 hover:bg-gray-50'}`}
                                >
                                    CIDERE Coquimbo
                                    <svg className={`w-4 h-4 transition-transform duration-300 ${isMobileDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
                                </button>

                                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isMobileDropdownOpen ? 'max-h-[500px] opacity-100 mt-1' : 'max-h-0 opacity-0'}`}>
                                    <div className="pl-6 py-2 space-y-1 bg-gray-50/80 rounded-xl text-sm text-gray-600">
                                        <Link href="/nosotros#mision" className="block py-2.5 hover:text-secondary transition-colors" onClick={closeAllMobile}>Misión y Visión</Link>
                                        <Link href="/nosotros#directorio" className="block py-2.5 hover:text-secondary transition-colors" onClick={closeAllMobile}>Directorio</Link>
                                        <Link href="/nosotros#equipo" className="block py-2.5 hover:text-secondary transition-colors" onClick={closeAllMobile}>Equipo CIDERE</Link>
                                        <Link href="/nosotros#objetivos" className="block py-2.5 hover:text-secondary transition-colors" onClick={closeAllMobile}>Objetivos</Link>
                                    </div>
                                </div>
                            </div>

                            <Link href="/socios" className={`block px-4 py-3 rounded-xl font-medium ${isActive('/socios') ? 'bg-secondary/10 text-secondary' : 'text-gray-700'}`} onClick={closeAllMobile}>Socios Asociados</Link>
                        </div>

                        <div className="mt-auto pt-6 border-t border-gray-100">
                            <Link href="/contacto" className="w-full block text-center bg-primary text-white py-4 rounded-xl font-bold shadow-lg shadow-primary/10 active:scale-95 transition-all" onClick={closeAllMobile}>Contacto Directo</Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;