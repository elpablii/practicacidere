"use client";
import React from "react";

const sociosLogos = [
    "/images/socios/Aguas-del-Valle.webp",
    "/images/socios/aiep.webp",
    "/images/socios/ALBA.webp",
    "/images/socios/ANDES.webp",
    "/images/socios/ANDES-IRON.webp",
    "/images/socios/ANDES.webp",
    "/images/socios/Angela.webp",
    "/images/socios/Barrick.webp",
    "/images/socios/BOHON.webp",
    "/images/socios/CA.webp",
    "/images/socios/CAHO.webp",
    "/images/socios/CALLEGARI.webp",
    "/images/socios/CASINO-DE-LA-BAHIA.webp",
    "/images/socios/CDN.webp",
    "/images/socios/CEDUC.webp",
    "/images/socios/Celta.webp",
    "/images/socios/CENTRO-MEDICO.webp",
    "/images/socios/CHIRINO.webp",
    "/images/socios/CONCRESES.webp",
    "/images/socios/CONSORCIO.webp",
    "/images/socios/CONTAUD.webp",
    "/images/socios/DIARIO.webp",
    "/images/socios/Dos-Barbas.webp",
    "/images/socios/dvd.webp",
    "/images/socios/ECOMAC.webp",
    "/images/socios/EDN.webp",
    "/images/socios/Elquivision.webp",
    "/images/socios/ENRIQUE.webp",
    "/images/socios/Estrella-Alpina.webp",
    "/images/socios/FALERNIA.webp",
    "/images/socios/FAREMIN.webp",
    "/images/socios/FLEX.webp",
    "/images/socios/FYA-SERVICIOS-E-INGENIERIA.webp",
    "/images/socios/HABITA.webp",
    "/images/socios/Hanshing.webp",
    "/images/socios/HC.webp",
    "/images/socios/Hellema.webp",
    "/images/socios/HIKZA.webp",
    "/images/socios/icomat.webp",
    "/images/socios/IGD.webp",
    "/images/socios/IMATEC.webp",
    "/images/socios/Importadora.webp",
    "/images/socios/INACAP.webp",
    "/images/socios/INNOVA.webp",
    "/images/socios/INVES.webp",
    "/images/socios/ISA.webp",
    "/images/socios/La-serena.webp",
    "/images/socios/Lilis.webp",
    "/images/socios/MEET.webp",
    "/images/socios/Mill.webp",
    "/images/socios/Millan.webp",
    "/images/socios/MOLINERA.webp",
    "/images/socios/MUTUAL.webp",
    "/images/socios/NAPOLEON.webp",
    "/images/socios/Norte-Verde-1.webp",
    "/images/socios/NORTH.webp",
    "/images/socios/Nutriser.webp",
    "/images/socios/OLMUE.webp",
    "/images/socios/OPTICA.webp",
    "/images/socios/PACIFICO.webp",
    "/images/socios/PACIFIcTEK.webp",
    "/images/socios/PASMAR.webp",
    "/images/socios/PELAMBRE.webp",
    "/images/socios/Pernocenter.webp",
    "/images/socios/PHILLIPS.webp",
    "/images/socios/PILLADO.webp",
    "/images/socios/PLANNING-P3.webp",
    "/images/socios/Preomed-1.webp",
    "/images/socios/preu-gauss.webp",
    "/images/socios/PRIME.webp",
    "/images/socios/PROWISE.webp",
    "/images/socios/PUERTO-COQUIMBO.webp",
    "/images/socios/Red-Salud.webp",
    "/images/socios/Rio.webp",
    "/images/socios/ROMANI.webp",
    "/images/socios/RyT.webp",
    "/images/socios/SAE.webp",
    "/images/socios/SAN-GERONIMO.webp",
    "/images/socios/Santa-Valentina.webp",
    "/images/socios/Sercomp.webp",
    "/images/socios/Serena-Golf.webp",
    "/images/socios/SERENA-SUITE.webp",
    "/images/socios/Serena.webp",
    "/images/socios/Serv-Modulares.webp",
    "/images/socios/Serviteg.webp",
    "/images/socios/SIMAQ.webp",
    "/images/socios/Somos-Inolvidable.webp",
    "/images/socios/TABALI.webp",
    "/images/socios/Teatro-Centenario.webp",
    "/images/socios/teck-2.webp",
    "/images/socios/The-Broker.webp",
    "/images/socios/TPC.webp",
    "/images/socios/UCEN.webp",
    "/images/socios/UCN.webp",
    "/images/socios/ULS.webp",
    "/images/socios/UST.webp",
    "/images/socios/VIGIL.webp",
    "/images/socios/VILLA-VERLA.webp",
    "/images/socios/WEST.webp",
    "/images/socios/WILUG.webp",

];

const LogoMarquee = () => {
    return (
        <section className="py-12 bg-white overflow-hidden border-y border-gray-100">
            <div className="max-w-7xl mx-auto px-6 mb-8 flex justify-between items-end">
                <div>
                    <h2 className="text-primary text-3xl font-bold">Nuestros Socios</h2>

                </div>
                <a href="/socios" className="text-sm font-semibold text-gray-400 hover:text-primary transition-colors">
                    Ver todos los socios →
                </a>
            </div>

            <div className="relative flex overflow-x-hidden group">
                {/* Primera Fila de Logos */}
                <div className="flex animate-marquee whitespace-nowrap gap-12 items-center">
                    {sociosLogos.map((logo, index) => (
                        <div key={index} className="w-40 h-20 flex-shrink-0 flex items-center justify-center grayscale-0 opacity-100 hover:scale-110 transition-transform duration-300">
                            <img src={logo} alt="Socio" className="max-w-full max-h-full object-contain" />
                        </div>
                    ))}
                </div>

                {/* Copia de la Fila para el efecto infinito */}
                <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap gap-12 items-center h-full">
                    {sociosLogos.map((logo, index) => (
                        <div key={`copy-${index}`} className="w-40 h-20 flex-shrink-0 flex items-center justify-center grayscale-0 opacity-100 hover:scale-110 transition-transform duration-300">
                            <img src={logo} alt="Socio" className="max-w-full max-h-full object-contain" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LogoMarquee;