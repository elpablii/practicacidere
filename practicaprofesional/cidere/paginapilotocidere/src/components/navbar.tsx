"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logoCidere from "@/assets/logos/logo-full.png";

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/">
                            <Image
                                src={logoCidere}
                                alt="Logo CIDERE"
                                width={160}
                                height={55}
                                priority
                                className="cursor-pointer"
                            />
                        </Link>
                    </div>

                    {/* Menú Desktop */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="text-primary font-medium hover:text-secondary transition-colors">
                            Inicio
                        </Link>

                        {/* Botón Desplegable: CIDERE Coquimbo */}
                        <div
                            className="relative"
                            onMouseEnter={() => setIsDropdownOpen(true)}
                            onMouseLeave={() => setIsDropdownOpen(false)}
                        >
                            <button className="flex items-center text-primary font-medium hover:text-secondary transition-colors py-2">
                                CIDERE Coquimbo
                                <svg className={`ml-1 w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {/* Lista Desplegable */}
                            {isDropdownOpen && (
                                <div className="absolute left-0 mt-0 w-56 bg-white border border-gray-100 shadow-xl rounded-xl py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                                    <Link href="/nosotros#mision" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-secondary">
                                        Misión y Visión
                                    </Link>
                                    <Link href="/nosotros#directorio" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-secondary">
                                        Directorio
                                    </Link>
                                    <Link href="/nosotros#equipo" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-secondary">
                                        Equipo CIDERE
                                    </Link>
                                    <Link href="/nosotros#objetivos" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-secondary">
                                        Objetivos
                                    </Link>
                                    <Link href="/socios" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-secondary">
                                        Socios Asociados
                                    </Link>
                                </div>
                            )}
                        </div>

                        <Link href="/contacto" className="text-white bg-primary px-6 py-2.5 rounded-full font-semibold hover:bg-secondary transition-all shadow-md active:scale-95">
                            Contacto
                        </Link>
                    </div>

                    {/* Botón Menú Móvil */}
                    <div className="md:hidden">
                        <button className="text-primary p-2 focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;