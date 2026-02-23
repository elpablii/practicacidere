import React from "react";
import { CalendarDaysIcon, UserGroupIcon, RocketLaunchIcon } from "@heroicons/react/24/outline";

const AboutBrief = () => {
    const stats = [
        {
            label: "Desde 1976",
            title: "Trayectoria Regional",
            desc: "Más de 50 años liderando el desarrollo sostenible en la Región de Coquimbo.",
            icon: <CalendarDaysIcon className="w-10 h-10 text-secondary" />,
        },
        {
            label: "94 Empresas",
            title: "Fuerza Multisectorial",
            desc: "Nuestra red integra socios de minería, agro, servicios y la academia.",
            icon: <UserGroupIcon className="w-10 h-10 text-secondary" />,
        },
        {
            label: "Propósito",
            title: "Asociatividad Real",
            desc: "Vinculamos al sector público y privado para crear impacto económico y social.",
            icon: <RocketLaunchIcon className="w-10 h-10 text-secondary" />,
        },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6 text-center md:text-left">
                    <div className="max-w-6xl text-center">
                        <h1 className="text-primary text-4xl md:text-6xl font-black mt-4 uppercase">
                            Impulsando el futuro de la Región de Coquimbo
                        </h1>
                    </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="relative p-10 rounded-[3rem] bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-2xl transition-all duration-500 group overflow-hidden"
                        >
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary/5 rounded-full blur-3xl group-hover:bg-secondary/10 transition-colors"></div>

                            <div className="mb-8 bg-white w-20 h-20 rounded-2xl flex items-center justify-center shadow-sm border border-gray-50 group-hover:scale-110 transition-transform duration-500">
                                {stat.icon}
                            </div>

                            <span className="block text-secondary font-black text-2xl mb-2 tracking-tight">
                                {stat.label}
                            </span>
                            <h3 className="text-xl font-bold text-primary mb-4 uppercase">
                                {stat.title}
                            </h3>
                            <p className="text-gray-500 leading-relaxed text-sm">
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