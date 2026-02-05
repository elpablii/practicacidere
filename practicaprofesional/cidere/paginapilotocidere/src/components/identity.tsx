import React from "react";

const Identity = () => {
    const data = [
        {
            id: "mision",
            title: "Misión",
            desc: "Escribe aquí la razón de ser de CIDERE...",
            icon: "🎯"
        },
        {
            id: "vision",
            title: "Visión",
            desc: "Escribe aquí hacia dónde proyectan la región...",
            icon: "👁️"
        },
        {
            id: "valores",
            title: "Valores",
            desc: "Integridad, Compromiso, Innovación...",
            icon: "💎"
        }
    ];

    return (
        <section className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {data.map((item) => (
                        <div key={item.id} id={item.id} className="scroll-mt-32 p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all">
                            <div className="text-4xl mb-6">{item.icon}</div>
                            <h2 className="text-primary text-2xl font-bold mb-4">{item.title}</h2>
                            <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Identity;