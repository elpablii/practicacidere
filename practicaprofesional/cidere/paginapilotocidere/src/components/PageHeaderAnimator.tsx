"use client";

import { motion } from "framer-motion";
import React from "react";

interface PageHeaderAnimatorProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
    bgImage?: string;
}

export const PageHeaderAnimator: React.FC<PageHeaderAnimatorProps> = ({ children, className = "", id, bgImage }) => {
    return (
        <motion.section
            id={id}
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const }}
            className={`relative overflow-hidden ${className}`}
        >
            {bgImage && (
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-primary/70 z-10" />
                    <img
                        src={bgImage}
                        alt="Fondo Cabecera"
                        className="w-full h-full object-cover object-[center_70%]"
                    />
                </div>
            )}
            {/* Contenedor relativo para que el contenido no quede detrás de la imagen */}
            <div className="relative z-20 h-full w-full">
                {children}
            </div>
        </motion.section>
    );
};
