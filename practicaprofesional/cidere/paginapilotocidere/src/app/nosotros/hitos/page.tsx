"use client";
import React from "react";
import { motion } from "framer-motion";
import { PageHeaderAnimator } from "@/components/PageHeaderAnimator";

type Hito = {
    year: string;
    title: string;
    description: string;
    image: string;
    isLogo?: boolean;
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
        image: "/images/slider/Avenida-del-Mar-La-Serena.webp"
    },
    {
        year: "1980",
        title: "Algas Marinas",
        description: "CIDERE en 1980 asesoró a a la Cooperativa Algamar en el aspecto tecnológico, en la elaboración de proyectos destinados a diversificar su acción como el cultivo de Mitildos, así como la creación de Talleres Artesanales.",
        image: "/images/slider/"
    },
    {
        year: "1980-1981",
        title: "Camarón de Río",
        description: "CIDERE asesoró la instalación de 6 estaciones de cultivo de camarones en las provincias de Elqui y Limarí.",
        image: "/images/slider/"
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
        image: "/images/slider/"
    },
    {
        year: "1983",
        title: "Almacenaje de Productos Agrícolas de Ovalle",
        description: "CIDERE ayudó a la gestión de la Sociedad Feria Libre de Ovalle S.A., contribuyendo a los proyectos de factibilidad y de construcción, adjudicándose la respectiva propuesta.",
        image: "/images/slider/"
    },
    {
        year: "1983-1984",
        title: "Fondo de Forestación Regional",
        description: "CIDERE fue encargado de publicitar el proyecto y de recaudar fondos del sector privado para su realización.",
        image: "/images/slider/"
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
        image: "/images/slider/"
    },
    {
        year: "1989-1990",
        title: "Proyectos y estudios financiados por CIDERE en ese periodo",
        description: "CIDERE financió sea en conjunto con empresas o por si mismo proyectos y estudios como el proyecto de cultivo de camarón de roca, proyecto diseño y construcción de río-bomba, proyecto catastro de empresas de la IV Región, y el estudio de necesidades de insumos y disposición de desechos naturales.",
        image: "/images/slider/"
    },
    {
        year: "1996",
        title: "Edificio Empresarial",
        description: "CIDERE apuntó a la construcción de un edificio empresarial ubicado en la calle Cienfuegos en La Serena, ayudando a crecer el patrimonio de la institución.",
        image: "/images/slider/"
    },
    {
        year: "2008",
        title: "Convenio La Serena-Hangzhou",
        description: "En septiembre de 2008, CIDERE fue partícipe del acuerdo entre la ciudad de La Serena y la ciudad de Hangzhou, perteneciente a la República Popular China, con el propósito de generar convenios que permitan mayores oportunidades del desarrollo y la generación de nuevos negocios para los emprendedores locales.",
        image: "/images/slider/"
    },
    {
        year: "2012",
        title: "Lanzamiento Nodo Tecnológico CIDERE",
        description: "A fines de 2012, CIDERE apoyado con la Corfo inauguró el programa Nodo Tecnológico CIDERE, promoviendo la innovación y asociatividad de las empresas, accediendo a fuentes de información, redes y soluciones tecnológicas.",
        image: "/images/slider/"
    },
    {
        year: "2013",
        title: "Alianza Estratégica entre CIDERE y la Asociación de Industriales de Antofagasta",
        description: "En junio de 2013, CIDERE firmó un importante acuerdo con Sicep (Sistema de Calificación de Empresas Proveedoras), permitiendo que empresas de la región desarrollen nuevos negocios y dinamizen su industria.",
        image: "/images/slider/"
    },
    {
        year: "2013",
        title: "Rueda de Negocios Proveedores de la Minería",
        description: "En septiembre de 2013, CIDERE organizó por cuarta vez consecutiva en conjunto con Minera Los Pelambres y Corminco la Rueda de Negocios Proveedores de la Minería, con el objetivo de buscar un espacio de acercamiento entre la demanda de las compañias mineras regionales y la oferta disponible de los proveedores.",
        image: "/images/slider/"
    },
    {
        year: "2013",
        title: "Acuerdo entre CIDERE y la Cámara de Comercio y Turismo de Chile",
        description: "En diciembre de 2013, ambas organizaciones firmaron un importante acuerdo de cooperación estratégica.",
        image: "/images/slider/"
    },
    {
        year: "2013-2014",
        title: "Primer programa de postgrados en la Región de Coquimbo",
        description: "CIDERE en conjunto con Executive Business School ayudó a que La Serena fuera hogar de la impartición de los primeros programas de postgrado de la Región de Coquimbo.",
        image: "/images/slider/"
    },
    {
        year: "2015",
        title: "Acuerdo entre Universidad Bolivariana y CIDERE",
        description: "La Universidad Bolivariana y CIDERE firmaron un convenio de beneficios en matrícula y aranceles para los trabajadores de los socios asociados y sus familias.",
        image: "/images/slider/"
    },
    {
        year: "2015",
        title: "Acuerdo entre Tronwell La Serena y CIDERE",
        description: "Tronwell La Serena y CIDERE firmaron un convenio para los trabajadores de los socios asociados y sus familias que permite recibir capacitaciones en el idioma inglés.",
        image: "/images/slider/"
    },
    {
        year: "2016-2017",
        title: "CIDERE y SOFOFA",
        description: "En busca de tener un mayor protagonismo a nivel nacional, CIDERE en 2016 se unió a la Sociedad de Fomento Fabril (SOFOFA). En 2017, CIDERE logró un hito histórico al formar parte del Comité Ejecutivo de SOFOFA.",
        image: "/images/slider/"
    },
    {
        year: "2017",
        title: "Fondo de Innovación para la Competitividad Regional",
        description: "Por medio del fondo mencionado, CIDERE junto con la Corporación Regional del Desarrollo Produvtivo ejecutó el proyecto Desarrollo de Estudio de Prospección del Encadenamiento Productivo del Sector Industrial-Minero a través de una Estrategia de Fomento de Empresas Proveedoras Locales.",
        image: "/images/slider/"
    },
    {
        year: "2018",
        title: "Proyecto Bien Público Estratégico para la Competitividad",
        description: "CIDERE presentó este proyecto de nombre Plataforma para el Ecosistema Industrial Minero de la Región de Coquimbo, con el propósito de mejorar el desarrollo económico local entre empresas proveedoras de varios sectores y las compañias mineras, constructoras e industriales.",
        image: "/images/slider/"
    },
    {
        year: "2019",
        title: "Creación del Espacio Industrial Minero",
        description: "La gobernanza Espacio Industrial Minero es una iniciativa público-privada conformada en 2019 integrada por CIDERE, CRDP, Minera Los Pelambres, Teck y CMP.",
        image: "/assets/logos/",
        isLogo: true
    },
    {
        year: "2023",
        title: "Creación de la Red Asociativa y Crecimiento",
        description: "Durante el año se ejecutaron con éxito cuatro grandes proyectos en colaboración con CORFO, consolidando la posición de CIDERE. Además, el número de empresas asociadas creció un 11% albergando a 81 socios, y se empezó a impulsar prácticas para estudiantes de liceos técnicos profesionales y universidades.",
        image: "/assets/logos/LOGOS CIDERE SIN PALA-04.png",
        isLogo: true
    },
    {
        year: "2023",
        title: "Participación Estratégica en SOFOFA",
        description: "CIDERE mantuvo una participación activa en SOFOFA desempeñando un papel destacado en la Macrozona Norte, estrechando vínculos institucionales con ASINDA y CORPROA para fortalecer la presencia en la comunidad empresarial nacional.",
        image: "/assets/logos/LOGOS RED ASOCIATIVA-11.png",
        isLogo: true
    },
    {
        year: "2023",
        title: "Articulación Pública-Privada y Gobernanza",
        description: "Se formalizaron acuerdos con los municipios y el SII para fortalecer el trabajo colaborativo de la mano de 13 seremías. También se reforzó la gobernanza del Espacio Industrial Minero junto a las compañías mineras Teck, CMP y Minera Los Pelambres.",
        image: "/assets/logos/ESPACIO INDUSTRIAL.png",
        isLogo: true
    },
    {
        year: "2023",
        title: "Piloto Sello Regional",
        description: "Se estableció el Sello de Proveedores Región de Coquimbo por CIDERE y la UCN, con el objetivo principal de promover el desarrollo de empresas regionales, facilitar su encadenamiento y localización de nuevas empresas.",
        image: "/assets/logos/",
        isLogo: true
    },
    {
        year: "2024",
        title: "Compromiso Regional",
        description: "CIDERE en Junio de 2024 patrocinó conversatorios organizados por el Diario El Día sobre el consumo humano de agua en la región.",
        image: "/assets/logos/",
        isLogo: true
    },
    {
        year: "2024",
        title: "Transformación Digital de CIDERE",
        description: "Se lanzó el primer piloto de la plataforma Red de Socios CIDERE (RDS), permitiendo que los socios puedan fortalecer su colaboración para el desarrollo de la región.",
        image: "/assets/logos/RDS-LOGO-VERTICAL-01.png",
        isLogo: true
    },
    {
        year: "2026",
        title: "50 Aniversario",
        description: "CIDERE cumple Medio siglo de presencia en la región, con 94 empresas socias y una visión clara hacia el desarrollo sostenible de la región.",
        image: "/images/slider/Slide2VerSocios.webp"
    }
];

