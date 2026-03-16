"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { PageHeaderAnimator } from "@/components/PageHeaderAnimator";
import { socios } from "@/data/socios";

type Hito = {
    year: string;
    title: string;
    description: string;
    image: string;
    isLogo?: boolean;
    imageScale?: string;
    objectPosition?: string;
    socios?: number;
};

const hitos: Hito[] = [
    {
        year: "1976",
        title: "Fundación de CIDERE",
        description: "El 30 de marzo de 1976, CIDERE nace como una organización privada sin fines de lucro, formada por un grupo de empresarios regionales comprometidos con el desarrollo local.",
        image: "/images/slider/laserena-70s.webp"
    },
    {
        year: "1978",
        title: "Avenida del Mar",
        description: "Con el objetivo de mejorar el turismo en La Serena, CIDERE fue parte de la articulación que permitió avanzar en un tramo clave de la Avenida del Mar",
        image: "/images/linea de tiempo/Imagen25.webp"
    },
    {
        year: "1980",
        title: "Algas Marinas",
        description: "CIDERE en 1980 asesoró a a la Cooperativa Algamar en el aspecto tecnológico, en la elaboración de proyectos destinados a diversificar su acción como el cultivo de Mitildos, así como la creación de Talleres Artesanales.",
        image: "/images/linea de tiempo/Imagen27.webp"
    },
    {
        year: "1980-1981",
        title: "Camarón de Río",
        description: "CIDERE asesoró la instalación de 6 estaciones de cultivo de camarones en las provincias de Elqui y Limarí.",
        image: "/images/linea de tiempo/Imagen28.webp"
    },
    {
        year: "1981",
        title: "La Recova",
        description: "CIDERE mediante una articulación público-privada, fue partícipe de la construcción de La Recova, centro importante del comercio local.",
        image: "/images/slider/la-recova-la-serena.webp"
    },
    {
        year: "1982-1983",
        title: "Terminal Pesquero de La Serena",
        description: "CIDERE con recursos propios financió la construcción del Terminal Pesquero de La Serena.",
        image: "/images/slider/terminal-pesquero-la-serena.webp"
    },
    {
        year: "1983",
        title: "Programa de Desarrollo Caprino",
        description: "CIDERE con un rol articulador clave, contribuyó a elevar los estándares sanitarios de la industria caprina.",
        image: "/images/linea de tiempo/Imagen26.webp"
    },
    {
        year: "1983",
        title: "Almacenaje de Productos Agrícolas de Ovalle",
        description: "CIDERE ayudó a la gestión de la Sociedad Feria Libre de Ovalle S.A., contribuyendo a los proyectos de factibilidad y de construcción, adjudicándose la respectiva propuesta.",
        image: "/images/linea de tiempo/Imagen30.webp"
    },
    {
        year: "1983-1984",
        title: "Fondo de Forestación Regional",
        description: "CIDERE fue encargado de publicitar el proyecto y de recaudar fondos del sector privado para su realización.",
        image: "/images/linea de tiempo/Imagen29.webp"
    },
    {
        year: "Años 80",
        title: "Aeropuerto La Florida",
        description: "Después de un intenso temporal a mediados de la década de 1980, CIDERE con ayuda de la Cámara Chilena de la Construcción, colaboró en la construcción de una pista alternativa en el Aeropuerto La Florida.",
        image: "/images/slider/aeropuerto-la-florida.webp"
    },
    {
        year: "Años 80",
        title: "Ruta al Cerro Grande",
        description: "El primer camino que permitió acceder al Cerro Grande fue financiado por CIDERE.",
        image: "/images/slider/camino-cerro-grande.webp"
    },
    {
        year: "1987-1989",
        title: "Participación en proyectos de actividades productivas",
        description: "CIDERE en ese periodo fue parte de varios proyectos productivos como Proyecto Chochas, Aprovechamiento de Alga Ulva, Proyecto Aceites Escenciales, Proyecto Cultivo de Camarón de Río de Embalses, Proyecto Alga Lessonia y Proyecto Higuerilla.",
        image: "/images/linea de tiempo/Imagen41.webp"
    },
    {
        year: "1989-1990",
        title: "Proyectos y estudios financiados por CIDERE en ese periodo",
        description: "CIDERE financió sea en conjunto con empresas o por si mismo proyectos y estudios como el proyecto de cultivo de camarón de roca, proyecto diseño y construcción de río-bomba, proyecto catastro de empresas de la IV Región, y el estudio de necesidades de insumos y disposición de desechos naturales.",
        image: "/images/linea de tiempo/Imagen40.webp"
    },
    {
        year: "1996",
        title: "Edificio Empresarial",
        description: "CIDERE apuntó a la construcción de un edificio empresarial ubicado en la calle Cantournet 773 en La Serena, ayudando a crecer el patrimonio de la institución.",
        image: "/images/linea de tiempo/hito-edificio-empresarial.webp"
    },
    {
        year: "2008",
        title: "Convenio La Serena-Hangzhou",
        description: "En septiembre de 2008, CIDERE fue partícipe del acuerdo entre la ciudad de La Serena y la ciudad de Hangzhou, perteneciente a la República Popular China, con el propósito de generar convenios que permitan mayores oportunidades del desarrollo y la generación de nuevos negocios para los emprendedores locales.",
        image: "/images/linea de tiempo/Imagen43.webp"
    },
    {
        year: "2012",
        title: "Lanzamiento Nodo Tecnológico CIDERE",
        description: "A fines de 2012, CIDERE apoyado con la Corfo inauguró el programa Nodo Tecnológico CIDERE, promoviendo la innovación y asociatividad de las empresas, accediendo a fuentes de información, redes y soluciones tecnológicas.",
        image: "/images/linea de tiempo/Imagen44.webp"
    },
    {
        year: "2013",
        title: "Alianza Estratégica entre CIDERE y la Asociación de Industriales de Antofagasta",
        description: "En junio de 2013, CIDERE firmó un importante acuerdo con Sicep (Sistema de Calificación de Empresas Proveedoras), permitiendo que empresas de la región desarrollen nuevos negocios y dinamizen su industria.",
        image: "/images/linea de tiempo/Imagen33.webp"
    },
    {
        year: "2013",
        title: "Acuerdo entre CIDERE y la Cámara de Comercio y Turismo de Chile",
        description: "En diciembre de 2013, ambas organizaciones firmaron un importante acuerdo de cooperación estratégica.",
        image: "/images/linea de tiempo/Imagen46.webp"
    },
    {
        year: "2013-2014",
        title: "Primer programa de postgrados en la Región de Coquimbo",
        description: "CIDERE en conjunto con Executive Business School ayudó a que La Serena fuera hogar de la impartición de los primeros programas de postgrado de la Región de Coquimbo.",
        image: "/images/linea de tiempo/Imagen47.webp"
    },
    {
        year: "2016-2017",
        title: "CIDERE y SOFOFA",
        description: "En busca de tener un mayor protagonismo a nivel nacional, CIDERE en 2016 se unió a la Sociedad de Fomento Fabril (SOFOFA). En 2017, CIDERE logró un hito histórico al formar parte del Comité Ejecutivo de SOFOFA.",
        image: "/images/linea de tiempo/Imagen57.webp"
    },
    {
        year: "2017",
        title: "Fondo de Innovación para la Competitividad Regional",
        description: "Por medio del fondo mencionado, CIDERE junto con la Corporación Regional del Desarrollo Productivo (CRDP) ejecutó el proyecto Desarrollo de Estudio de Prospección del Encadenamiento Productivo del Sector Industrial-Minero a través de una Estrategia de Fomento de Empresas Proveedoras Locales.",
        image: "/images/linea de tiempo/foto-hito-fondo-innovacion.webp",
        isLogo: true,
        imageScale: "scale-[150%]"
    },
    {
        year: "2018",
        title: "Reunión del B20",
        description: "Entre el 17 y 18 de mayo de 2018, CIDERE tuvo presencia en calidad de invitado a la reunión de Líderes Empresariales del B20 en San Juan, Argentina, abordando el proyecto de la obra del futuro Túnel de Agua Negra.",
        image: "/images/linea de tiempo/Imagen58.webp"
    },
    {
        year: "2020",
        title: "Creación del Espacio Industrial Minero",
        description: "La gobernanza Espacio Industrial Minero es una iniciativa público-privada conformada en 2020 integrada por CIDERE, CRDP, Minera Los Pelambres, Teck y CMP.",
        image: "/images/linea de tiempo/espacio-industrial-minero.webp",
        isLogo: true,
        imageScale: "scale-[150%]"
    },
    {
        year: "2021",
        title: "Primera Cumbre Industrial Minera",
        description: "Entre el 7 y 9 de julio CIDERE y la Corporación Regional de Desarrollo Productivo (CRDP) realizaron en modalidad online la primera Cumbre Industrial Minera de la Región de Coquimbo, apuntando a generar encuentros para la visibilización y vinculación entre la minería, la industria y los proveedores de la región de Coquimbo, a través de diversas actividades y reuniones.",
        image: "/images/linea de tiempo/Primera-cumbre-espacio-industrial-minero.webp",
        isLogo: true,
        imageScale: "scale-[150%]"
    },
    {
        year: "2022",
        title: "Participación Estratégica: Macrozona Norte",
        description: "CIDERE forma parte de los gremios de la macrozona norte junto con la Asociación de Industriales de Arica (ASINDA), Asociación de Industriales de Iquique (AII), Asociación de Industriales de Antofagasta (AIA) y la Corporación para el Desarrollo de la Región de Atacama (CORPROA). Estas entidades se agrupan para defender intereses comunes, promover el desarrollo interregional y abordar desafíos conjuntos como infraestructura, inversión, permisos y leyes sectoriales, con acuerdos canalizados a través de SOFOFA..",
        image: "/images/linea de tiempo/Imagen24.webp",
        isLogo: true,
        imageScale: "scale-[150%]"
    },
    {
        year: "2022",
        title: "Compromiso Regional",
        description: "Desde el 2022, CIDERE dió inicio al ciclo de desayunos Compromiso Regional, liderado por Diario El Día, Minera Los Pelambres y la Universidad Católica del Norte. Espacios donde se abordaron temáticas de interés regional y proyección, generando espacios de encuentro con alta participación de autoridades, el mundo empresarial, la academia y la comunidad en general.",
        image: "/images/linea de tiempo/foto-hito-compromiso-regional-2024.webp",
        isLogo: true,
        imageScale: "scale-[500%]"
    },
    {
        year: "2023",
        title: "Creación de la Red Asociativa",
        description: "CIDERE junto con Corfo, Empresa Millan y West Rent a Car, crearon la Red Asociativa por medio del Espacio Industrial Minero, que tiene como objetivo aumentar la competitividad de un grupo de empresas proveedoras de servicios mineros de la Región de Coquimbo, a través de una estrategia asociativa que permita la incorporación de un modelo de negocios colaborativo, generando redes de carácter productivo, comercial y de innovación.",
        image: "/images/linea de tiempo/red asociativa.webp",
        isLogo: true,
        imageScale: "scale-[225%]"
    },
    {
        year: "2023",
        title: "Creando futuro",
        description: "Con el fin de fortalecer el ecosistema regional, CIDERE recibe desde 2023 a estudiantes de la Región de Coquimbo para la realización de sus prácticas y memorias. Esta iniciativa no solo responde a las necesidades del territorio, sino que también actúa como un puente estratégico para que los socios de la corporación identifiquen y retengan el talento joven de la zona.",
        image: "/images/linea de tiempo/alumnos-practica.webp",
        isLogo: true,
        imageScale: "scale-[150%]"
    },
    {
        year: "2023",
        title: "Programa de Difusión Tecnológica para la Sustentabilidad y Circularidad de las Empresas",
        description: "Programa que capacitó a empresas locales mediante talleres y mentorías para diseñar modelos de negocio innovadores y sustentables con impacto económico, social y ambiental.",
        image: "/images/linea de tiempo/programa-difusion-tecnologica.webp",
        isLogo: true,
        imageScale: "scale-[180%]"
    },
    {
        year: "2023",
        title: "Piloto Sello Regional",
        description: "Se estableció el Sello de Proveedores Región de Coquimbo por CIDERE y la UCN, con el objetivo principal de promover el desarrollo de empresas regionales, facilitar su encadenamiento y localización de nuevas empresas.",
        image: "/images/linea de tiempo/Imagen53.webp",
        isLogo: true,
        imageScale: "scale-[185%]"
    },
    {
        year: "2024",
        title: "Conformación Mesa Mujer",
        description: "CIDERE con empresarias de la región formaron la Mesa Mujer, con el propósito de aportar las brechas que limitan la incorporación de mujeres en el mundo del trabajo, emprendimiento y la actividad empresarial.",
        image: "/images/linea de tiempo/Imagen50.webp"
    },
    {
        year: "2024",
        title: "Encuentro Red ColaborAcción",
        description: "El evento Red ColaborAcción: ¡Conecta y Crece! realizado en el Faro Monumental de La Serena, consolidó una alianza estratégica entre expositores de alto nivel, empresarios y estudiantes de diversas provincias, fortaleciendo la sinergia regional, sentando las bases para un ecosistema de colaboración y crecimiento sostenible a largo plazo.",
        image: "/images/linea de tiempo/foto evento dinamiza red colaboraccion.webp",
        isLogo: true,
        imageScale: "scale-[185%]"
    },
    {
        year: "2025",
        title: "Primera Cumbre Gastronómica EIQF",
        description: "El evento se realizó en el Hotel Club La Serena y reunió a chefs, startups, emprendedores, grandes empresas, centros tecnológicos, restaurantes y a más de 30 speakers nacionales e internacionales.",
        image: "/images/linea de tiempo/cumbre-gastronomica.webp"
    },
    {
        year: "2025",
        title: "Quinta Cumbre Industrial Minera",
        description: "Entre el 22 y 23 de julio de 2025 se realizó la quinta edición de la Cumbre Industrial Minera, organizada íntegramente por el equipo de CIDERE. Este evento marcó un hito al incorporar por primera vez una expo minera.",
        image: "/images/linea de tiempo/foto-hito-quinta-cumbre-industrial.webp"
    },
    {
        year: "2026",
        title: "50 Aniversario",
        description: `CIDERE cumple medio siglo de presencia en la región, con ${socios.length} empresas socias y una visión clara hacia el desarrollo sostenible de la región.`,
        image: "/images/slider/Slide2VerSocios.webp"
    }
];

