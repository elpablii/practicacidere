"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface MemberProps {
    name: string;
    role: string;
    company: string;
    image?: string;
    imageClass?: string;
}

const MemberCard = ({ name, role, company, image, imageClass = "" }: MemberProps) => {
    const [isTouched, setIsTouched] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="group relative overflow-hidden rounded-2xl bg-gray-50 border border-gray-100 transition-all duration-300 lg:hover:shadow-xl lg:hover:-translate-y-1 cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary focus-visible:ring-offset-2"
            role="button"
            tabIndex={0}
            aria-expanded={isTouched}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setIsTouched(!isTouched);
                }
            }}
            onClick={() => setIsTouched(!isTouched)}
        >
            {/* Contenedor de Imagen */}
            <div className="aspect-[4/5] w-full overflow-hidden bg-gray-200">
                <img
                    src={image || "https://via.placeholder.com/400x500?text=Foto+Proximamente"}
                    alt={`Foto de ${name}, ${role}`}
                    className={`h-full w-full object-cover transition-transform duration-500 lg:group-hover:scale-110 ${isTouched ? 'scale-110' : ''} ${imageClass}`}
                />

                {/* Overlay que aparece al hacer hover*/}
                <div className={`absolute inset-0 bg-primary/20 transition-opacity duration-300 lg:group-hover:opacity-100 ${isTouched ? 'opacity-100' : 'opacity-0'}`} />
            </div>

            {/* Área de Información */}
            <div className="p-5 text-center h-28 flex flex-col justify-center bg-white relative">

                {/* Estado Normal: Nombre y Cargo */}
                <div className={`transition-all duration-300 lg:group-hover:opacity-0 lg:group-hover:invisible ${isTouched ? 'opacity-0 invisible' : 'opacity-100 visible'}`}>
                    <h3 className="text-lg font-bold text-primary leading-tight mb-1">{name}</h3>
                    <p className="text-sm text-gray-500 font-medium">{role}</p>
                </div>

                {/* Estado Hover: Empresa */}
                <div className={`absolute inset-0 flex items-center justify-center p-5 transition-all duration-300 lg:group-hover:opacity-100 lg:group-hover:visible ${isTouched ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                    <p className="text-primary font-bold text-base leading-tight">
                        {company}
                    </p>
                </div>

            </div>

            {/* Detalle decorativo: línea inferior que se expande */}
            <div className={`absolute bottom-0 left-0 h-1 bg-primary transition-all duration-500 lg:group-hover:w-full ${isTouched ? 'w-full' : 'w-0'}`} />
        </motion.div>
    );
};

export default MemberCard;