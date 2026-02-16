interface PartnerProps {
    logo: string;
    url: string;
    name: string;
}

const PartnerCard = ({ logo, url, name }: PartnerProps) => {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center p-6 bg-white border border-gray-100 rounded-2xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 active:scale-95 shadow-sm"
        >
            <div className="relative w-full aspect-[3/2] flex items-center justify-center overflow-hidden">
                <img
                    src={logo}
                    alt={`Logo de ${name}`}
                    // Cambiamos a grayscale-0 con baja saturación o color suave por defecto
                    className="max-w-[85%] max-h-[85%] object-contain filter saturate-[0.2] opacity-60 group-hover:saturate-100 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 ease-in-out"
                />
            </div>
        </a>
    );
};

export default PartnerCard;