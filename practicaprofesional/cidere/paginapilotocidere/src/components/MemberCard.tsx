import React from "react";

interface MemberProps {
    name: string;
    role: string;
    company: string;
    image?: string;
}

const MemberCard = ({ name, role, company, image }: MemberProps) => {
    return (
        <div className="group relative overflow-hidden rounded-2xl bg-gray-50 border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            {/* Contenedor de Imagen */}
            <div className="aspect-[4/5] w-full overflow-hidden bg-gray-200">
                <img
                    src={image || "https://via.placeholder.com/400x500?text=Foto+Proximamente"}
                    alt={name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay que aparece al hacer hover (opcional, para dar énfasis al texto de la empresa) */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Área de Información */}
            <div className="p-5 text-center h-28 flex flex-col justify-center bg-white relative">

                {/* Estado Normal: Nombre y Cargo */}
                <div className="transition-all duration-300 group-hover:opacity-0 group-hover:invisible">
                    <h3 className="text-lg font-bold text-primary leading-tight mb-1">{name}</h3>
                    <p className="text-sm text-gray-500 font-medium">{role}</p>
                </div>

                {/* Estado Hover: Empresa */}
                <div className="absolute inset-0 flex items-center justify-center p-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <p className="text-primary font-bold text-base leading-tight">
                        {company}
                    </p>
                </div>

            </div>

            {/* Detalle decorativo: línea inferior que se expande */}
            <div className="absolute bottom-0 left-0 h-1 bg-secondary w-0 group-hover:w-full transition-all duration-500" />
        </div>
    );
};

export default MemberCard;