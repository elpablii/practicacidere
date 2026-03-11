import React from "react";
import { CalendarDaysIcon, UserGroupIcon, RocketLaunchIcon } from "@heroicons/react/24/outline";
import { socios } from "@/data/socios";

const AboutBrief = () => {
    const stats = [
        {
            label: "Desde 1976",
            title: "Trayectoria Regional",
            desc: "La Corporación Industrial para el Desarrollo de la Región de Coquimbo es una organización privada sin fines de lucro que nace hace 50 años formada por un grupo de empresarios regionales.",
            icon: <CalendarDaysIcon className="w-10 h-10 text-blue-600" />,
        },
        {
            label: `${socios.length} Entidades`,
            title: "Fuerza Multisectorial",
            desc: "Representamos al sector privado a través de una red multisectorial que integra industrias estratégicas como la educación, salud, minería, construcción, entre otros.",
            icon: <UserGroupIcon className="w-10 h-10 text-blue-600" />,
        },
        {
            label: "Propósito",
            title: "Asociatividad Real",
            desc: "Liderar desde la corporación el desarrollo económico, social y medioambiental de la Región de Coquimbo, por medio de la asociatividad y colaboración entre el sector público, privado y la academia.",
            icon: <RocketLaunchIcon className="w-10 h-10 text-blue-600" />,
        },
    ];

    return (
        <section className="py-12 bg-transparent">
            <div className="max-w-7xl mx-auto px-6">

                <div className="flex flex-col items-center justify-center mb-16 gap-6 text-center">
                    <div className="max-w-4xl text-center">
                        <h1 className="text-primary text-4xl md:text-5xl lg:text-6xl font-black mt-4 uppercase drop-shadow-sm">
                            Impulsando el futuro de la Región de Coquimbo
                        </h1>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="relative p-10 rounded-[3rem] bg-white/80 backdrop-blur-sm border border-white/60 shadow-xl shadow-blue-900/5 hover:-translate-y-2 hover:bg-white hover:shadow-2xl transition-all duration-500 group overflow-hidden"
                        >
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl group-hover:bg-blue-600/20 transition-colors"></div>

                            <div className="mb-8 w-20 h-20 rounded-2xl flex items-center justify-center bg-blue-50/50 shadow-inner border border-blue-100/50 group-hover:scale-110 transition-transform duration-500">
                                {stat.icon}
                            </div>

                            <span className="block text-blue-600 font-black text-2xl mb-2 tracking-tight">
                                {stat.label}
                            </span>
                            <h3 className="text-xl font-bold text-primary mb-4 uppercase drop-shadow-sm">
                                {stat.title}
                            </h3>
                            <p className="text-justify text-slate-600 leading-relaxed text-sm font-medium">
                                {stat.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutBrief;