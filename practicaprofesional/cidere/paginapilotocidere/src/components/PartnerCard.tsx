"use client";
import React from "react";
import { motion } from "framer-motion";

interface PartnerProps {
    logo: string;
    url: string;
    name: string;
}

const PartnerCard = ({ logo, url, name }: PartnerProps) => {
    const l = logo.toLowerCase();
    const isOversized = l.includes('brac') || l.includes('caplab') || l.includes('notaria');
    const isUndersized = l.includes('falernia') || l.includes('phillips') || l.includes('red-salud');

    let sizeClasses = 'max-w-[95%] max-h-[95%] md:max-w-[125%] md:max-h-[125%]';
    if (isOversized) sizeClasses = 'max-w-[70%] max-h-[70%] md:max-w-[85%] md:max-h-[85%]';
    else if (isUndersized) sizeClasses = 'max-w-[120%] max-h-[120%] md:max-w-[135%] md:max-h-[135%] scale-110 md:scale-125';

    const CardWrapper = url ? motion.a : motion.div;
    const commonProps = {
        initial: { opacity: 0, scale: 0.8, y: 20 },
        whileInView: { opacity: 1, scale: 1, y: 0 },
        viewport: { once: true, margin: "-50px" },
        transition: { duration: 0.5, ease: "easeOut" as const },
        className: `group relative flex items-center justify-center 
                    p-3 md:p-6 bg-white border border-gray-100 
                    rounded-2xl transition-all duration-500 
                    hover:shadow-2xl hover:-translate-y-2 active:scale-95 shadow-sm overflow-hidden focus:outline-none focus-visible:ring-4 focus-visible:ring-primary focus-visible:ring-offset-2
                    ${url ? 'cursor-pointer' : 'cursor-default'}`
    };

    return (
        <CardWrapper
            {...(url ? { href: url, target: "_blank", rel: "noopener noreferrer" } : {})}
            {...commonProps}
        >
            <div className="relative w-full aspect-[3/2] flex items-center justify-center">
                {/* Logo Principal con atenuación y escalado on hover */}
                <img
                    src={logo}
                    alt={`Logo de ${name}`}
                    className={`w-auto h-auto object-contain transition-all duration-500 ease-in-out opacity-100 group-hover:opacity-30 group-hover:scale-110 ${sizeClasses}`}
                />
            </div>

            {/* Overlay con el nombre del socio */}
            <div className="absolute inset-x-0 bottom-2 md:bottom-4 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 px-2 pointer-events-none text-center translate-y-2 group-hover:translate-y-0 z-10 w-full">
                <span className="text-primary font-bold text-xs md:text-sm leading-tight drop-shadow-md bg-white/95 px-3 py-1.5 rounded-lg border border-primary/10">
                    {name}
                </span>
            </div>
        </CardWrapper>
    );
};

export default PartnerCard;