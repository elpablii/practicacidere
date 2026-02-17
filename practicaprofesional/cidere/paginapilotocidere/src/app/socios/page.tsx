import React from "react";
import Link from "next/link";
import Image from "next/image";
import rdsLogo from "@/assets/logos/RDS - LOGO VERTICAL-03.png";
import PartnerCard from "@/components/PartnerCard";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Socios Asociados - CIDERE",
    description: "Red de empresas asociadas a CIDERE Región de Coquimbo.",
};

const SociosPage = () => {

    const socios = [
        { name: "Aguas del Valle", url: "https://www.aguasdelvalle.cl/personas/inicio", logo: "/images/socios/Aguas-del-Valle.webp" },
        { name: "AIEP", url: "https://www.aiep.cl/", logo: "/images/socios/aiep.webp" },
        { name: "Universidad del Alba", url: "https://www.udalba.cl/", logo: "/images/socios/ALBA.webp" },
        { name: "Inmobiliaria Los Andes", url: "https://www.instagram.com/losandesinmobiliaria/?hl=es", logo: "/images/socios/ANDES.webp" },
        { name: "Millan", url: "https://jmillan.cl/", logo: "/images/socios/Millan.webp" },
        { name: "Andes Iron", url: "https://www.andesiron.com/", logo: "/images/socios/ANDES-IRON.webp" },
        { name: "Barrick Chile", url: "https://www.barrickchile.cl/", logo: "/images/socios/Barrick.webp" },
        { name: "Centro de Formación Técnica Juan Bohon", url: "https://www.juanbohon.cl/", logo: "/images/socios/BOHON.webp" },
        { name: "Empresas Huerta", url: "https://empresashuerta.cl/", logo: "/images/socios/CAHO.webp" },
        { name: "Transportes Callegari", url: "https://transportescallegari.cl/", logo: "/images/socios/CALLEGARI.webp" },
        { name: "Enjoy Coquimbo", url: "https://www.enjoy.cl/", logo: "/images/socios/CASINO-DE-LA-BAHIA.webp" },
        { name: "CDN Ingeniería & Construcción", url: "https://cdningenieria.cl/", logo: "/images/socios/CDN.webp" },
        { name: "CEDUC UCN", url: "https://ceduc.cl/", logo: "/images/socios/CEDUC.webp" },
        { name: "Celta", url: "https://ceduc.cl/", logo: "/images/socios/Celta.webp" },
        { name: "Centro Médico del Trabajador", url: "https://www.cmtsalud.cl/", logo: "/images/socios/CENTRO-MEDICO.webp" },
        { name: "Chirino y Asociados", url: "https://www.chirino.cl/", logo: "/images/socios/CHIRINO.webp" },
        { name: "Concreces", url: "https://concreces.cl/", logo: "/images/socios/CONCRESES.webp" },
        { name: "Consorcio", url: "https://sitio.consorcio.cl/", logo: "/images/socios/CONSORCIO.webp" },
        { name: "Contaud", url: "https://www.contaud.cl/", logo: "/images/socios/CONTAUD.webp" },
        { name: "Estrella Alpina", url: "https://www.estrellalpina.cl/", logo: "/images/socios/Estrella-Alpina.webp" },
        { name: "El Día", url: "https://www.diarioeldia.cl/", logo: "/images/socios/DIARIO.webp" },
        { name: "Dos Barbas", url: "https://dosbarbas.cl/web/", logo: "/images/socios/Dos-Barbas.webp" },
        { name: "Ecomac Empresas", url: "https://www.ecomac.cl/", logo: "/images/socios/ECOMAC.webp" },
        { name: "EDN Inversores", url: "", logo: "/images/socios/EDN.webp" },
        { name: "Planning P3", url: "https://www.planningp3.cl/", logo: "/images/socios/PLANNING-P3.webp" },
        { name: "Enrique Osses", url: "https://osses.cl/", logo: "/images/socios/ENRIQUE.webp" },
        { name: "Viña Falernia", url: "https://falernia.com/", logo: "/images/socios/FALERNIA.webp" },
        { name: "Faremin", url: "https://faremin.cl/", logo: "/images/socios/FAREMIN.webp" },
        { name: "Flex Buses", url: "https://www.flexbuses.com/", logo: "/images/socios/FLEX.webp" },
        { name: "F y A Servicios de Ingeniería", url: "https://www.instagram.com/fya_serviciosdeingenieria/", logo: "/images/socios/FYA-SERVICIOS-E-INGENIERIA.webp" },
        { name: "Habita", url: "https://www.ihabita.cl/", logo: "/images/socios/HABITA.webp" },
        { name: "Automotriz Hanshing", url: "https://www.automotrizhanshing.cl/", logo: "/images/socios/Hanshing.webp" },
        { name: "Agricola HC", url: "https://www.agricolahc.cl/", logo: "/images/socios/HC.webp" },
        { name: "Hellema", url: "https://www.hhechile.com/", logo: "/images/socios/Hellema.webp" },
        { name: "Hikza", url: "https://hikza.com/", logo: "/images/socios/Hikza.webp" },
        { name: "IGD Chile", url: "https://igdchile.com/", logo: "/images/socios/IGD.webp" },
        { name: "Imatec Salud", url: "https://www.imatecsalud.cl/", logo: "/images/socios/IMATEC.webp" },
        { name: "Importadora Elqui", url: "https://www.importadoraelqui.cl/", logo: "/images/socios/Importadora.webp" },
        { name: "Inacap", url: "https://portal.inacap.cl/", logo: "/images/socios/INACAP.webp" },
        { name: "Innova4d", url: "https://innova4d.cl/", logo: "/images/socios/INNOVA.webp" },
        { name: "Isa", url: "https://interchilesa.com/es/", logo: "/images/socios/ISA.webp" },
        { name: "Espacio Modular", url: "https://www.espaciomodular.cl/", logo: "/images/socios/INVES.webp" },
        { name: "Mall Puerta del Mar", url: "https://www.mallpuertadelmar.cl/", logo: "/images/socios/La-serena.webp" },
        { name: "Meet Greet", url: "https://meetgreet.cl/", logo: "/images/socios/MEET.webp" },
        { name: "Mill Montajes", url: "https://www.millmontajes.cl/", logo: "/images/socios/Mill.webp" },
        { name: "Molinor", url: "https://www.molinor.cl/", logo: "/images/socios/MOLINERA.webp" },
        { name: "Mutual de Seguros", url: "https://www.mutualdeseguros.cl/", logo: "/images/socios/MUTUAL.webp" },
        { name: "Napoleón Eventos", url: "https://www.instagram.com/napoleoneventos/", logo: "/images/socios/NAPOLEON.webp" },
        { name: "Norte Verde", url: "https://norte-verde.cl/", logo: "/images/socios/Norte-Verde-1.webp" },
        { name: "North Quality", url: "https://northquality.cl/", logo: "/images/socios/NORTH.webp" },
        { name: "Nutriser", url: "https://nutriser.cl/", logo: "/images/socios/Nutriser.webp" },
        { name: "Maquinarias Olmué", url: "https://www.maquinariasolmue.cl/", logo: "/images/socios/OLMUE.webp" },
        { name: "Vita Optica", url: "https://vitaoptica.cl/tienda/?swoof=1&product_cat=lentes-de-sol", logo: "/images/socios/OPTICA.webp" },
        { name: "CMP", url: "https://www.cmp.cl/", logo: "/images/socios/PACIFICO.webp" },
        { name: "Pacifictek", url: "https://www.pacifictek.cl/", logo: "/images/socios/PACIFICTEK.webp" },
        { name: "Pasmar", url: "http://www.pasmar.cl/", logo: "/images/socios/PASMAR.webp" },
        { name: "Minera Los Pelambres", url: "https://web.pelambres.cl/", logo: "/images/socios/PELAMBRE.webp" },
        { name: "Phillips, Yver y Cía Abogados", url: "", logo: "/images/socios/PHILLIPS.webp" },
        { name: "Pillado Empresas", url: "https://www.pilladoempresas.cl/", logo: "/images/socios/PILLADO.webp" },
        { name: "Preomed", url: "https://www.preomed.cl/", logo: "/images/socios/Preomed-1.webp" },
        { name: "Preuniversitario Gauss", url: "https://www.preugauss.com/", logo: "/images/socios/preu-gauss.webp" },
        { name: "Prime Energia", url: "https://prime-energia.com/", logo: "/images/socios/PRIME.webp" },
        { name: "Prowise", url: "https://www.prowise.cl/", logo: "/images/socios/PROWISE.webp" },
        { name: "Puerto Coquimbo", url: "https://puertocoquimbo.cl/", logo: "/images/socios/PUERTO-COQUIMBO.webp" },
        { name: "Rio Comunicaciones y Territorio", url: "https://riocomunicaciones.cl/", logo: "/images/socios/Rio.webp" },
        { name: "Buses Romani", url: "https://www.busesromani.cl/", logo: "/images/socios/ROMANI.webp" },
        { name: "SAE", url: "https://www.sae.cl/", logo: "/images/socios/SAE.webp" },
        { name: "Minera San Gerónimo", url: "https://www.cmsg.cl/nuestra-gente/", logo: "/images/socios/SAN-GERONIMO.webp" },
        { name: "Sociedad Santa Valentina", url: "https://www.esantavalentina.cl/constructora", logo: "/images/socios/Santa-Valentina.webp" },
        { name: "Sercomp", url: "https://sercompruiz.cl/", logo: "/images/socios/Sercomp.webp" },
        { name: "Serena Golf", url: "https://www.serenagolf.cl/", logo: "/images/socios/Serena-Golf.webp" },
        { name: "Serena Suite Park Hotel WG", url: "https://www.serenasuiteparkhotelwg.com/", logo: "/images/socios/SERENA-SUITE.webp" },
        { name: "Inmobiliaria Serena", url: "https://www.iserena.cl/", logo: "/images/socios/Serena.webp" },
        { name: "Servicios Mod", url: "https://serviciosmod.cl/", logo: "/images/socios/Serv-Modulares.webp" },
        { name: "Somos Inolvidable", url: "https://www.somosinolvidable.cl/", logo: "/images/socios/Somos-Inolvidable.webp" },
        { name: "Tabali", url: "https://tabali.com/", logo: "/images/socios/TABALI.webp" },
        { name: "Teatro Centenario", url: "https://teatrocentenario.cl/", logo: "/images/socios/Teatro-Centenario.webp" },
        { name: "Teck", url: "https://www.teck.com/operations-es/chile-es/operaciones-es/carmen-de-andacollo-es/", logo: "/images/socios/teck-2.webp" },
        { name: "TPC", url: "https://tpc.cl/", logo: "/images/socios/TPC.webp" },
        { name: "Universidad Central", url: "https://www.ucentral.cl/", logo: "/images/socios/UCEN.webp" },
        { name: "Universidad Católica del Norte", url: "https://www.ucn.cl/", logo: "/images/socios/UCN.webp" },
        { name: "Universidad de La Serena", url: "https://www.userena.cl/", logo: "/images/socios/ULS.webp" },
        { name: "Universidad Santo Tomás", url: "https://www.santotomas.cl/", logo: "/images/socios/UST.webp" },
        { name: "Vigil Telecomunicaciones", url: "https://vigilltda.cl/", logo: "/images/socios/VIGIL.webp" },
        { name: "Villa Verla", url: "https://www.villaverla.cl/", logo: "/images/socios/VILLA-VERLA.webp" },
        { name: "West Rent a Car", url: "https://www.westrentacar.com/", logo: "/images/socios/WEST.webp" },
        { name: "Wilug", url: "https://www.custodis.cl/", logo: "/images/socios/WILUG.webp" },
        { name: "Broker", url: "https://thebroker.cl/", logo: "/images/socios/The-Broker.webp" },
        { name: "Pernocenter", url: "https://www.instagram.com/pernocenter_laserena/", logo: "/images/socios/Pernocenter.webp" },
        { name: "clínica Red Salud Elqui", url: "https://www.redsalud.cl/", logo: "/images/socios/Red-Salud.webp" },
        { name: "Dulcería Lilis", url: "https://www.lilis.cl/quienes-somos/", logo: "/images/socios/Lilis.webp" },
        { name: "Elquivisión", url: "https://www.elquivision.cl/", logo: "/images/socios/Elquivision.webp" },
        { name: "SIMAQ", url: "https://www.gruasimaq.cl/", logo: "/images/socios/SIMAQ.webp" },
        { name: "CA Servicios Spa", url: "https://caserviciosspa.cl/", logo: "/images/socios/CA.webp" },
        { name: "R y T Ingeniería Construcción", url: "https://rytconstruccion.cl/", logo: "/images/socios/RyT.webp" },
        { name: "Angela Suckel y Asociados", url: "https://asuckel.cl/", logo: "/images/socios/Angela.webp" },
        { name: "ICOMAT", url: "https://icomat.cl/", logo: "/images/socios/icomat.webp" },
        { name: "Serviteg", url: "http://www.serviteg.cl/", logo: "/images/socios/Serviteg.webp" },
        { name: "DV Drilling", url: "https://www.dvdrilling.cl/", logo: "/images/socios/dvd.webp" },

    ];

    return (
        <div className="bg-[#f8fafc] min-h-screen">
            <section className="bg-gradient-to-br from-primary to-blue-900 py-28 px-6 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <h1 className="text-white text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
                        Nuestros Socios
                    </h1>
                    <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto opacity-80 leading-relaxed">
                        Más de 90 empresas líderes colaborando para el desarrollo de la Región de Coquimbo.
                    </p>
                </div>
            </section>

            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                        {socios.map((socio, index) => (
                            <PartnerCard key={index} {...socio} />
                        ))}
                    </div>

                    {/* BLOQUE HAZTE SOCIO */}
                    <div className="mt-32 bg-white rounded-[3rem] p-8 md:p-16 shadow-xl border border-gray-100 flex flex-col md:flex-row items-center gap-10">
                        <div className="flex-1 text-center md:text-left">
                            <h2 className="text-primary text-3xl md:text-4xl font-black mb-4">¿Tu empresa aún no es parte?</h2>
                            <p className="text-gray-600 text-lg mb-8">
                                Únete a la corporación multisectorial con más trayectoria de la región accediendo a la Red de Socios Cidere para potenciar tus conexiones estratégicas.
                            </p>
                            <Link href="/hazte-socio" className="inline-block bg-primary hover:bg-primary-light text-white font-bold py-4 px-10 rounded-2xl shadow-lg transition-all hover:-translate-y-1">
                                Quiero ser Socio
                            </Link>
                        </div>
                        <div className="flex-1 flex justify-center items-center">
                            <Image
                                src={rdsLogo}
                                alt="Logo RDS"
                                className="w-full max-w-xs md:max-w-sm object-contain drop-shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SociosPage;