const decades = ["1976-1985", "1986-1995", "1996-2005", "2006-2015", "2016-2026"];

const getDecade = (yearStr: string) => {
    if (yearStr.includes("Años 80")) return "1976-1985";
    const match = yearStr.match(/\d{4}/);
    if (!match) return "1976-1985";
    const year = parseInt(match[0]);
    if (year >= 1976 && year <= 1985) return "1976-1985";
    if (year >= 1986 && year <= 1995) return "1986-1995";
    if (year >= 1996 && year <= 2005) return "1996-2005";
    if (year >= 2006 && year <= 2015) return "2006-2015";
    if (year >= 2016 && year <= 2026) return "2016-2026";
    return "1976-1985";
};

const HitosPage = () => {
    const [selectedDecade, setSelectedDecade] = useState<string>("1976-1985");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const filteredHitos = hitos.filter(h => getDecade(h.year) === selectedDecade);

    return (
        <main className="min-h-screen bg-transparent overflow-x-hidden">

            {/* Header Institucional */}
            <PageHeaderAnimator bgImage="/images/slider/laserena-70s.webp" className="bg-primary pt-32 pb-24 px-6 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500 rounded-full blur-[120px]"></div>
                </div>

                <div className="relative z-10">
                    <h1 className="text-white text-4xl md:text-7xl font-black mb-6 uppercase tracking-tighter">
                        Hitos <span className="text-blue-500">Emblemáticos</span>
                    </h1>
                    <p className="text-blue-100/70 text-lg md:text-xl max-w-2xl mx-auto font-medium">
                        50 años creando región
                    </p>
                </div>
            </PageHeaderAnimator>

            {/* Línea de Tiempo*/}
            <section className="py-16 md:py-24 px-4 md:px-6 relative max-w-7xl mx-auto">

                {/* Filtro de Décadas (Menú Desplegable) */}
                <div className="flex justify-center mb-20 relative z-40">
                    <div className="relative w-64 md:w-80">
                        <label className="block text-center text-sm font-bold text-gray-500 mb-3 uppercase tracking-wider focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary rounded-xl" tabIndex={0}>
                            Selecciona el periodo a ver
                        </label>
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="w-full flex items-center justify-between px-6 py-3 rounded-2xl bg-white border border-gray-200 shadow-lg text-primary font-bold text-lg transition-all hover:border-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-100"
                            aria-expanded={isDropdownOpen}
                        >
                            <span>{selectedDecade}</span>
                            <svg className={`w-5 h-5 text-blue-500 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </button>

                        {/* Opciones del Desplegable */}
                        {isDropdownOpen && (
                            <div className="absolute top-full left-0 mt-3 w-full bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50 transform origin-top animate-fade-in-down">
                                <ul className="flex flex-col">
                                    {decades.map((decade) => (
                                        <li key={decade}>
                                            <button
                                                onClick={() => {
                                                    setSelectedDecade(decade);
                                                    setIsDropdownOpen(false);
                                                }}
                                                className={`w-full text-left px-6 py-4 font-bold text-base md:text-lg transition-colors border-l-4 ${selectedDecade === decade
                                                    ? "bg-blue-50 text-blue-600 border-blue-500"
                                                    : "bg-white text-gray-500 hover:bg-gray-50 hover:text-blue-500 border-transparent"
                                                    }`}
                                            >
                                                {decade}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>

                <div className="relative max-w-6xl mx-auto">
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500/50 via-primary/20 to-transparent md:-translate-x-1/2"></div>

                    <div className="space-y-24">
                        {filteredHitos.length > 0 ? (
                            filteredHitos.map((hito, index) => (
                                <motion.div
                                    key={`${hito.title}-${selectedDecade}`}
                                    className="relative flex items-center"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                >

                                    {/* Contenedor del Hito */}
                                    <div className={`flex flex-col md:flex-row w-full items-center gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                        }`}>

                                        {/* 1. Parte del Contenido (Texto) */}
                                        <div className={`w-full md:w-1/2 pl-24 md:pl-0 ${index % 2 === 0 ? "md:pr-8 lg:pr-12" : "md:pl-8 lg:pl-12"}`}>
                                            <div className={`p-8 rounded-[2rem] bg-white border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 group relative focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary ${index % 2 === 0 ? "md:text-right" : "md:text-left"
                                                }`} tabIndex={0}>

                                                <div className="relative z-10">
                                                    <h3 className="text-primary text-2xl font-bold mb-4 uppercase leading-tight">{hito.title}</h3>
                                                    <p className="text-gray-500 leading-relaxed text-sm font-medium text-justify">
                                                        {hito.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* 2. Etiqueta del Año en la Línea */}
                                        <div className="absolute left-[34px] md:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                                            <div className="bg-blue-500 text-white font-black text-sm md:text-base px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)] border-2 border-white whitespace-nowrap">
                                                {hito.year}
                                            </div>
                                        </div>

                                        {/* 3. Parte de la Imagen */}
                                        <div className={`w-full md:w-1/2 pl-24 md:pl-0 ${index % 2 === 0 ? "md:pl-8 lg:pl-12 mt-8 md:mt-0" : "md:pr-8 lg:pr-12 mt-8 md:mt-0"}`}>
                                            <div className={`relative group overflow-hidden rounded-[2rem] aspect-video md:aspect-square lg:aspect-video shadow-lg ${hito.isLogo ? 'bg-white p-8 md:p-12 flex items-center justify-center' : ''}`}>
                                                <div className={`w-full h-full transition-transform duration-700 ${hito.imageScale || ''}`}>
                                                    <img
                                                        src={hito.image}
                                                        alt={`Hito: ${hito.title}`}
                                                        className={`w-full h-full transition-transform duration-700 group-hover:scale-105 ${hito.isLogo ? 'object-contain' : 'object-cover'} ${hito.objectPosition || 'object-center'}`}
                                                    />
                                                </div>
                                                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
                                            </div>
                                        </div>

                                    </div>
                                </motion.div>
                            ))
                        ) : (
                            <div className="text-center text-gray-500 font-bold py-20 relative z-20 text-xl border-2 border-dashed border-gray-200 rounded-3xl mx-4 bg-white/50 backdrop-blur-sm shadow-sm">
                                No se registraron hitos destacables en este periodo.
                            </div>
                        )}
                    </div>
                </div>
            </section>

        </main>
    );
};

export default HitosPage;