import React from "react";

interface PartnerProps {
    logo: string;
    url: string;
    name: string; // Para el atributo alt (SEO)
}

const PartnerCard = ({ logo, url, name }: PartnerProps) => {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center p-8 bg-white border border-gray-100 rounded-3xl transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:-translate-y-2 active:scale-95"
        >
            {/* Contenedor del Logo */}
            <div className="relative w-full aspect-video flex items-center justify-center overflow-hidden">
                <img
                    src={logo}
                    alt={`Logo de ${name}`}
                    className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-in-out opacity-70 group-hover:opacity-100"
                />
            </div>

            {/* Brillo decorativo interno al hacer hover */}
            <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-primary/5 transition-colors duration-500"></div>
        </a>
    );
};

export default PartnerCard;