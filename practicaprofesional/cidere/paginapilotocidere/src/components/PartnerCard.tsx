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

    return (
        <motion.a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="group relative flex items-center justify-center 
                       p-3 md:p-6 bg-white border border-gray-100 
                       rounded-2xl transition-all duration-500 
                       hover:shadow-2xl hover:-translate-y-2 active:scale-95 shadow-sm"
        >
            <div className="relative w-full aspect-[3/2] flex items-center justify-center overflow-hidden">
                <img
                    src={logo}
                    alt={`Logo de ${name}`}
                    className={`w-auto h-auto object-contain transition-all duration-500 ease-in-out grayscale-0 opacity-100 md:group-hover:scale-110 ${sizeClasses}`}
                />
            </div>
        </motion.a>
    );
};

export default PartnerCard;