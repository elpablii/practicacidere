"use client";
import React from "react";
import { motion } from "framer-motion";

interface PartnerProps {
    logo: string;
    url: string;
    name: string;
}

const PartnerCard = ({ logo, url, name }: PartnerProps) => {
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
                    className="w-auto h-auto max-w-[95%] max-h-[95%] 
                               md:max-w-[125%] md:max-h-[125%] 
                               object-contain transition-all duration-500 ease-in-out
                               /* Móvil: Color y Opacidad total */
                               grayscale-0 opacity-100
                               md:group-hover:scale-110"
                />
            </div>
        </motion.a>
    );
};

export default PartnerCard;