const HitosPage = () => {
    return (
        <main className="min-h-screen bg-transparent overflow-x-hidden">

            {/* Header Institucional */}
            <PageHeaderAnimator bgImage="/images/slider/laserena-70s.webp" className="bg-primary pt-32 pb-24 px-6 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <div className="absolute -top-24 -left-24 w-96 h-96 bg-secondary rounded-full blur-[120px]"></div>
                </div>

                <div className="relative z-10">
                    <h1 className="text-white text-4xl md:text-7xl font-black mb-6 uppercase tracking-tighter">
                        Hitos <span className="text-blue-500">Históricos</span>
                    </h1>
                    <p className="text-blue-100/70 text-lg md:text-xl max-w-2xl mx-auto font-medium">
                        50 años creando región
                    </p>
                </div>
            </PageHeaderAnimator>

            {/* Línea de Tiempo*/}
            <section className="py-24 px-4 md:px-6 relative max-w-6xl mx-auto">

                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-secondary/50 via-primary/20 to-transparent md:-translate-x-1/2"></div>

                <div className="space-y-24">
                    {hitos.map((hito, index) => (
                        <motion.div
                            key={index}
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
                                <div className="w-full md:w-1/2 pl-16 md:pl-0">
                                    <div className={`p-8 rounded-[2rem] bg-white border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 group relative ${index % 2 === 0 ? "md:text-right md:mr-4" : "md:text-left md:ml-4"
                                        }`}>

                                        <div className="relative z-10">
                                            <span className="text-secondary font-black text-xl mb-2 block tracking-widest">{hito.year}</span>
                                            <h3 className="text-primary text-2xl font-bold mb-4 uppercase leading-tight">{hito.title}</h3>
                                            <p className="text-gray-500 leading-relaxed text-sm font-medium">
                                                {hito.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* 2. El Punto de la Línea (Timeline Dot) */}
                                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-secondary rounded-full border-4 border-white shadow-[0_0_15px_rgba(0,209,255,0.5)] md:-translate-x-1/2 z-20"></div>

                                {/* 3. Parte de la Imagen */}
                                <div className="w-full md:w-1/2 pl-16 md:pl-0">
                                    <div className={`relative group overflow-hidden rounded-[2rem] aspect-video md:aspect-square lg:aspect-video shadow-lg ${hito.isLogo ? 'bg-white p-8 md:p-12 flex items-center justify-center' : ''}`}>
                                        <img
                                            src={hito.image}
                                            alt={hito.title}
                                            className={`w-full h-full transition-transform duration-700 group-hover:scale-105 ${hito.isLogo ? 'object-contain' : 'object-cover'}`}
                                        />
                                        <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500"></div>
                                    </div>
                                </div>

                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

        </main>
    );
};

export default HitosPage;