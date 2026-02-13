import React from "react";
import Image from "next/image";

interface PartnerProps {
    name: string;
    logo: string;
    website?: string;
}

const PartnerCard = ({ name, logo, website }: PartnerProps) => {
    return (
        <a
            href={website || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col items-center justify-center p-8 bg-white border border-gray-100 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
        >
            <div className="relative w-full aspect-video filter grayscale group-hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-100">
                <img
                    src={logo}
                    alt={`Logo de ${name}`}
                    className="w-full h-full object-contain"
                />
            </div>

            {/* Nombre del Socio (aparece sutilmente) */}
            <span className="mt-4 text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {name}
            </span>

            {/* Decoración inferior azul */}
            <div className="absolute bottom-0 left-0 h-1 bg-primary w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl" />
        </a>
    );
};

export default PartnerCard;